<script setup lang="ts">
  import { useData } from 'vitepress'

  const { frontmatter } = useData()
</script>

<template>
  <h1 class="mb-12!">
    {{ frontmatter.title || 'Card Page' }}
  </h1>
  <div>
    card view
  </div>
</template>

<style scoped>

</style>
