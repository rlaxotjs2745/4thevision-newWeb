<template>
<div>
  <div class="t-center">
    <h2 class="our-partners-title r-desktop">포더비전은 미래 기술을 선도하는 기업들과 함께합니다.</h2>
    <span class="our-partners-title r-mobile">포더비전은 미래 기술을 선도하는<br>기업들과 함께합니다.</span>
    <div class="spc-lg"/>
    <img class="our-partners-logo-list" src="../assets/partners/our-partners.png"/>
  </div>
</div>
</template>

<script>
export default {
  name: "Partner.vue",
  data () {
    return {

    }
  },
  methods: {
    slideLogo() {

    }
  }
}
</script>

<style scoped>
.our-partners-title {
  font-weight: 300;
  font-size: 20px;
}

.slide-logos img {
  width: 80%;
}

.our-partners-logo-list {
  width: 70%;
}

@media screen and (max-width: 800px) {
  .our-partners-logo-list {
    width: 100%;
  }
}

</style>