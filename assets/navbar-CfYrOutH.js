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
    `}document.addEventListener(`click`,e=>{let t=document.getElementById(`menuDiv`);e.target.id===`menu`&&t.classList.toggle(`hidden`)});export{e as t};