import "../style.css";
import "milligram";
import { Navbar } from "../component/navbar";

const brand = "Upperpix";

document.querySelector("#app").innerHTML = /*html */ `

    ${Navbar("upscale")}

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

// Sharpen kernel (unsharp mask 3x3)
function applySharpening(ctx, w, h) {
    const imageData = ctx.getImageData(0, 0, w, h);
    const data = imageData.data;
    const out = new Uint8ClampedArray(data);

    const kernel = [
         0, -1,  0,
        -1,  5, -1,
         0, -1,  0
    ];

    for (let y = 1; y < h - 1; y++) {
        for (let x = 1; x < w - 1; x++) {
            for (let c = 0; c < 3; c++) { // R, G, B
                let val = 0;
                for (let ky = -1; ky <= 1; ky++) {
                    for (let kx = -1; kx <= 1; kx++) {
                        const px = ((y + ky) * w + (x + kx)) * 4 + c;
                        val += data[px] * kernel[(ky + 1) * 3 + (kx + 1)];
                    }
                }
                out[(y * w + x) * 4 + c] = Math.min(255, Math.max(0, val));
            }
        }
    }

    ctx.putImageData(new ImageData(out, w, h), 0, 0);
}

input.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (currentURL) URL.revokeObjectURL(currentURL);
    const url = URL.createObjectURL(file);
    currentURL = url;

    label.textContent = file.name;
    input.style.backgroundImage = `url(${url})`;
    downloadBtn.style.display = "none";
    output.innerHTML = `<div class="processing"><p>Processing...</p></div>`;

    const image = await new Promise((res, rej) => {
        const img = new Image();
        img.onload = () => res(img);
        img.onerror = rej;
        img.src = url;
    });

    // Upscale 2x via canvas
    const SCALE = 2;
    const w = image.naturalWidth * SCALE;
    const h = image.naturalHeight * SCALE;

    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");

    // imageSmoothingQuality high = bilinear/bicubic interpolation
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(image, 0, 0, w, h);

    // Apply sharpening biar nggak blur setelah di-upscale
    applySharpening(ctx, w, h);

    const result = canvas.toDataURL("image/jpeg", 0.92);

    output.innerHTML = `<img src="${result}" class="image-output"/>`;
    downloadBtn.href = result;
    downloadBtn.download = "upscaled.png";
    downloadBtn.style.display = "block";
});