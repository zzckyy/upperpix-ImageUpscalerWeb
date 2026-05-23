import{t as e}from"./navbar-DqhfCCkG.js";document.querySelector(`#app`).innerHTML=`

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
                <a id="download"><button>Download Image</button></a>
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
`;var t,n=document.querySelector(`#image-input`),r=document.querySelector(`#label-input`),i=document.querySelector(`#image-output`),a=document.querySelector(`#download`);function o(e,t,n){let r=e.getImageData(0,0,t,n).data,i=new Uint8ClampedArray(r),a=[0,-1,0,-1,5,-1,0,-1,0];for(let e=1;e<n-1;e++)for(let n=1;n<t-1;n++)for(let o=0;o<3;o++){let s=0;for(let i=-1;i<=1;i++)for(let c=-1;c<=1;c++){let l=((e+i)*t+(n+c))*4+o;s+=r[l]*a[(i+1)*3+(c+1)]}i[(e*t+n)*4+o]=Math.min(255,Math.max(0,s))}e.putImageData(new ImageData(i,t,n),0,0)}n.addEventListener(`change`,async e=>{let s=e.target.files[0];if(!s)return;t&&URL.revokeObjectURL(t);let c=URL.createObjectURL(s);t=c,r.textContent=s.name,n.style.backgroundImage=`url(${c})`,a.style.display=`none`,i.innerHTML=`<div class="processing"><p>Processing...</p></div>`;let l=await new Promise((e,t)=>{let n=new Image;n.onload=()=>e(n),n.onerror=t,n.src=c}),u=l.naturalWidth*2,d=l.naturalHeight*2,f=document.createElement(`canvas`);f.width=u,f.height=d;let p=f.getContext(`2d`);p.imageSmoothingEnabled=!0,p.imageSmoothingQuality=`high`,p.drawImage(l,0,0,u,d),o(p,u,d);let m=f.toDataURL(`image/jpeg`,.92);i.innerHTML=`<img src="${m}" class="image-output"/>`,a.href=m,a.download=`upscaled.png`,a.style.display=`block`});