import './style.css'
import javascriptLogo from './assets/javascript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import 'milligram'


const brand = "Upperpix"
const hero = "Make your photo more live with Upperpix"

document.querySelector('#app').innerHTML = `
<nav class="navigation">
  <div class="container navigation-container flex">
    <div>
      <a class="navigation-title" href="/">
      <strong>${brand}</strong>
    </a>
    </div>
    
    <div>
      <button>Upscale</button>
      <button>Low Light</button>
      <button>Retouch</button>
      <button>Denoise</button>
    </div>
  </div>
</nav>

<section class="">
  <div class="hero">
    <p>${hero}</p>

    <div class="image-preview-container">
      <span>
      <p class="text-center">Original</p>
      <img src="" class="image-preview">
      </span>

      <span>
      <p class="text-center">Result - Upscaled</p>
      <img src="" class="image-preview">
      </span>
    </div>
    
  </div>

  <div>
  
  </div>
<section>

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
