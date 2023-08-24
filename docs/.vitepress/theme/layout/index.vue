<script lang="ts" setup>
  import Header from './Header.vue'
  import Main from './Main.vue'
  import Footer from './Footer.vue'
</script>

<template>
  <div class="dotme-layout">
    <Header />
    <Main>
      <Footer />
    </Main>
  </div>
</template>

<style scoped>
.dotme-layout {
  @apply min-h-100vh;
}
</style>
