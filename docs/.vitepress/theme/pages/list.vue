<script setup lang="ts">
  import { useData } from 'vitepress'

  const { frontmatter, site } = useData()

  const { sidebar = [] } = site.value?.themeConfig
</script>

<template>
  <h1 class="page-title">
    {{ frontmatter.title || 'List Page' }}
  </h1>
  {{ sidebar.length }}
  <ul>
    <div
      v-for="(item, idx) in sidebar.default" :key="item.link" class="slide-enter"
      :style="{
        '--enter-stage': idx,
        '--enter-step': '60ms',
      }"
    >
      <a :href="item.link" class="item">
        <li class="list-none! text-lg leading-1.2em my-4.5 tracking-wide">
          {{ item.text }}
        </li>
      </a>
    </div>
  </ul>
</template>
