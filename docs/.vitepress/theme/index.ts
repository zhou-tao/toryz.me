import '@unocss/reset/tailwind-compat.css'
import 'uno.css'
import './styles/main.css'
import './styles/article.css'

import NProgress from 'nprogress'
import Layout from './layout/index.vue'

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    router.onBeforeRouteChange = (to) => {
      NProgress.start()
    }
    router.onBeforePageLoad = (to) => {
      NProgress.done()
    }
  }
}
