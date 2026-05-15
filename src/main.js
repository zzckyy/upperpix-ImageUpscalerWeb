import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import 'milligram'

const brand = "Upperpix"
const hero = "Make your photo more live with"

document.querySelector('#app').innerHTML = `
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
    <div class="hero-left">
    <h1>${hero} <span class="brand">${brand}</span></h1>
    <p class="hero-section">lorem ipsum dolor sit amet.</p>

    </div>

    <div class="image-preview-container">
      <span>
      <p class="text-center">Original</p>
      <img src="" class="image-preview">
      </span>

      <span>
      <p class="text-center">Upscaled</p>
      <img src="" class="image-preview">
      </span>
    </div>
    
  </div>

  <div>
  
  </div>
<section>

<main>
  <div class="box">
    <img src="" class="img-box">
    <h3>Upscale your low-res images</h3>
    <p>Increase image resolution with our AI upscale image tool while preserving natural details and textures. The system analyzes the photo to understand its shapes, edges, and contrast, using these visual cues to reconstruct details and produce a sharper, clearer result. This is especially useful for photos, digital artwork, product images, or other visuals that need higher resolution and improved clarity.</p>
    <button class="box-btn">Upscale</button>
    </div>

  <div class="box">
    <img src="" class="img-box">
    <h3>Upscale your low-res images</h3>
    <p>Increase image resolution with our AI upscale image tool while preserving natural details and textures. The system analyzes the photo to understand its shapes, edges, and contrast, using these visual cues to reconstruct details and produce a sharper, clearer result. This is especially useful for photos, digital artwork, product images, or other visuals that need higher resolution and improved clarity.</p>
    <button class="box-btn">Upscale</button>
    </div>

  <div class="box">
    <img src="" class="img-box">
    <h3>Upscale your low-res images</h3>
    <p>Increase image resolution with our AI upscale image tool while preserving natural details and textures. The system analyzes the photo to understand its shapes, edges, and contrast, using these visual cues to reconstruct details and produce a sharper, clearer result. This is especially useful for photos, digital artwork, product images, or other visuals that need higher resolution and improved clarity.</p>
    <button class="box-btn">Upscale</button>
    </div>

  <div class="box">
    <img src="" class="img-box">
    <h3>Upscale your low-res images</h3>
    <p>Increase image resolution with our AI upscale image tool while preserving natural details and textures. The system analyzes the photo to understand its shapes, edges, and contrast, using these visual cues to reconstruct details and produce a sharper, clearer result. This is especially useful for photos, digital artwork, product images, or other visuals that need higher resolution and improved clarity.</p>
    <button class="box-btn">Upscale</button>
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
    </footer>
`
