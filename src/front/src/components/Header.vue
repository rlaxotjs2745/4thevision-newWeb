<template>
<div class="nav-menu">
  <!-- desktop -->
  <div class="nav-menu-layout d-menu">
    <div>
<!--      <img src="../assets/header-logo.svg" v-on:click="$router.replace('/')">-->
      <img src="../assets/header-logo.svg" v-on:click="quickMove('compMain')">
    </div>
    <div class="menu">
      <button v-on:click="quickMove('compMain')">Main</button>
      <button v-on:click="quickMove('compAbt4v')">About</button>
      <button v-on:click="quickMove('compService')">Services</button>
      <button v-on:click="quickMove('compTech')">Tech</button>
      <button v-on:click="quickMove('compPtf')">Portfolio</button>
      <button v-on:click="quickMove('compHsty')">History</button>
      <button v-on:click="quickMove('compCntct')" class="btn_contact">Contact</button>
    </div>
  </div>
  <!-- mobile -->
  <div class="nav-menu-layout m-menu">
    <img src="../assets/header-logo.svg">
    <button class="m-quick-menu"
            @click="menuToggle = true; toggleStatus = false"
            v-if="toggleStatus">
      <img src="../assets/ico_m_menu.svg">
    </button>
    <button class="m-quick-menu"
            @click="menuToggle = false; toggleStatus = true"
            v-if="!toggleStatus">
      <img src="../assets/ico_m_close.svg">
    </button>
    <!-- mobile menu toggle -->
    <div class="m-quick-toggle" v-show="menuToggle">
      <p class="quick-menu-title">QUICK MENU</p>
      <button v-on:click="quickMove('compMain')">Main</button>
      <button v-on:click="quickMove('compAbt4v')">About</button>
      <button v-on:click="quickMove('compService')">Services</button>
      <button v-on:click="quickMove('compTech')">Tech</button>
      <button v-on:click="quickMove('compPtf')">Portfolio</button>
      <button v-on:click="quickMove('compHsty')">History</button>
    </div>
  </div>

</div>
</template>

<script>

import router from "@/router";

export default {
  data () {
    return {
      desktopMenu: false,
      mobileNemu: true,
      menuToggle: false,
      toggleStatus: true,
      navigationStatus: true
    }
  },
  methods: {
    moveMain() {
      if (location.hash !== '#/') {
        router.replace('/');
      }
    },
    quickMove(sectionName) {
      // this.moveMain();
      let menuName = sectionName;
      // section's y position in Home.vue
      let scrollPoint = document.getElementById(menuName);
      window.scrollBy (0, scrollPoint.getBoundingClientRect().y);
    }
  }
}
</script>

<style scoped>
  button, img {
    cursor: pointer;
  }

  .nav-menu {
    z-index: 999;
    position: fixed;
    top: 0;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(6px);
  }

  .nav-menu-layout {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }

  .nav-menu .menu {
    width: 800px;
    text-align: right;
  }

  .nav-menu .menu button {
    height: 100%;
    border: none;
    background: none;
    color: #fff;
    font-size: 1rem;
    margin-left: 16px;
    transition: all 1s;
  }

  .nav-menu .menu button:hover {
    /*font-weight: 600;*/
    color: #c09aff;
    transition: all 1s;
  }

  .btn_contact {
    background: #8e5dff !important;
    font-weight: 600;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 8px;
  }

  .btn_contact:hover {
    color: #fff !important;
    background: #7346d9 !important;
  }

  /* only mobile DOM style */
  .m-quick-menu {
    padding: 0;
    background: none;
    border: none;
    margin: 0;
  }

  .m-quick-menu>img {
    width: 1.5rem;
  }

  .m-quick-toggle {
    text-align: right;
    position: fixed;
    right: 32px;
    top: 65px;
    padding: 24px;
    border-radius: 12px;
    background: #000000a6;
    color: #fff;
    box-shadow: rgba(0, 0, 0, 0.01) 1px 1px 10px;
  }

  .m-quick-toggle button {
    display: block;
    width: 100%;
    height: 2rem;
    background: none;
    border: none;
    color: #fff;
    font-size: 1rem;
    text-align: right;
  }

  .quick-menu-title {
    margin-top: 0;
    color: #c09aff;
  }

  .m-menu {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .m-menu {
      display: flex;
    }

    .d-menu {
      display: none;
    }

    .m-menu>img {
      width: 42px;
    }

    .nav-menu-layout {
      margin-left: 32px;
      margin-right: 32px;
      width: auto;
    }
  }
</style>