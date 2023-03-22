<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer v-show="$route.meta.isShowFooter" />    
    <!-- <Footer v-show="!['/login', '/register'].includes(this.$route.path)"/>     -->
  </div>
</template>

<script>
import Header from './components//Header'
import Footer from './components//Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
