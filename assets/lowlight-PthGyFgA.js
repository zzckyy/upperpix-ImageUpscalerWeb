import{t as e}from"./navbar-CfYrOutH.js";document.querySelector(`#app`).innerHTML=`

    ${e(`lowlight`)}

    <section class="">
        <div class="hero">
            <h1 class="brand">LOW LIGHT</h1>
        </div>
        <div class="jumbotron">
            <div class="input-container">
                <p>ORIGINAL</p>
                <input type="file" accept="image/*" id="image-input" class="input" placeholder="">
                <label for="image-input" id="label-input" class="label">Upload your image here</label>
            </div>
            
            <div class="output-container">
                <p>ENHANCED</p>
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
`;var t,n=document.querySelector(`#image-input`),r=document.querySelector(`#label-input`),i=document.querySelector(`#image-output`),a=document.querySelector(`#download`);n.addEventListener(`change`,async e=>{let o=e.target.files[0];if(!o)return;t&&URL.revokeObjectURL(t);let s=URL.createObjectURL(o);t=s,r.textContent=o.name,n.style.backgroundImage=`url(${s})`,a.style.display=`none`,i.innerHTML=`<div class="processing"><p>Processing...</p></div>`;let c=await new Promise((e,t)=>{let n=new Image;n.onload=()=>e(n),n.onerror=t,n.src=s});try{let e=document.createElement(`canvas`);e.width=c.naturalWidth,e.height=c.naturalHeight;let t=e.getContext(`2d`);t.drawImage(c,0,0);let n=t.getImageData(0,0,e.width,e.height),r=n.data,o=.5;for(let e=0;e<r.length;e+=4)r[e]=Math.min(255,(r[e]/255)**o*255+30),r[e+1]=Math.min(255,(r[e+1]/255)**o*255+30),r[e+2]=Math.min(255,(r[e+2]/255)**o*255+30);t.putImageData(n,0,0);let s=e.toDataURL(`image/jpeg`,.92);i.innerHTML=`<img src="${s}" class="image-output"/>`,a.href=s,a.download=`enhanced.jpg`,a.style.display=`block`}catch(e){i.innerHTML=`<div class="processing"><p>❌ Error: ${e.message}</p></div>`,console.error(e)}});