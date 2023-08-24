<script setup lang="ts">
  import { useData } from 'vitepress'
  import NotFound from './NotFound.vue'

  const { page, frontmatter } = useData()

  console.log(frontmatter)
</script>

<template>
  <main class="main">
    <div class="article">
      <NotFound v-if="page.isNotFound" />
      <Content v-else />
      <slot />
    </div>
  </main>
</template>

<style scoped>
.main {
  @apply px-7 py-10 of-x-hidden;
}

.article {
  @apply max-w-700px m-auto;
}
</style>
