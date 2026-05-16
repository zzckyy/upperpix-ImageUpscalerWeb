
import "../style.css";
import javascriptLogo from "../assets/javascript.svg";
import viteLogo from "../assets/vite.svg";
import heroImg from "../assets/hero.png";
import "milligram";

import * as tf from "@tensorflow/tfjs";
import Upscaler from "upscaler";
// import Upscaler from "upscaler/dist/browser/esm";

await tf.setBackend('webgl');
await tf.ready();
const upscaler = new Upscaler();

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
                <div class="" id="image-output"></div>
                <a id="download"><button>Download Image</button></a>
            </div>
        </div>

    </section>
`

let currentURL;
const input = document.querySelector('#image-input');
const label = document.querySelector('#label-input');
const output = document.querySelector('#image-output');
const downloadBtn = document.querySelector('#download');

input.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    const image = new Image();

    if (!file) {
        label.textContent = "Upload your image here"
        downloadBtn.style.color = "none";
        return;
    }

    if (currentURL) { URL.revokeObjectURL(currentURL) };

    const url = URL.createObjectURL(file);
    currentURL = url

    input.style.backgroundImage = `url(${url})`;
    label.textContent = file.name

    image.src = url;
    output.innerHTML = "Processing...";
    // kasih napas ke browser
    await new Promise(r => setTimeout(r, 50));

    // resize dulu
    // const MAX_SIZE = 1024;
    await image.decode();

    

    // upscale
    const result = await upscaler.upscale(image, {
        scale: 2,
        patchSize: 32,
        padding: 2
    });

    output.innerHTML = "";
    output.innerHTML = `<img src="${result}" alt="Upscaled Image" class="image-output"/>`;

    downloadBtn.onclick = () => {
        if (!result) { alert("blom ada gambar") }
        downloadBtn.href = result;
        downloadBtn.download = "upscaled.png";

    }

})

