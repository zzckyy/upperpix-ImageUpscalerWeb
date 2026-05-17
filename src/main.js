import "./style.css";
import javascriptLogo from "./assets/javascript.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "milligram";

const brand = "Upperpix";
const hero = `Make Your Photos Come Alive with`;

document.querySelector("#app").innerHTML = /*html */ `
  <nav class="navigation">
    <div class="container navigation-container flex">
      <div>
        <a class="navigation-title" href="/">
          <strong>${brand}</strong>
        </a>
      </div>

      <div class="nav-btn-container">
        <a href="src/pages/html/upscale.page.html"><button>Upscale</button></a>
        <a href="src/pages/html/lowlight.page.html"><button>Low-Light</button></a>
        <a href="src/pages/html/bgremove.page.html"><button>Remove BG</button></a>
      </div>
    </div>
  </nav>

  <section class="">
    <div class="hero">
      <div class="hero-left">
        <h1>${hero} <span class="brand">${brand}</span></h1>
      </div>

      <div class="image-preview-container">
        <span>
          <p class="text-center">Original</p>
          <img src="src/assets/img/preview.jpg" class="image-preview" />
        </span>

        <span>
          <p class="text-center">Upscaled</p>
          <img src="src/assets/img/upscaled.png" class="image-preview" />
        </span>
      </div>
    </section>
      <main>
        <div class="box">
          <img src="src/assets/img/cat.jpg" class="img-box" />
          <h3>Upscaler</h3>
          <p>
            Enlarge your photos without the blurry, pixelated results typical of standard resizing. Edges stay crisp, textures remain intact, and fine details are preserved — so your image looks sharp and clear even at twice the original size.
          </p>
          <div class="box-footer">
              <a href="src/pages/html/upscale.page.html">Upscale my image</a>
          </div>
        </div>

        <div class="box">
          <img src="src/assets/img/lowlight.jpg" class="img-box" />
          <h3>Low-Light Enhancer</h3>
          <p>
            Brighten and restore photos taken in dark or poorly lit conditions. Shadows are lifted, hidden details are recovered, and exposure is balanced — giving your photo a natural, well-lit look without washing out colors.
          </p>
          <div class="box-footer">
              <a href="src/pages/html/lowlight.page.html">Low-Light Enhancement</a>
          </div>
        </div>

        <div class="box">
          <img src="src/assets/img/catbgblack.jpg" class="img-box" />
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
