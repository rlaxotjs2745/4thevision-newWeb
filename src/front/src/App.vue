<template>
  <div id="app">
    <header-area id="compHeader" class="header-area"/>
    <div class="content-area">
      <router-view/>
    </div>
    <footer-area class="footer-area"/>
체<!--    <sns-area/>-->
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Sns from "@/components/Sns"


export default {
  components: {
    'header-area': Header,
    'footer-area': Footer,
    'sns-area' : Sns
  }
}
</script>

<style>
#app {
  min-width: 1280px;
  height: 100%;
  position: relative;
}
</style>

<style src="./style/custom.css"></style>