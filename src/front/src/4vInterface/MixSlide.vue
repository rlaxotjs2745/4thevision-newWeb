<template>
<div>
  <div class="slide-card-list">
    <div class="slide-area">
      <h3>Metaverse</h3>
      <div class="image-area">
        <img v-show="slideStatus.metaverse.page === 0" src="../assets/slide-content/slide-1.png"/>
        <img v-show="slideStatus.metaverse.page === 1" src="../assets/slide-content/slide-2.png"/>
        <img v-show="slideStatus.metaverse.page === 2" src="../assets/slide-content/slide-3.png"/>
        <img v-show="slideStatus.metaverse.page === 3" src="../assets/slide-content/slide-4.png"/>
        <div class="slide-info-area">
          <img class="navi-left" :class="{'disable-navi': slideStatus.metaverse.page == 0}"
               v-on:click="mixSlide('Metaverse', 'left')"
               src="../assets/slide-content/ico_left-navi.svg"
          />
          <div class="content-area">
            <span>{{ slideStatus.metaverse.caption[slideStatus.metaverse.page] }}</span>
            <p>{{ slideStatus.metaverse.title[slideStatus.metaverse.page] }}</p>
          </div>
          <img class="navi-right" :class="{'disable-navi': slideStatus.metaverse.page == 3}"
               v-on:click="mixSlide('Metaverse', 'right')"
               src="../assets/slide-content/ico_right-navi.svg"
          />
        </div>
      </div>
    </div>
    <div class="slide-area">
      <h3>Disital Twin & Education</h3>
      <div class="image-area">
        <img v-show="slideStatus.disitaltwin.page === 0" src="../assets/slide-content/slide-5.png"/>
        <img v-show="slideStatus.disitaltwin.page === 1" src="../assets/slide-content/slide-6.png"/>
        <img v-show="slideStatus.disitaltwin.page === 2" src="../assets/slide-content/slide-7.png"/>
        <img v-show="slideStatus.disitaltwin.page === 3" src="../assets/slide-content/slide-8.png"/>
        <div class="slide-info-area">
          <img class="navi-left" :class="{'disable-navi': slideStatus.disitaltwin.page == 0}"
               v-on:click="mixSlide('DisitalTwin', 'left')"
               src="../assets/slide-content/ico_left-navi.svg"
          />
          <div class="content-area">
            <span>{{ slideStatus.disitaltwin.caption[slideStatus.disitaltwin.page] }}</span>
            <p>{{ slideStatus.disitaltwin.title[slideStatus.disitaltwin.page] }}</p>
          </div>
          <img class="navi-right" :class="{'disable-navi': slideStatus.disitaltwin.page == 3}"
               v-on:click="mixSlide('DisitalTwin', 'right')"
               src="../assets/slide-content/ico_right-navi.svg"
          />
        </div>
      </div>
    </div>
    <div class="slide-area">
      <h3>Development</h3>
      <div class="image-area">
        <img v-show="slideStatus.development.page === 0" src="../assets/slide-content/slide-10.png"/>
        <img v-show="slideStatus.development.page === 1" src="../assets/slide-content/slide-11.png"/>
        <div class="slide-info-area">
          <img class="navi-left" :class="{'disable-navi': slideStatus.development.page == 0}"
               v-on:click="mixSlide('Development', 'left')"
               src="../assets/slide-content/ico_left-navi.svg"
          />
          <div class="content-area">
            <span>{{ slideStatus.development.caption[slideStatus.development.page] }}</span>
            <p>{{ slideStatus.development.title[slideStatus.development.page] }}</p>
          </div>
          <img class="navi-right" :class="{'disable-navi': slideStatus.development.page == 1}"
               v-on:click="mixSlide('Development', 'right')"
               src="../assets/slide-content/ico_right-navi.svg"
          />
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "MixSlide.vue",
  data () {
    return {
      slideStatus: {
        metaverse: {
          page: 0,
          title: ['W.A.V','Beat the Beats', '팜스VR', 'Alice Store'],
          caption: ['VR Music Simulation','한국전통 VR Interactive','Metaverse Farm','XR Commerce']
        },
        disitaltwin: {
          page: 0,
          title: ['스마트 가상 발전소','철강 생산공정 가상화', '발전설비 유지운영 교육','반도체 공정 교육'],
          caption: ['-','-','-','-']
        },
        development: {
          page: 0,
          title: ['4V Graph DB','4V Step Func'],
          caption: ['가상화를 위한 기반 기술','워크플로우 관리기술']
        }
      }
    }
  },
  methods: {
    mixSlide(slideName, navigation) {
      let section = slideName;
      let direction = navigation;
      switch (section) {
        case 'Metaverse':
          if (direction === 'left') {
            if (this.slideStatus.metaverse.page > 0) {
              this.slideStatus.metaverse.page = this.slideStatus.metaverse.page-1;
            }
          } else {
            if (this.slideStatus.metaverse.page < 3) {
              this.slideStatus.metaverse.page = this.slideStatus.metaverse.page+1;
            }
          }
          break;
        case 'DisitalTwin':
          if (direction === 'left') {
            if (this.slideStatus.disitaltwin.page > 0) {
              this.slideStatus.disitaltwin.page = this.slideStatus.disitaltwin.page-1;
            }
          } else {
            if (this.slideStatus.disitaltwin.page < 3) {
              this.slideStatus.disitaltwin.page = this.slideStatus.disitaltwin.page+1;
            }
          }
          break;
        case 'Development':
          if (direction === 'left') {
            if (this.slideStatus.development.page > 0) {
              this.slideStatus.development.page = this.slideStatus.development.page-1;
            }
          } else {
            if (this.slideStatus.development.page < 1) {
              this.slideStatus.development.page = this.slideStatus.development.page+1;
            }
          }
          break;
        default:
          console.log('[WARN] Slides cannot be operated in this environment.')
      }
    }
  }
}
</script>

<style scoped>
h3 {
  text-transform: uppercase;
}

.slide-card-list {
  display: flex;
  justify-content: center;
}

.slide-area {
  display: inline-block;
  position: relative;
  width: 352px;
  padding: 16px;
  margin-left: 16px;
  border-right: 4px;
  background-color: rgba(255, 255, 255, 0.05);
}

.slide-info-area {
  z-index: 100;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
  padding-bottom: 16px;
  width: 100%;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000);
}

.slide-info-area span {
  font-size: 12px;
  letter-spacing: 0.48px;
}

.slide-info-area p {
  margin-top: 4px;
  margin-bottom: 4px;
}

.image-area {
  position: relative;
}

.image-area>img {
  width: 100%;
}

.content-area {
  text-align: left;
  display: inline-block;
  width: 250px;
}

.disable-navi {
  opacity: 0.4;
}

.navi-left {
  margin-left: 16px;
}

.navi-right {
  margin-right: 16px;
}
</style>