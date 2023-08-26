<script setup lang="ts">
  import { useData } from 'vitepress'
  import NotFound from '../pages/not-found.vue'

  const { page, frontmatter } = useData()

  console.log(frontmatter)
</script>

<template>
  <main class="main">
    <article class="article">
      <NotFound v-if="page.isNotFound" />
      <Content v-else />
      <slot />
    </article>
  </main>
</template>

<style scoped>
.main {
  @apply px-7 py-10 of-x-hidden;
}
</style>
