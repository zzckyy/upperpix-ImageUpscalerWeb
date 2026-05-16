// import Upscale from 'upscaler'
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
                <img src="" class="image-output" />
                Download image
            </div>
        </div>

    </section>
`

const input = document.querySelector('#image-input');
const label = document.querySelector('#label-input')

input.addEventListener('change', (e) =>{
    const files = e.target.files;
    if(files.length > 0){
        label.textContent = `${files[0].name}`
    }

    else{
        label.textContent = "Upload your image here"
    }
})