<template>
    <div>
      <div class="spc-lg r-mobile"/>
      <div class="highlight">
        <div/>
        <div class="highlight-text">4V Technology</div>
      </div>
      <h2>몰입형 실감 기술 개발로<br>현실기반 XR 메타버스 구축</h2>
      <span class="r-desktop">포더비전은 지난 10년간 메타버스 엔진 개발의 근간이 되는 기반 기술을 개발해 왔으며,<br>
        스마트 팩토리, 엔터테인먼트, 콘텐츠 영역의 다양한 메타버스 구현 기술을 확보했습니다.</span>
      <span class="r-mobile">포더비전은 지난 10년간<br>메타버스 엔진 개발의 근간이 되는<br>기반 기술을 개발해 왔으며,
        스마트 팩토리, 엔터테인먼트, 콘텐츠 영역의<br>다양한 메타버스 구현 기술을<br>확보했습니다.</span>
      <img class="tech-img-4v-engin" src="../assets/content-tech-01.svg">
      <div class="spc-lg"/>
      <h3>스마트팩토리 / 디지털트윈</h3>
      <div class="spc-sm"/>

      <div class="card-list">
        <div class="card">
          <img src="../assets/ico-tech-01.svg"/>
          <h5>시뮬레이터 연동<br>디지털 트윈</h5>
          <span>
            에머슨의 Ovation™ 시스템 및 시뮬레이터를 통해 각종 디지털 계기판 및 액추에이터와 연동하였으며,
            4V VR 디지털트윈 시뮬레이터를 통해 제어 및 조작이 가능합니다.
          </span>
        </div>
        <div class="card">
          <img src="../assets/ico-tech-02.svg"/>
          <h5>국내 최대 규모<br>가상팩토리 구현</h5>
          <span>
            세아철강 디지털 트랜스포메이션 전략의
            일환으로 철강공장 전체를 디지털로 구현하고,
            철강 제작 공정의 가시화와 모니터링이 가능한
            시스템을 구현했습니다.
          </span>
        </div><div class="card">
        <img src="../assets/ico-tech-03.svg"/>
        <h5>핸드트레킹 인터페이스<br>현장감 극대화</h5>
        <span>
          가상 디지털트윈 구축 시 컨트롤러가 아닌
          핸드트래킹 인터페이스를 적용하여,
          가상 교육 및 조작 시 현장감 극대화가 가능합니다.
          </span>
      </div>
        <div class="card">
          <img src="../assets/ico-tech-04.svg"/>
          <h5>최상급 3D 그래픽<br>퀄리티 구현</h5>
          <span>
            최상의 3D 그래픽을 통해 우주 발전소를
            구현했습니다. 또한 VR 콘텐츠와 함께
            시뮬레이터를 연동하여 가상과
            실제 세계를 연결하여 몰입감을
            극대화 하였습니다.
          </span>
        </div>
      </div>

      <div class="spc-sm"/>
      <h3>엔터테인먼트</h3>
      <div class="spc-sm"/>
      <div class="slide-content r-desktop">
        <div class="slide-images">
          <img v-show="slideStatus.slideImage === 1" src="../assets/slide-image-4.png"/>
          <img v-show="slideStatus.slideImage === 2" src="../assets/slide-image-2.png"/>
          <img v-show="slideStatus.slideImage === 3" src="../assets/slide-image-1.png"/>
          <img v-show="slideStatus.slideImage === 4" src="../assets/slide-image-3.png"/>
        </div>
        <div class="slide-button-list">
          <button v-on:click="slideImages(1)" v-bind:class="{ focus: slideStatus.slideImage === 1 }">최상급 3D 그래픽 구현</button><br>
          <button v-on:click="slideImages(2)" v-bind:class="{ focus: slideStatus.slideImage === 2 }">비게임 앱 콘텐츠 개발</button><br>
          <button v-on:click="slideImages(3)" v-bind:class="{ focus: slideStatus.slideImage === 3 }">인터렉티브 360 영상</button><br>
          <button v-on:click="slideImages(4)" v-bind:class="{ focus: slideStatus.slideImage === 4 }">360 영상과 3D 오브젝의 통합</button><br>
        </div>
      </div>
      <div class="mobile-slide-content r-mobile">
        <div class="slide-button-list">
<!--          <div class="image-list">-->
<!--            <img v-show="slideStatus.slideImage === 1" src="../assets/slide-image-m-1.png"/>-->
<!--            <img v-show="slideStatus.slideImage === 2" src="../assets/slide-image-m-2.png"/>-->
<!--            <img v-show="slideStatus.slideImage === 3" src="../assets/slide-image-m-4.png"/>-->
<!--            <img v-show="slideStatus.slideImage === 4" src="../assets/slide-image-m-3.png"/>-->
<!--          </div>-->
          <img v-show="slideStatus.slideImage === 1" src="../assets/slide-image-m-1.png"/>
          <button v-on:click="slideImages(1)" v-bind:class="{ focus: slideStatus.slideImage === 1 }">최상급 3D 그래픽 구현</button><br>
          <img v-show="slideStatus.slideImage === 2" src="../assets/slide-image-m-2.png"/>
          <button v-on:click="slideImages(2)" v-bind:class="{ focus: slideStatus.slideImage === 2 }">비게임 앱 콘텐츠 개발</button><br>
          <img v-show="slideStatus.slideImage === 3" src="../assets/slide-image-m-4.png"/>
          <button v-on:click="slideImages(3)" v-bind:class="{ focus: slideStatus.slideImage === 3 }">인터렉티브 360 영상</button><br>
          <img v-show="slideStatus.slideImage === 4" src="../assets/slide-image-m-3.png"/>
          <button v-on:click="slideImages(4)" v-bind:class="{ focus: slideStatus.slideImage === 4 }">360 영상과 3D 오브젝의 통합</button><br>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "OurTech.vue",
  data() {
    return {
      slideStatus: {
        slideImage : 1
      }
    }
  },
  methods: {
    slideImages(listNumber) {
      let list = listNumber;
      this.slideStatus.slideImage = list;
    },
    slideTimer() {

    }
  }
}
</script>

<style scoped>
.our-tech-content {
  position: relative;
}

.card-list {
  display: flex;
  justify-content: space-between;
}

.card {
  width: 20%;
  padding: 42px;
  margin-right: 16px;
  border-radius: 12px;
  display: inline-block;
  background: url("../assets/bg-tech-card.svg");
  background-repeat: no-repeat;
  background-size: cover;
}

.card-list h5 {
  font-size: 26px;
}

.card-list span {
  opacity: 0.7;
  font-size: 14px;
}

.tech-img-4v-engin {
  position: absolute;
  right: 10%;
  top: -6%;
}

.slide-content {
  position: relative;
}

.slide-content .slide-images img {
  width: 80%;
}

.r-desktop .slide-button-list {
  position: absolute;
  top: 10%;
  right: 10%;
  padding: 32px;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(6px);
}

.r-desktop .slide-button-list button {
  text-align: left;
  width: 352px;
  height: 54px;
  padding: 0 16px;
  border: none;
  font-size: 18px;
  background: none;
  color: #fff;
  transition: all 2s;
}


.slide-button-list button:hover {
  font-size: 18px;
  background: rgba(0, 0, 0, 0.8);
  transition: all 2s;
}

.mobile-slide-content img {
  width: 100%;
  height: 240px;
}

.mobile-slide-content .slide-button-list {
  padding: 16px;
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(6px);
}

.mobile-slide-content button {
  text-align: left;
  height: 54px;
  padding: 0 16px;
  border: none;
  font-size: 18px;
  background: none;
  color: #fff;
  transition: all 2s;
}

.focus {
  border: 2px solid #fff !important;
}

@media screen and (max-width: 768px) {

  .slide-images img{
    width: 100%;
  }

  .slide-button-list {
    position: relative;
    background: rgba(0, 0, 0, 0.3);
  }

  .slide-button-list button {
    width: 100%;
  }

  .card-list {
    display: block;
  }

  .card {
    width: auto;
    padding: 1.2rem;
    margin: 0;
    margin-bottom: 1rem;
  }

  .tech-img-4v-engin {
    top: -60px;
    right: 10%;
    width: 220px;
  }

  .card-list h5 {
    font-size: 20px;
    color: #c09aff;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .card-list span {
    opacity: 0.8;
    font-size: 14px;
  }

  .focus {
    border: none !important;
    background: #000;
  }

}

</style>