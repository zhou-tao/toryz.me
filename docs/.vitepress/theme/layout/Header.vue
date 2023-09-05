<script setup lang="ts">
  import { onBeforeMount, watch, ref } from 'vue'
  import { useData } from 'vitepress'
  import Icon from '../components/Icon.vue'

  const { site } = useData()

  const { logo, nav = [] } = site.value?.themeConfig

  const themeIcon = ref<'sun' | 'moon'>('sun')
  let toggleDarkFunc

  onBeforeMount(async () => {
    const { isDark, toggleDark } = await import('../composables/useDark')
    toggleDarkFunc = toggleDark
    watch(isDark, (v) => {
      themeIcon.value = v ? 'sun' : 'moon'
    })
  })
</script>

<template>
  <header class="header">
    <a href="/">
      <img class="logo" :src="logo" alt="logo">
    </a>
    <nav class="nav">
      <a v-for="n in nav" :key="n.link" :href="n.link" :title="n.text">
        <Icon v-if="n.icon" :icon="n.icon" />
        <template v-else>
          {{ n.text }}
        </template>
      </a>
      <a cursor="pointer" @click="toggleDarkFunc">
        <Icon :icon="{ name: themeIcon }" />
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
  @apply w10 h10;
}

.nav {
  @apply grid grid-flow-col gap-5;
}

.nav a {
  align-self: center;
}
</style>
