import "./style.css";
import javascriptLogo from "./assets/javascript.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "milligram";
import Navbar from "./component/navbar.js"

//gambar
import previewImg from "./assets/img/preview.jpg"
import upscaledImg from "./assets/img/upscaled.png"
import catImg from "./assets/img/cat.jpg"
import lowlightImg from "./assets/img/lowlight.jpg"
import catblackbgImg from "./assets/img/catbgblack.jpg"

const brand = "Upperpix";
const hero = `Make Your Photos Come Alive with`;

document.querySelector("#app").innerHTML = /*html */ `
  ${Navbar()}

  <section class="">
    <div class="hero">
      <div class="hero-left">
        <h1>${hero} <span class="brand">${brand}</span></h1>
      </div>

      <div class="image-preview-container">
        <span>
          <p class="text-center">Original</p>
          <img src="${previewImg}" class="image-preview" />
        </span>

        <span>
          <p class="text-center">Upscaled</p>
          <img src="${upscaledImg}" class="image-preview" />
        </span>
      </div>
    </section>
      <main>
        <div class="box">
          <img src="${catImg}" class="img-box" />
          <h3>Upscaler</h3>
          <p>
            Enlarge your photos without the blurry, pixelated results typical of standard resizing. Your image will looks sharp and clear even at twice the original size without sacrifies the quality.
          </p>
          <div class="box-footer">
              <a href="src/pages/html/upscale.page.html">Upscale my image</a>
          </div>
        </div>

        <div class="box">
          <img src="${lowlightImg}" class="img-box" />
          <h3>Low-Light Enhancer</h3>
          <p>
            Brighten and restore photos taken in dark or poorly lit conditions. Shadows are lifted, hidden details are recovered, and exposure is balanced — giving your photo a natural, well-lit look without washing out colors.
          </p>
          <div class="box-footer">
              <a href="src/pages/html/lowlight.page.html">Low-Light Enhancement</a>
          </div>
        </div>

        <div class="box">
          <img src="${catblackbgImg}" class="img-box" />
          <h3>Background Remover</h3>
          <p>
            Automatically detect and remove the background from any photo with precision. Whether it's a portrait, product shot, or object, the result is a clean, transparent cutout ready to be placed on any background you need.
          <div class="box-footer">
              <a href="src/pages/html/bgremove.page.html">Low-Light Enhancement</a>
          </div>
        </div>

      </main>

      <!-- Footer -->
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="column">
              <p>Upperpix</p>
            </div>
          </div>
        </div>
    </section>
`;