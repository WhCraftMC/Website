import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    root: process.cwd(),

    server: {
        port: 3000,
        open: " ",
    },

    build: {
        outDir: "",
        assetsDir: "",
    },

    plugins: [react()],
});