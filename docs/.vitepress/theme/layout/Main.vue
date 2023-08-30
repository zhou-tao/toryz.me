<script setup lang="ts">
  import { useData } from 'vitepress'
  import NotFound from '../pages/not-found.vue'
  import List from '../pages/list.vue'
  import Card from '../pages/card.vue'
  import Pager from '../components/Pager.vue'

  const { page, frontmatter } = useData()
</script>

<template>
  <main class="main">
    <article class="article">
      <NotFound v-if="page.isNotFound" />
      <List v-else-if="frontmatter.layout === 'list'" />
      <Card v-else-if="frontmatter.layout === 'card'" />
      <Content v-else class="slide-enter-content" />
      <Pager v-if="frontmatter.layout !== 'home'" />
    </article>
    <slot />
  </main>
</template>

<style scoped>
.main {
  @apply px-12 py-10 of-x-hidden max-w-main m-auto;
}
</style>
