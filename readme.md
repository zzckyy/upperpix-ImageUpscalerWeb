# Upperpix - Free AI Image Upscaler Web

<p align="center">
  <strong>Enhance your images effortlessly with AI-powered upscaling.</strong><br/>
  Fast, lightweight, and fully web-based.
</p>

<hr/>

## Overview

**Upperpix** is a lightweight web application that allows users to upscale and enhance images directly in the browser using AI. Built with a minimal stack, it focuses on speed, simplicity, and accessibility without requiring heavy dependencies or backend processing.

This project demonstrates how modern browser capabilities combined with AI libraries can deliver powerful image processing tools entirely on the client side.

---

## Features

- AI-based image upscaling
- Noise reduction (denoise)
- Image enhancement
- Low-light improvement
- Before/after visual comparison
- Fully client-side processing (no upload to server)
- Fast and responsive UI

---

## Tech Stack

- **Vite** — Fast build tool and development server  
- **Vanilla JavaScript** — No framework overhead  
- **Milligram CSS** — Minimalist CSS framework  
- **UpscalerJS** — AI upscaling engine  

---

## Project Structure

```bash
upperpix/
│── public/
│── src/
│   ├── assets/
│       ├── img/
│   ├── js/
│   ├── styles/
│   └── main.js
│── index.html
│── package.json
│── vite.config.js
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/upperpix.git
cd upperpix
```

Install dependencies:

```bash
npm install
```

---

## Development

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

## Usage

1. Open the web app in your browser  
2. Upload an image  
3. Choose the enhancement tool (Upscale, Denoise, etc.)  
4. View the before/after comparison  
5. Download the processed image  

---

## Design Philosophy

Upperpix is built with a **minimal-first approach**:

- No unnecessary frameworks
- Clean and simple UI
- Focus on performance and usability
- Fully client-side for privacy and speed

---

## Roadmap

- Batch image processing  
- Drag & drop support  
- Progressive loading indicators (skeleton UI)  
- Mobile optimization (PWA support)  
- Additional AI models for enhancement  

---

<!-- ## Contributing

Contributions are welcome. Feel free to open issues or submit pull requests for improvements, bug fixes, or new features.

---

## License

This project is licensed under the MIT License.

--- -->

## Acknowledgements

- UpscalerJS for AI image processing  
- Milligram CSS for lightweight styling  
- Vite for modern development tooling  