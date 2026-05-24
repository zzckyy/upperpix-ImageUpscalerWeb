import{t as e}from"./navbar-CfYrOutH.js";document.querySelector(`#app`).innerHTML=`

    ${e(`upscale`)}

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
                <a id="download" class="hidden"><button>Download Image</button></a>
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
`;var t,n=document.querySelector(`#image-input`),r=document.querySelector(`#label-input`),i=document.querySelector(`#image-output`),a=document.querySelector(`#download`);n.addEventListener(`change`,async e=>{let o=e.target.files[0];o||a.classList.add(`hidden`),t&&URL.revokeObjectURL(t);let s=URL.createObjectURL(o);t=s,a.classList.remove(`hidden`),r.textContent=o.name,n.style.backgroundImage=`url(${s})`,a.style.display=`none`,i.innerHTML=`<div class="processing"><p>Processing...</p></div>`;let c=await new Promise((e,t)=>{let n=new Image;n.onload=()=>e(n),n.onerror=t,n.src=s}),l=c.naturalWidth*2,u=c.naturalHeight*2,d=document.createElement(`canvas`);d.width=l,d.height=u;let f=d.getContext(`2d`);f.imageSmoothingEnabled=!0,f.imageSmoothingQuality=`high`,f.drawImage(c,0,0,l,u);let p=d.toDataURL(`image/jpeg`,1);i.innerHTML=`<img src="${p}" class="image-output"/>`,a.href=p,a.download=o.name+` upscaled.png`,a.style.display=`block`});