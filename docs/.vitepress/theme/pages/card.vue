<script setup lang="ts">
  import { useData } from 'vitepress'
  import Empty from '../components/Empty.vue'

  const { frontmatter } = useData()

  const { items = [], title = 'Card' } = frontmatter.value
</script>

<template>
  <h1 class="page-title text-center">
    {{ title }}
  </h1>
  <Empty v-if="!items.length" />
  <div v-else>
    card view
  </div>
</template>

<style scoped>

</style>
