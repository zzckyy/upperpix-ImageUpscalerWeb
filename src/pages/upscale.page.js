
import "../style.css";
import javascriptLogo from "../assets/javascript.svg";
import viteLogo from "../assets/vite.svg";
import heroImg from "../assets/hero.png";
import "milligram";

import * as tf from "@tensorflow/tfjs";
import Upscaler from "upscaler";
import x2 from '@upscalerjs/esrgan-slim/2x';
// import Upscaler from "upscaler/dist/browser/esm";

await tf.setBackend('webgl');
await tf.ready();
const upscaler = new Upscaler({model: x2,});

const brand = "Upperpix";
const hero = "Make your photo more live with";

document.querySelector("#app").innerHTML = /*html */ `
<nav class="navigation">
    <div class="container navigation-container flex">
      <div>
        <a class="navigation-title" href="/">
          <strong>${brand}</strong>
        </a>
      </div>

      <div class="nav-btn-container">
        <button>Upscale</button>
        <button>Low Light</button>
        <button>Retouch</button>
        <button>Denoise</button>
      </div>
    </div>
  </nav>

    <section class="">
        <div class="hero">
            <h1 class="brand">UPSCALE</h1>
        </div>
        <div class="jumbotron">
            <div class="input-container">
                <p>ORIGINAL</p>
                <input type="file" accept="image/*" id="image-input" class="input" placeholder="">
                <label for="image-input" id="label-input" class="label">Upload your image here</label>
            </div>
            
            <div class="output-container">
                <p>UPSCALED</p>
                <div class="output-skeleton" id="image-output"></div>
                <a id="download"><button>Download Image</button></a>
            </div>
        </div>

    </section>

    <div class="info">
    <ul>
        <li>Privacy-first: all processing happens directly in your browser</li>
        <li>No uploads: your images never leave your device</li>
        <li>No storage: we don't save or track your files</li>
        <li>Be patient: processing runs locally and may take a moment</li>
    </ul>
    </div>
`

let currentURL;
const input = document.querySelector('#image-input');
const label = document.querySelector('#label-input');
const output = document.querySelector('#image-output');
const downloadBtn = document.querySelector('#download');
const outputContainer = document.querySelector('.output-container')

// Inisiasi worker sekali aja
const worker = new Worker(
    new URL("upscale.worker.js", import.meta.url),
    { type: "module" }
);

// Handler dari worker
worker.onmessage = (e) => {
    const { type, value, pixels, width, height, message } = e.data;

    if (type === "progress") {
        updateProgress(value);
    }

    if (type === "done") {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    const imageData = new ImageData(new Uint8ClampedArray(pixels), width, height);
    ctx.putImageData(imageData, 0, 0);
    const base64 = canvas.toDataURL("image/png");

    // ← hapus updateProgress(100) dari sini
    output.innerHTML = `<img src="${base64}" class="image-output"/>`;
    downloadBtn.href = base64;
    downloadBtn.download = "upscaled.png";
    downloadBtn.style.display = "block";
}

    if (type === "error") {
        output.innerHTML = `<div class="processing"><p>❌ Error: ${message}</p></div>`;
    }
};

// Fungsi progress bar
function updateProgress(percent) {
    output.innerHTML = `
        <div class="processing">
            <p>Processing... ${percent}%</p>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${percent}%"></div>
            </div>
        </div>
    `;
}

// Event listener input — kirim ImageData ke worker
input.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (currentURL) URL.revokeObjectURL(currentURL);
    const url = URL.createObjectURL(file);
    currentURL = url;

    const image = new Image();
    image.src = url;
    label.textContent = file.name;
    input.style.backgroundImage = `url(${url})`;
    downloadBtn.style.display = "none";

    await image.decode();

    // Ambil ImageData via canvas (bisa di-transfer ke worker)
    const canvas = document.createElement("canvas");
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    updateProgress(0);

    // Kirim ke worker pakai Transferable biar nggak copy data (lebih cepat)
    worker.postMessage(
        {
            type: "upscale",
            imageData: imageData.data.buffer,
            width: canvas.width,
            height: canvas.height,
        },
        [imageData.data.buffer] // ← transfer ownership, bukan copy
    );
});

