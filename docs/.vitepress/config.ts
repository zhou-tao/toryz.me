import { defineConfigWithTheme } from 'vitepress'
import Unocss from 'unocss/vite'

export default defineConfigWithTheme({
  title: 'toryz.me',
  description: '个人站点',
  appearance: false,
  lang: 'zh',
  lastUpdated: true,
  cleanUrls: true,
  vite: {
    plugins: [
      Unocss()
    ]
  },
  markdown: {
    theme: 'vitesse-dark'
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '博客', link: '/posts' },
      { text: '项目', link: '/projects' },
      { text: '友链', link: '/friend-links' },
      {
        text: '为爱发电',
        link: 'https://afdian.net/a/toryz?tab=home',
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5c-1.977-1.186-7.083-3.937-9.131-8.499L1 13v-2h1.21A9.552 9.552 0 0 1 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2Zm0 2c-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5C5.56 5 4 6.657 4 9c0 .685.09 1.352.267 2h2.167L8.5 7.556l3 5L12.434 11H17v2h-3.434L11.5 16.444l-3-5L7.566 13H5.108c.79 1.374 1.985 2.668 3.537 3.903c.745.593 1.54 1.146 2.421 1.7c.299.189.595.37.934.572c.339-.202.635-.383.934-.571a26.752 26.752 0 0 0 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4Z"/></svg>'
        }
      },
      {
        text: 'Github',
        link: 'https://github.com/zhou-tao',
        icon: {
          name: 'github'
        }
      }
    ],
    waline: {
      serverURL: 'https://toryz-me.netlify.app',
      requiredMeta: ['nick', 'mail'],
      wordLimit: 200,
      pageSize: 5,
      dark: 'html.dark'
    }
  }
})
