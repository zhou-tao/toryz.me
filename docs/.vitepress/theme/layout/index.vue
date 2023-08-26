<script lang="ts" setup>
  import Header from './Header.vue'
  import Main from './Main.vue'
  import Footer from './Footer.vue'
</script>

<template>
  <div class="me layout-me">
    <Header />
    <Main>
      <Footer />
    </Main>
  </div>
</template>

<style scoped>
.layout-me {
  @apply min-h-100vh;
}
</style>
