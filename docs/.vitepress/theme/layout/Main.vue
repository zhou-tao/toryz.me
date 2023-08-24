<script setup lang="ts">
  import { useData } from 'vitepress'
  import NotFound from './404.vue'

  const { page, frontmatter } = useData()

  console.log(frontmatter)
</script>

<template>
  <main class="main">
    <NotFound v-if="page.isNotFound" />
    <template v-else>
      <!-- <div v-if="frontmatter.layout === 'home'">
        Custom home page!
      </div>
      <Content v-else /> -->
      <div class="content">
        <Content />
        <slot />
      </div>
    </template>
  </main>
</template>

<style scoped>
.main {
  @apply px-7 py-10 of-x-hidden;
}

.content {
  @apply max-w-700px m-auto;
}
</style>
