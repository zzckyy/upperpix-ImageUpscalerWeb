(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e=``){return`
    <nav class="container flex">
            <div>
                <a class="navigation-title" href="/">
                    <strong>Upperpix</strong>

                </a>
            </div>

            <div class="nav-btn-container">
                <a href="/upperpix/upscale.page.html">
                    <button class="${e===`upscale`?`active`:``}">Upscale</button>
                </a>
                <a href="/upperpix/lowlight.page.html">
                    <button class="${e===`lowlight`?`active`:``}">Low-Light</button>
                </a>
                <a href="/upperpix/bgremove.page.html">
                    <button class="${e===`bgremove`?`active`:``}">Remove BG</button>
                </a>
            </div>

            <button class="menu" id="menu" onclick="">MENU</button>
    </nav>

    <div class="menuDiv hidden" id="menuDiv">
        <a href="/upperpix/upscale.page.html">
                    <button class="${e===`upscale`?`active`:``}">Upscale</button>
                </a>
                <a href="/upperpix/lowlight.page.html">
                    <button class="${e===`lowlight`?`active`:``}">Low-Light</button>
                </a>
                <a href="/upperpix/bgremove.page.html">
                    <button class="${e===`bgremove`?`active`:``}">Remove BG</button>
                </a>
    </div>
    `}document.addEventListener(`click`,e=>{let t=document.getElementById(`menuDiv`);e.target.id===`menu`&&t.classList.toggle(`hidden`)});var t=`/upperpix-ImageUpscalerWeb/assets/preview-BnZX9DRQ.jpg`,n=`/upperpix-ImageUpscalerWeb/assets/upscaled-B9FMcAT5.png`,r=`/upperpix-ImageUpscalerWeb/assets/cat-CRW63B4g.jpg`,i=`/upperpix-ImageUpscalerWeb/assets/lowlight-Cz1i1-Ih.jpg`,a=`/upperpix-ImageUpscalerWeb/assets/catbgblack-CGSXW21q.jpg`,o=`Upperpix`,s=`Make Your Photos Come Alive with`;document.querySelector(`#app`).innerHTML=`
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