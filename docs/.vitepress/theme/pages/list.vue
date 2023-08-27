<script setup lang="ts">
  import { useData } from 'vitepress'

  const { frontmatter, site } = useData()

  const { sidebar = [] } = site.value?.themeConfig
</script>

<template>
  <h1>{{ frontmatter.title || 'List Page' }}</h1>
  {{ sidebar.length }}
  <ul>
    <li v-for="item in sidebar.default" :key="item.link">
      {{ item.text }}
    </li>
  </ul>
</template>

<style scoped>

</style>
