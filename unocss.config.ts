import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
  transformerVariantGroup,
  transformerDirectives
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      light_bg: '#fff',
      dark_bg: '#050505',
      light_text: '#374151',
      dark_text: '#e5e7eb'
    },
    height: {
      header: '64px',
      footer: '50px'
    }
  },
  shortcuts: {
    root_bg: 'bg-light_bg dark:bg-dark_bg',
    root_text: 'text-light_text dark:text-dark_text'
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      warn: true,
      extraProperties: {
        'width': '1.25rem',
        'height': '1.25rem',
        'display': 'inline-block',
        'vertical-align': 'text-bottom'
      }
    })
  ],
  transformers: [
    transformerVariantGroup(),
    transformerDirectives()
  ],
  safelist: [
    'i-ri-github-line',
    'i-ri-heart-pulse-line'
  ]
})
