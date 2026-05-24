import{t as e}from"./navbar-CfYrOutH.js";var t=`/upperpix-ImageUpscalerWeb/assets/preview-CVX-ImXm.jpg`,n=`/upperpix-ImageUpscalerWeb/assets/upscaled-BOrHbwpZ.jpg`,r=`/upperpix-ImageUpscalerWeb/assets/cat-CofzmDtn.jpg`,i=`/upperpix-ImageUpscalerWeb/assets/lowlight-BndxwjdT.jpg`,a=`/upperpix-ImageUpscalerWeb/assets/catbgblack-7rffrELw.jpg`,o=`Upperpix`,s=`Make Your Photos Come Alive with`;document.querySelector(`#app`).innerHTML=`
  ${e()}

  <section class="">
    <div class="hero">
      <div class="hero-left">
        <h1>${s} <span class="brand">${o}</span></h1>
      </div>

      <div class="image-preview-container">
        <span>
          <p class="text-center">Original</p>
          <img src="${t}" class="image-preview" />
        </span>

        <span>
          <p class="text-center">Upscaled</p>
          <img src="${n}" class="image-preview" />
        </span>
      </div>
    </section>
      <main>
        <div class="box">
          <img src="${r}" class="img-box" />
          <h3>Upscaler</h3>
          <p>
            Enlarge your photos without the blurry, pixelated results typical of standard resizing. Your image will looks sharp and clear even at twice the original size without sacrifies the quality.
          </p>
          <div class="box-footer">
              <a href="upscale.page.html">Upscale my image</a>
          </div>
        </div>

        <div class="box">
          <img src="${i}" class="img-box" />
          <h3>Low-Light Enhancer</h3>
          <p>
            Brighten and restore photos taken in dark or poorly lit conditions. Shadows are lifted, hidden details are recovered, and exposure is balanced — giving your photo a natural, well-lit look without washing out colors.
          </p>
          <div class="box-footer">
              <a href="lowlight.page.html">Low-Light Enhancement</a>
          </div>
        </div>

        <div class="box">
          <img src="${a}" class="img-box" />
          <h3>Background Remover</h3>
          <p>
            Automatically detect and remove the background from any photo with precision. Whether it's a portrait, product shot, or object, the result is a clean, transparent cutout ready to be placed on any background you need.
          <div class="box-footer">
              <a href="bgremove.page.html">Low-Light Enhancement</a>
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