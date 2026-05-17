import "../style.css";
import "milligram";
import { Navbar } from "../component/navbar";
import { removeBackground } from "@imgly/background-removal";

const brand = "Upperpix";

document.querySelector("#app").innerHTML = /*html */ `

    ${Navbar("bgremove")}

    <section class="">
        <div class="hero">
            <h1 class="brand">RETOUCH</h1>
        </div>
        <div class="jumbotron">
            <div class="input-container">
                <p>ORIGINAL</p>
                <input type="file" accept="image/*" id="image-input" class="input" placeholder="">
                <label for="image-input" id="label-input" class="label">Upload your image here</label>
            </div>
            
            <div class="output-container">
                <p>REMOVED BG</p>
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

function updateProgress(percent, status = "") {
    output.innerHTML = `
        <div class="processing">
            <p>Processing... ${percent}%</p>
            ${status ? `<p style="font-size:0.8em;opacity:0.7">${status}</p>` : ""}
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${percent}%"></div>
            </div>
        </div>
    `;
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
    updateProgress(0, "Loading model...");

    try {
        const result = await removeBackground(file, {  // ← langsung pakai file, no resize
            progress: (key, current, total) => {
                const percent = Math.round((current / total) * 100);
                const status = key.includes("fetch") ? "Downloading model..." : "Removing background...";
                updateProgress(percent, status);
            },
        });

        const resultUrl = URL.createObjectURL(result);

        output.innerHTML = `<img src="${resultUrl}" class="image-output"/>`;
        downloadBtn.href = resultUrl;
        downloadBtn.download = "removed-bg.png";
        downloadBtn.style.display = "block";

    } catch (err) {
        output.innerHTML = `<div class="processing"><p>❌ Error: ${err.message}</p></div>`;
        console.error(err);
    }
});