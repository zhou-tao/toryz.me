<script setup lang='ts'>
  import { computed } from 'vue'
  import { useData, useRoute } from 'vitepress'
  import { Waline } from '@waline/client/component'
  import '@waline/client/dist/waline.css'

  const data = useData()
  const serverURL = data.site.value.themeConfig.waline?.serverURL

  const path = computed(() => {
    return useRoute().path.replace(/(\/)?(index)?(\.html)?$/, '')
  })
  const shouldShowWaline = computed(() => {
    return serverURL && data.page.value.frontmatter.comments
  })

  const walineProps = Object.assign({
    serverURL
  }, data.site.value.themeConfig.waline)
</script>

<template>
  <Waline v-if="shouldShowWaline" v-bind="walineProps" :path="path" mt12 />
</template>
