<script setup lang="ts">
  import { useData } from 'vitepress'

  import { isDark, toggleDark } from '../composables/useDark'

  const { site } = useData()

  const { logo, nav = [], socialLinks = [] } = site.value?.themeConfig

  const socialLinkIcons = ['discord', 'facebook', 'github', 'instagram', 'linkedin', 'mastodon', 'slack', 'twitter', 'youtube', 'zhihu', 'bilibili']
</script>

<template>
  <header class="header">
    <a href="/">
      <img class="logo" :src="logo" alt="logo">
    </a>
    <nav class="nav">
      <a v-for="item in nav" :key="item.link" :href="item.link" :title="item.text">{{ item.text }}</a>
      <a v-for="(socialLink, index) in socialLinks" :key="index" :href="socialLink.link" :ariaLabel="socialLink.ariaLabel">
        <div v-if="socialLinkIcons.includes(socialLink.icon)" :class="`i-ri-${socialLink.icon}-line`" />
        <div v-else class="svg-icon" v-html="socialLink.icon.svg" />
      </a>
      <a cursor="pointer">
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
  @apply op-60 hover:op-100 transition-200 ease;
}

.logo {
  @apply w10 h10 rounded-full;
}

.nav {
  @apply grid grid-flow-col gap-5;
}

.svg-icon {
  color: currentColor;
  font-size: 1.23rem;
  display: inline-block;
  vertical-align: text-bottom;
}
</style>
