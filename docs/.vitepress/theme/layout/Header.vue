<script setup lang="ts">
  import { useData } from 'vitepress'
  import { isDark, toggleDark } from '../composables/useDark'

  const { site } = useData()

  const { socialLinks = [] } = site.value?.themeConfig
</script>

<template>
  <header class="header">
    <a href="/">LOGO</a>
    <nav class="nav">
      <a href="/posts" title="Blog">Blog</a>
      <a href="/projects" title="Projects">Projects</a>
      <a href="/links" title="FriendLinks">FriendLinks</a>
      <a v-for="(socialLink, index) in socialLinks" :key="index" :href="socialLink.link" :title="socialLink.title">
        <div :class="`i-ri-${socialLink.icon}-line`" />
      </a>
      <a cursor-pointer>
        <div :class="isDark ? 'i-ri-sun-line' : 'i-ri-moon-line'" @click="toggleDark" />
      </a>
    </nav>
  </header>
</template>

<style scoped>
.header {
  @apply flex justify-between p8;
}
.header a {
  @apply op-60 transition-200 ease hover:(op-100);
}

.nav {
  @apply grid grid-flow-col gap-5;
}

/* .nav a {
  @apply gap-5;
} */
</style>
