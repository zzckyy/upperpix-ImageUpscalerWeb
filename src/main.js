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
          <img src="src/assets/javascript.svg" class="image-preview" />
        </span>

        <span>
          <p class="text-center">Upscaled</p>
          <img src="src/assets/javascript.svg" class="image-preview" />
        </span>
      </div>
    </section>
      <main>
        <div class="box">
          <img src="src/assets/javascript.svg" class="img-box" />
          <h3>Upscale your low-res images</h3>
          <p>
            Increase image resolution with our AI upscale image tool while
            preserving natural details and textures. The system analyzes the
            photo to understand its shapes, edges, and contrast, using these
            visual cues to reconstruct details and produce a sharper, clearer
            result. This is especially useful for photos, digital artwork,
            product images, or other visuals that need higher resolution and
            improved clarity.
          </p>
          <div class="box-footer">
              <a href="src/pages/html/upscale.page.html">Upscale my image</a>
          </div>
        </div>

        <div class="box">
          <img src="src/assets/javascript.svg" class="img-box" />
          <h3>Enhance Low-Light images</h3>
          <p>
            Brighten and restore photos taken in dark or poorly lit conditions using our AI-powered low-light enhancement tool. The system intelligently lifts shadows, recovers hidden details, and balances exposure without washing out colors or introducing noise. Whether it's a night shot, an indoor photo, or an underexposed image, the result is a naturally bright and perfect lighting.
          </p>
          <div class="box-footer">
              <a href="src/pages/html/lowlight.page.html">Low-Light Enhancement</a>
          </div>
        </div>

        <div class="box">
          <img src="src/assets/javascript.svg" class="img-box" />
          <h3>Enhance Low-Light images</h3>
          <p>
            Brighten and restore photos taken in dark or poorly lit conditions using our AI-powered low-light enhancement tool. The system intelligently lifts shadows, recovers hidden details, and balances exposure without washing out colors or introducing noise. Whether it's a night shot, an indoor photo, or an underexposed image, the result is a naturally bright and perfect lighting.
          </p>
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
