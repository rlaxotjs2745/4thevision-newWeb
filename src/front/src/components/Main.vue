<template>
    <div>
      <div class="headcopy-area">
        <h1 class="r-desktop">
          <span>또 다른 세계, 또 다른 나와 만나는 메타버스,</span><br>
          현실과 가상의 세계가 상호작용하는<br>
          세상을 4V Engien이 만들어 갑니다.<br>
        </h1>
        <h1 class="r-mobile">
          <span>또 다른 세계, 또 다른 나와 만나는 메타버스,</span><br>
          현실과 가상의 세계가<br>상호작용하는 세상을<br>
          4V Engien이 만들어 갑니다.<br>
        </h1>
        <div class="spc-sm"/>
        <button class="main-button" v-on:click="quickMove('compCntct')">더 많은 이야기 나누기</button>
      </div>

      <!-- background video -->
      <div class="video-layout">
        <video class="background-video" src="../assets/video-file/4thevision-brand-web.mp4" autoplay loop muted/>
<!--        <iframe class="background-video" width="100%" height="100%" src="https://www.youtube.com/embed/403MNBVmC9w?autoplay=1&mute=1&controls=0&loop=0" title="" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
      </div>

    </div>
</template>

<script>
export default {
  name: "Main.vue",
  methods: {
    quickMove(sectionName) {
      let menuName = sectionName;
      // section's y position in Home.vue
      let scrollPoint = document.getElementById(menuName);
      window.scrollBy (0, scrollPoint.getBoundingClientRect().y);
    }
  }
}
</script>

<style>

.headcopy-area {
  position: absolute;
  bottom: 150px;
}

h1 span {
  font-size: 1.5rem;
}

.main-button {
  padding: 16px;
  font-size: 1.2rem;
  font-weight: 500;
  background: #8e5dff;
  color: #fff;
}

.main-button:hover {
  background: #7346d9;
  transform: translateY(5px);
}

.video-layout {
  z-index: -1;
  position: absolute;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

@media screen and (min-width: 1920px) {
  .video-layout {
    text-align: center;
    width: 100%;
    height: 100%;
  }

  .background-video {
    width: 100%;
    height: auto;
  }
}

@media screen and (max-width: 768px) {

  .main-content {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 0 !important;
  }

  .headcopy-area h1,
  .headcopy-area span,
  .headcopy-area {
    text-align: left;
  }

  .headcopy-area h1 span{
    font-size: 1rem;
  }

  .headcopy-area h1 {
    font-size: 1.5rem;
  }

  .headcopy-area {
    position: relative;
    bottom: auto;
  }

  .main-button {
    font-size: 1rem;
  }

  .video-layout {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .background-video {
    width: auto;
    height: auto;
  }

}

</style>