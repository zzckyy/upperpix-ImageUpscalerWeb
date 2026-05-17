import "../style.css";
import javascriptLogo from "../assets/javascript.svg";
import viteLogo from "../assets/vite.svg";
import heroImg from "../assets/hero.png";
import "milligram";

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

    // ← Tunggu image beneran load dulu sebelum apapun
    const image = await new Promise((res, rej) => {
        const img = new Image();
        img.onload = () => res(img);
        img.onerror = rej;
        img.src = url;
    });

    // Resize ke max 512px
    const canvas = document.createElement("canvas");
    const MAX_SIZE = 512;
    let w = image.naturalWidth;
    let h = image.naturalHeight;

    console.log("Original size:", w, h); // ← cek dulu

    if (w > MAX_SIZE || h > MAX_SIZE) {
        const ratio = Math.min(MAX_SIZE / w, MAX_SIZE / h);
        w = Math.round(w * ratio);
        h = Math.round(h * ratio);
    }

    console.log("Resized to:", w, h); // ← pastiin udah 512 kebawah

    canvas.width = w;
    canvas.height = h;
    canvas.getContext("2d").drawImage(image, 0, 0, w, h);

    const resized = new Image();
    await new Promise((res) => {
        resized.onload = res;
        resized.src = canvas.toDataURL();
    });

    try {
    // Ganti upscaler.upscale() dengan canvas brightness enhancement
    const outCanvas = document.createElement("canvas");
    outCanvas.width = resized.naturalWidth;
    outCanvas.height = resized.naturalHeight;
    const ctx = outCanvas.getContext("2d");
    ctx.drawImage(resized, 0, 0);

    // Ambil pixel data
    const imageData = ctx.getImageData(0, 0, outCanvas.width, outCanvas.height);
    const data = imageData.data;

    // Gamma correction + brightness boost (simulasi low-light enhancement)
    const gamma = 0.5;       // < 1 = brighten shadows
    const brightness = 30;   // tambahan brightness flat

    for (let i = 0; i < data.length; i += 4) {
        data[i]     = Math.min(255, Math.pow(data[i] / 255, gamma) * 255 + brightness);     // R
        data[i + 1] = Math.min(255, Math.pow(data[i + 1] / 255, gamma) * 255 + brightness); // G
        data[i + 2] = Math.min(255, Math.pow(data[i + 2] / 255, gamma) * 255 + brightness); // B
        // Alpha [i+3] dibiarkan
    }

    ctx.putImageData(imageData, 0, 0);
    const enhancedImage = outCanvas.toDataURL("image/png");

    output.innerHTML = `<img src="${enhancedImage}" class="image-output"/>`;
    downloadBtn.href = enhancedImage;
    downloadBtn.download = "enhanced.png";
    downloadBtn.style.display = "block";

} catch (err) {
    output.innerHTML = `<div class="processing"><p>❌ Error: ${err.message}</p></div>`;
    console.error(err);
}
});