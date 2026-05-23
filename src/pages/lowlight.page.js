import "../style.css";
import "milligram";
import Navbar from "../component/navbar";

const brand = "Upperpix";

document.querySelector("#app").innerHTML = /*html */ `

    ${Navbar("lowlight")}

    <section class="">
        <div class="hero">
            <h1 class="brand">LOW LIGHT</h1>
        </div>
        <div class="jumbotron">
            <div class="input-container">
                <p>ORIGINAL</p>
                <input type="file" accept="image/*" id="image-input" class="input" placeholder="">
                <label for="image-input" id="label-input" class="label">Upload your image here</label>
            </div>
            
            <div class="output-container">
                <p>ENHANCED</p>
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

    try {
        const canvas = document.createElement("canvas");
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        const gamma = 0.5;
        const brightness = 30;

        for (let i = 0; i < data.length; i += 4) {
            data[i]     = Math.min(255, Math.pow(data[i] / 255, gamma) * 255 + brightness);
            data[i + 1] = Math.min(255, Math.pow(data[i + 1] / 255, gamma) * 255 + brightness);
            data[i + 2] = Math.min(255, Math.pow(data[i + 2] / 255, gamma) * 255 + brightness);
        }

        ctx.putImageData(imageData, 0, 0);
        const enhancedImage = canvas.toDataURL("image/jpeg", 0.92);

        output.innerHTML = `<img src="${enhancedImage}" class="image-output"/>`;
        downloadBtn.href = enhancedImage;
        downloadBtn.download = "enhanced.jpg";
        downloadBtn.style.display = "block";

    } catch (err) {
        output.innerHTML = `<div class="processing"><p>❌ Error: ${err.message}</p></div>`;
        console.error(err);
    }
});