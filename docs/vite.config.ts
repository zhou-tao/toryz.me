import { SearchPlugin } from 'vitepress-plugin-search'
import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    Unocss(),
    SearchPlugin({
      placeholder: 'Procure por algo!',
      buttonLabel: 'Procurar',
      previewLength: 10
    })
  ],
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['../..']
    }
  }
})
