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
    height: {
      header: '64px',
      footer: '50px'
    }
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
  blocklist: ['me'],
  safelist: [
    'i-ri-github-line',
    'i-ri-heart-pulse-line'
  ]
})
