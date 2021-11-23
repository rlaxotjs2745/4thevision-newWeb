<template>
    <div>
      <h2>몰입형 실감 기술 개발로<br>현실기반 XR 메타버스 구축</h2>
      <span class="r-desktop" style="opacity: 0.7;">포더비전은 지난 10년간 메타버스 엔진 개발의 근간이 되는 기반 기술을 개발해 왔으며,<br>
        스마트 팩토리, 엔터테인먼트, 콘텐츠 영역의 다양한 메타버스 구현 기술을 확보했습니다.</span>
      <span class="r-mobile" style="opacity: 0.7;">포더비전은 지난 10년간<br>메타버스 엔진 개발의 근간이 되는<br>기반 기술을 개발해 왔으며,
        스마트 팩토리, 엔터테인먼트, 콘텐츠 영역의<br>다양한 메타버스 구현 기술을<br>확보했습니다.</span>
      <img class="tech-img-4v-engin" src="../assets/content-tech-01.svg">
      <div class="spc-lg"/>
      <h3>스마트팩토리 / 디지털트윈</h3>
      <div class="spc-sm"/>

      <div class="card-list">
        <div class="card">
          <img src="../assets/ico-tech-01.png"/>
          <h5>시뮬레이터 연동<br>디지털 트윈</h5>
          <span>
            에머슨의 Ovation™ 시스템 및 시뮬레이터를 통해 각종 디지털 계기판 및 액추에이터와 연동하였으며,
            4V VR 디지털트윈 시뮬레이터를 통해 제어 및 조작이 가능합니다.
          </span>
        </div>
        <div class="card">
          <img src="../assets/ico-tech-02.png"/>
          <h5>국내 최대 규모<br>가상팩토리 구현</h5>
          <span>
            'S'철강 디지털 트랜스포메이션 전략의
            일환으로 철강공장 전체를 디지털로 구현하고,
            철강 제작 공정의 가시화와 모니터링이 가능한
            시스템을 구현했습니다.
          </span>
        </div><div class="card">
        <img src="../assets/ico-tech-03.png"/>
        <h5>핸드트레킹 인터페이스<br>현장감 극대화</h5>
        <span>
          가상 디지털트윈 구축 시 컨트롤러가 아닌
          핸드트래킹 인터페이스를 적용하여,
          가상 교육 및 조작 시 현장감 극대화가 가능합니다.
          </span>
      </div>
        <div class="card">
          <img src="../assets/ico-tech-04.png"/>
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
      <div class="full-slide">
        <div class="slide-image-area r-desktop">
          <img v-show="fullSlideStatus.page === 0" src="../assets/tech-high-quality-3dgraphic.png"/>
          <img v-show="fullSlideStatus.page === 1" src="../assets/tech-360video.png"/>
          <img v-show="fullSlideStatus.page === 2" src="../assets/tech-non-game-contents.png"/>
          <img v-show="fullSlideStatus.page === 3" src="../assets/tech-meta-shopping.png"/>
        </div>
        <div class="slide-image-area r-mobile">
          <img v-show="fullSlideStatus.page === 0" src="../assets/m-tech-high-quality-3dgraphic.png"/>
          <img v-show="fullSlideStatus.page === 1" src="../assets/m-tech-360video.png"/>
          <img v-show="fullSlideStatus.page === 2" src="../assets/m-tech-non-game-contents.png"/>
          <img v-show="fullSlideStatus.page === 3" src="../assets/m-tech-meta-shopping.png"/>
        </div>
        <div class="navigation-area">
          <div>
            <img :class="{'disable': fullSlideStatus.page === 0}" v-on:click="fullSlide(false)" src="../assets/slide-content/ico_left-navi.svg"/>
            <span class="disable">{{ fullSlideStatus.pageContent[fullSlideStatus.page-1] }}</span>
          </div>
          <div>
            <span class="slide-title">{{ fullSlideStatus.pageContent[fullSlideStatus.page] }}</span>
          </div>
          <div>
            <span class="disable">{{ fullSlideStatus.pageContent[fullSlideStatus.page+1] }}</span>
            <img :class="{'disable': fullSlideStatus.page === 3}" v-on:click="fullSlide(true)" src="../assets/slide-content/ico_right-navi.svg"/>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "OurTech.vue",
  data() {
    return {
      fullSlideStatus: {
        page: 0,
        pageContent: ['최상급 3D 그래픽 구현','인터랙티브 360 영상','비 게임앱 콘텐츠 구현','360 영상과 3D 오브젝트 통합']
      }
    }
  },
  methods: {
    fullSlide(navigation) {
      let Direction = navigation;
      if (Direction === true) {
        if (this.fullSlideStatus.page < 3) {
          this.fullSlideStatus.page = this.fullSlideStatus.page+1;
        }
      } else {
        if (this.fullSlideStatus.page > 0) {
          this.fullSlideStatus.page = this.fullSlideStatus.page-1;
        }
      }
    }
  }
}
</script>

<style scoped>
.our-tech-content {
  position: relative;
}

.disable {
  opacity: 0.5;
}

.card-list {
  display: flex;
  justify-content: space-between;
  overflow: scroll;
}

.card {
  display: inline-block;
  width: 20%;
  min-width: 280px;
  padding: 42px;
  margin-right: 16px;
  border: none;
  border-radius: 8px;
  box-shadow: 10px 10px 20px 0 rgba(0, 0, 0, 0.06);
  background-color: rgba(255, 255, 255, 0.05);
  transition: all 2s;
  cursor: default;
}

.card:hover {
  background-color: #000;
  transition: all 2s;
}

.card:hover img {
  transform: translateY(-20px);
  transition: all 2s;
}

.card h5 {
  font-size: 26px;
}

.card span {
  opacity: 0.7;
  font-size: 14px;
}

.tech-img-4v-engin {
  position: absolute;
  right: 10%;
  top: -6%;
}

.full-slide {
  position: relative;
}

.full-slide img {
  width: 100%;
  border-radius: 4px;
}

.slide-image-area {
  max-height: 400px;
  overflow: hidden;
}

.navigation-area {
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 72px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));}

.navigation-area>div {
  display: flex;
  align-items: center;
  width: 33%;
}

.navigation-area>div:nth-child(1) {
  justify-content: left;
}

.navigation-area>div:nth-child(2) {
  justify-content: center;
}

.navigation-area>div:nth-child(3) {
  justify-content: right;
  justify-content: flex-end;
}

.navigation-area img{
  width: 32px;
}

.slide-title {
  font-weight: bold;
}

@media screen and (max-width: 800px) {

  .tech-img-4v-engin {
    width: 70%;
    position: absolute;
    right: 10%;
    top: -64px;
  }

  .card-list {
    width: 100%;
    display: block;
  }

  .card {
    width: auto;
    min-width: auto;
    padding: 1.5rem;
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .card:hover img {
    transform: none !important;
    transition: all 2s;
  }

  .card h5 {
    font-size: 20px !important;
  }

  .navigation-area>div:nth-child(2) {

  }

  .navigation-area span {
    font-size: 12px;
    text-align: center;
  }

  .disable {
    display: none;
  }

  .slide-image-area {
    text-align: center;
    height: 300px;
  }

  .slide-image-area img {
    width: auto;
    height: 100%;
  }

}

</style>