import * as tf from "@tensorflow/tfjs";
import Upscaler from "upscaler";
import x2 from "@upscalerjs/esrgan-slim/2x";

let upscaler;

async function init() {
    await tf.setBackend("webgl");
    await tf.ready();
    upscaler = new Upscaler({ model: x2, padding: 16 });
}

const ready = init();

self.onmessage = async (e) => {
    const { type, imageData, width, height } = e.data;

    if (type !== "upscale") return;

    await ready;

    try {
        self.postMessage({ type: "progress", value: 10 });

        const bitmap = await createImageBitmap(
            new ImageData(new Uint8ClampedArray(imageData), width, height)
        );

        self.postMessage({ type: "progress", value: 30 });

        // Ganti output ke "tensor"
        const tensor = await upscaler.upscale(bitmap, {
            output: "tensor",   // ← ini yang works di worker
            patchSize: 64,
            padding: 8,
            progress: (percent) => {
                const mapped = 30 + Math.round(percent * 0.6);
                self.postMessage({ type: "progress", value: mapped });
            },
        });

        self.postMessage({ type: "progress", value: 95 });

        const normalized = tf.div(tensor, 255);
        const pixels = await tf.browser.toPixels(normalized);

        // Cek shape dulu
        console.log("tensor.shape:", tensor.shape); // lihat di console browser

        // tensor shape dari upscaler = [height, width, 3] atau [1, height, width, 3]
        let h, w;
        if (tensor.shape.length === 4) {
            [, h, w] = tensor.shape; // [1, h, w, 3]
        } else {
            [h, w] = tensor.shape;   // [h, w, 3]
        }

        console.log("h:", h, "w:", w, "pixels.length:", pixels.length);
        // pixels.length harus === h * w * 4

        tensor.dispose();
        normalized.dispose();

        self.postMessage(
            { type: "done", pixels: pixels.buffer, width: w, height: h },
            [pixels.buffer]
        );

    } catch (err) {
        self.postMessage({ type: "error", message: err.message });
    } finally {
        tf.disposeVariables();
    }
};