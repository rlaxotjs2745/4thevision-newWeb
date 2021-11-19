<template>
  <div>
     <h2>4VENGINE</h2>
    <span class="r-desktop" style="opacity: 0.5; font-size: 16px;">
        지금까지 교육, 디지털트윈, 엔터테인먼트, 커머스 XR 콘텐츠를 개발해오면서<br>
        축적한 기술을 누구나 쉽게 XR 콘텐츠를 개발할 수 있도록<br>
        4V 엔진이라는 통합개발프레임워크로 제공합니다.
    </span>
    <span class="r-mobile" style="opacity: 0.5; font-size: 16px;">
        지금까지 교육, 디지털트윈, 엔터테인먼트,<br>커머스 XR 콘텐츠를 개발해오면서<br>
        축적한 기술을 누구나 쉽게 XR 콘텐츠를<br>개발할 수 있도록
        4V 엔진이라는<br>통합개발프레임워크로 제공합니다.
    </span>
    <div class="spc-md"/>
    <div class="card-list">
      <div class="card-ui">
        <div>
          <img src="../assets/ico-4v-engine-metaverse.png"/>
          <p>4V 메타버스 Maker</p>
          <span>XR 콘텐츠를 가장 쉽게<br>개발하는 도구</span>
        </div>
      </div>
      <div class="card-ui">
        <div>
          <img src="../assets/ico-4v-engine-sdk.png"/>
          <p>4V 메타버스 Maker</p>
          <span>XR 콘텐츠를 가장 쉽게<br>개발하는 도구</span>
        </div>
      </div>
      <div class="card-ui">
        <div>
          <img src="../assets/ico-4v-engine-core.png"/>
          <p>4V 메타버스 Core</p>
          <span>가상화의 핵심 기술 모듈</span>
        </div>
      </div>
    </div>
    <div class="spc-sm"/>
    <div class="slide-container">
      <div class="image-slide">
        <div class="image-card-list">
          <img v-if="slideStatus === 'alice'"  src="../assets/engine-slide-image-1.png"/>
          <img v-if="slideStatus === 'xredu'" src="../assets/engine-slide-image-2.png"/>
          <img v-if="slideStatus === 'smartfy'" src="../assets/engine-slide-image-3.png"/>
          <img v-if="slideStatus === 'wav'" src="../assets/engine-slide-image-4.png"/>
        </div>
        <div class="navi-btn-list">
          <button v-on:click="slideStatus = 'smartfy'" class="navi-btn" :class="{'focus-navibtn': slideStatus === 'smartfy'}">스마트 팩토리</button>
          <button v-on:click="slideStatus = 'xredu'" class="navi-btn" :class="{'focus-navibtn': slideStatus === 'xredu'}">XR 에듀케이션</button>
          <button v-on:click="slideStatus = 'wav'" class="navi-btn" :class="{'focus-navibtn': slideStatus === 'wav'}">엔터테인먼트</button>
          <button v-on:click="slideStatus = 'alice'" class="navi-btn" :class="{'focus-navibtn': slideStatus === 'alice'}">메타버스 커머스</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "V4Engine.vue",
  data() {
    return {
      slideStatus: 'smartfy'
    }
  }
}
</script>

<style scoped>
.card-ui {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  margin-left: 8px;
  margin-right: 8px;
  border-radius: 4px;
  background-color: rgba(192, 154, 255, 0.12);
  cursor: default;
}

.card-ui:hover {
  background-color: #000;
  transition: all 2s;
}

.card-ui>div {
  display: inline-block;
  width: 200px;
  height: 60%;
  /*background: red;*/
}

.card-ui p {
  margin-bottom: 2px;
  font-size: 20px;
}

.card-ui span {
  font-size: 16px;
}

.image-slide {
  display: flex;
  width: 900px;
  padding: 16px;
  border-radius: 4px;
  background-color: rgba(192, 154, 255, 0.12);
}

.slide-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navi-btn {
  width: 164px;
  height: 42px;
  border-radius: 0;
  background: none;
  border-bottom: solid 1px rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.6);
  text-align: left;
  font-size: 16px;
  cursor: pointer;
}

.navi-btn:hover {
  color: #fff;
}

.image-card-list img {
  width: 100%;
  height: 100%;
}

.image-slide img {
  display: inline-flex;
}

.image-slide .navi-btn-list {
  display: inline-block;
  width: 188px;
  height: 269px;
  padding: 12px;
  margin-left: 16px;
  border-radius: 4px;
  background-color: rgba(192, 154, 255, 0.12);
}

.focus-navibtn {
  color: #fff;
}

@media screen and (max-width: 800px) {
  .card-ui {
    width: 100%;
    margin: 0;
    margin-bottom: 1rem;
  }

  .image-slide {
    display: block;
    width: 100%;
    padding: 16px;
    border-radius: 4px;
    background-color: rgba(192, 154, 255, 0.12);
  }

  .image-slide img {
    width: 100%;
  }

  .image-slide .navi-btn-list {
    width: auto !important;
    height: auto !important;
    padding: 12px;
    margin-left: 0;
    border-radius: 4px;
    background-color: rgba(192, 154, 255, 0.12);
  }

  .navi-btn {
    text-align: center;
    width: 100%;
  }

  .image-card-list {
    text-align: center;
    width: 100%;
    height: 230px;
    margin-bottom: 16px;
    overflow: hidden;
  }

  .image-card-list img {
    height: 100%;
    width: auto;
  }

}

</style>