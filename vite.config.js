import { resolve } from "path"
import { defineConfig } from "vite"

// More info at: https://v2.vitejs.dev/guide/build.html#library-mode

const outputFileNames = {
    /* format : filename */
    "umd": "meshtastic.js",
    "cjs": "meshtastic.cjs",
    "es": "meshtastic.es.js",
    "iife": "meshtastic.iife.js"
}

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, "src/main.js"),
            formats: ["umd", "cjs", "es", "iife"],
            name: 'Meshtastic',
            fileName: (format) => outputFileNames[format]
        },
    },
});
