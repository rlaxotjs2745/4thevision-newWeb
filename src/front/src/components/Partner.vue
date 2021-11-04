<template>
<div>
  <div class="t-center">
    <h2 class="our-partners-title r-desktop">포더비전은 미래 기술을 선도하는 기업들과 함께합니다.</h2>
    <h2 class="our-partners-title r-mobile">포더비전은 미래 기술을 선도하는<br>기업들과 함께합니다.</h2>
    <div class="spc-lg"/>
    <div class="r-desktop">
      <img class="all-partners-logo" src="../assets/partners/all-partners.png"/>
    </div>
    <div class="r-mobile">
      <div class="slide-logos">
        <img src="../assets/partners/mobile-partners.png">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Partner",
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

.all-partners-logo {
  width: 1000px;
  opacity: 0.8;
}

.slide-logos {
  text-align: center;
}

.slide-logos img {
  width: 80%;
}
</style>