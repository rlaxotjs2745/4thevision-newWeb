<template>
<div class="nav-menu">
  <!-- desktop -->
  <div class="nav-menu-layout d-menu">
    <div>
      <img src="../assets/header-logo.svg" v-on:click="quickMove('compMain')">
    </div>
    <div class="menu">
      <button v-on:click="quickMove('compMain')">Main</button>
      <button v-on:click="quickMove('compAbt4v')">About</button>
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
      <button v-on:click="quickMove('compTech')">Tech</button>
      <button v-on:click="quickMove('compPtf')">Portfolio</button>
      <button v-on:click="quickMove('compHsty')">History</button>
    </div>
  </div>

</div>
</template>

<script>

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
    quickMove(sectionName) {
      let menuName = sectionName;
      // section's y position in Home.vue
      let scrollPoint = document.getElementById(menuName);
      window.scrollBy (0, scrollPoint.getBoundingClientRect().y);
    }
    // scrollBind() {
    //   let lastScrollTop = 0;
    //   const delta = 5;
    //   let fixBox = document.getElementById('compHeader');
    //   let fixBoxHeight = fixBox.offsetHeight;
    //   let didScroll;
    //
    //   window.onscroll = function(e) {
    //     didScroll = true;
    //   };
    // //0.25초마다 스크롤 여부 체크하여 스크롤 중이면 hasScrolled() 호출
    //   setInterval(function(){
    //     if(didScroll){
    //       this.hasScrolled();
    //       didScroll = false;
    //     }
    //   }, 250);
    // },
    // hasScrolled(){
    //   let nowScrollTop = window.scrollY;
    //   if(Math.abs(lastScrollTop - nowScrollTop) <= delta){
    //     return;
    //   }
    //   if(nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight){
    //     //Scroll down
    //     this.navigationStatus = true;
    //     console.log('scroll dowm');
    //
    //   }else{
    //     if(nowScrollTop + window.innerHeight < document.body.offsetHeight){
    //       //Scroll up
    //       this.navigationStatus = false;
    //       console.log('scroll up');
    //     }
    //   }
    //   this.laslastScrollTop = nowScrollTop;
    // }
  }
}
</script>

<style scoped>
  button, img {
    cursor: pointer;
  }

  .nav-menu {
    z-index: 100;
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
    transition: all 0s;
  }

  .nav-menu .menu button:hover {
    font-weight: 600;
    transition: all 0s;
  }

  .btn_contact {
    background: #8e5dff !important;
    font-weight: 600;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 8px;
  }

  .btn_contact:hover {
    background: #304ffe !important;
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

  .navhide {
    top: -84px;
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