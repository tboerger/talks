import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  plugins: [
    svgLoader(),
  ],
  resolve: {
    dedupe: [
      'vue'
    ]
  },
})
