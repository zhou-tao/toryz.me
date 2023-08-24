import DefaultTheme from 'vitepress/theme'
import '@unocss/reset/tailwind-compat.css'
import 'uno.css'
import './layout/styles/main.css'

import Layout from './layout/index.vue'

export default {
  Layout,
  // extends: DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // ...
    console.log(router, siteData)
  }
}
