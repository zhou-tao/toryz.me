<script setup lang="ts">
  import { useData } from 'vitepress'
  import Empty from '../components/Empty.vue'

  const { frontmatter } = useData()

  const { items = [], title = 'List' } = frontmatter.value
</script>

<template>
  <h1 class="page-title">
    {{ title }}
  </h1>
  <Empty v-if="!items.length" />
  <ul v-else>
    <div
      v-for="(item, idx) in items" :key="item.link" class="slide-enter"
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
