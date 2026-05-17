export function Navbar(activePage = "") {
    return /*html*/ `
    <nav class="navigation">
        <div class="container navigation-container flex">
            <div>
                <a class="navigation-title" href="/">
                    <strong>Upperpix</strong>
                </a>
            </div>

            <div class="nav-btn-container">
                <a href="/src/pages/html/upscale.page.html">
                    <button class="${activePage === 'upscale' ? 'active' : ''}">Upscale</button>
                </a>
                <a href="/src/pages/html/lowlight.page.html">
                    <button class="${activePage === 'lowlight' ? 'active' : ''}">Low-Light</button>
                </a>
                <a href="/src/pages/html/bgremove.page.html">
                    <button class="${activePage === 'bgremove' ? 'active' : ''}">Remove BG</button>
                </a>
            </div>
        </div>
    </nav>
    `;
}