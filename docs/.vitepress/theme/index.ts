import '@unocss/reset/tailwind-compat.css'
import 'uno.css'
import './styles/main.css'
import './styles/article.css'

import Layout from './layout/index.vue'

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    console.log(router, siteData)
  }
}
