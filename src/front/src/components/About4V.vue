<template>
    <div>
      <div class="highlight">
        <div/>
        <div class="highlight-text">4V Engine</div>
      </div>
      <h2 class="r-desktop">누구나 쉽게 메타버스를 제작할 수 있어요</h2>
      <h2 class="r-mobile">누구나 쉽게 메타버스를<br>제작할 수 있어요</h2>
      <span>
        과거 웹페이지 제작은 고급 기술이 필요했지만, 이제는 누구나 워드프래스, Wix 등의 저작도구로 쉽고 간단하게 웹페이지를 제작합니다.<br>
        포더비전의 4V Engine은 어려운 3D 엔진을 대신해 <b>누구나 쉽게 메타버스를 제작할 수 있는 메타버스 저작도구입니다.</b></span>
      <div class="spc-lg"/>
      <div class="engine-about">
        <img class="r-desktop" src="../assets/content-4v-about.svg"/>
        <div class="r-mobile">
          <img src="../assets/content-4v-about-m.svg"/>
          <div class="info-card-ui">
            <p><b>시나리오 기반</b>의 메타버스 구축</p>
          </div>
          <div class="info-card-ui">
            <p>누구나 쉽게 메타버스를 <br>구축할 수 있는 <b>저작도구</b></p>
          </div>
          <div class="info-card-ui">
            <p>PC 웹, 모바일 웹, VR<br>
              <b>원하는 기기</b>로 메타버스 제공</p>
          </div>
        </div>
      </div>
      <div class="spc-lg r-desktop"/>
      <div class="spc-sm r-mobile"/>
      <span>
        메타버스는 스마트팩토리 교육을 위한 디지털트윈 뿐만 아니라, 패션 브랜드, 신제품 런칭 쇼케이스 등 <b>브랜드의 커머스,<br>
        복잡하지 않은 간단한 캐주얼 게임</b>까지 다양한 산업 영역에서 활용될 수 있습니다.
      </span>
      <div class="spc-lg r-desktop"/>
      <div class="spc-sm r-mobile"/>
      <div class="card-list-ui">
        <div class="card-ui">
          <div class="image">
            <img src="../assets/about4v-bg-01.png"/>
            <div class="title">
              <p>시뮬레이터 연동 디지털 트윈</p>
            </div>
          </div>
          <div class="card-article">
            <span>
              에머슨의 Ovation™ 시스템 및 시뮬레이터를 통해 각종 디지털 계기판 및 액추에이터와 연동하였으며,
              4V VR 디지털트윈 시뮬레이터를 통해 제어 및 조작이 가능합니다.
            </span>
            <div class="label-list">
              <div class="label-ui">선박 엔진 정비 교육</div>
              <div class="label-ui">발전소 등 플랜트 운영 교육</div>
              <div class="label-ui">건설 안전 체험 교육</div>
              <div class="label-ui">반도체 설비/정비 교육</div>
            </div>
          </div>
        </div>
        <div class="card-ui">
          <div class="image">
            <img src="../assets/about4v-bg-02.png"/>
            <div class="title">
              <p>커머스 메타버스</p>
            </div>
          </div>
          <div class="card-article">
            <div>
              <span>
              자체 메타버스 플랫폼을 이용해 브랜드 상품을 고객에게 선보이고 구매와 결제 기능 제공
              </span>
            </div>
            <div class="label-list">
              <div class="label-ui">패션 브랜드</div>
              <div class="label-ui">자동차 쇼룸</div><br>
              <div class="label-ui">신제품 런칭 쇼케이스</div>
              <div class="label-ui">호텔 객실 소개</div>
            </div>
          </div>
        </div>
        <div class="card-ui">
          <div class="image">
            <img src="../assets/about4v-bg-03.png"/>
            <div class="title">
              <p>캐주얼 게임</p>
            </div>
          </div>
          <div class="card-article">
            <div>
              <span>
              룰을 기반으로 한 보드게임 등의 테이블탑 게임 메타버스 구축 가능
              </span>
            </div>
            <div class="label-list">
              <div class="label-ui">보드게임</div>
              <div class="label-ui">퍼즐게임</div>
              <div class="label-ui">시뮬레이션 게임</div>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
export default {
  name: "About4V.vue"
}
</script>

<style scoped>

.about4v-content {
  text-align: center;
}

span b {
  background: #eeeeee;
  padding-left: 2px;
  padding-right: 2px;
  border-radius: 2px;
  font-weight: 300;
}

.engine-about {
  margin-top: 3rem;
  margin-bottom: 2rem;
  text-align: center;
 }

.engine-about .r-desktop {
  width: 700px;
}

.engine-about .r-mobile {
  /*display: inline-block;*/
  text-align: center;
  width: 100%;
}

.text-highlight {
  display: flex;
  justify-content: center;
}

.info-card-ui {
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 12px;
  background: #eceff1;
  color: #37474f;
}

.info-card-ui p {
  font-weight: 400;
}

.card-list-ui {
  display: flex;
  justify-content: center;
}

.card-ui {
  position: relative;
  display: inline-block;
  text-align: left;
  margin: 0 1rem;
  border-radius: 16px;
  width: 320px;
  box-shadow: #eeeeee 1px 1px 10px;
}

.card-ui .image {
  position: relative;
  width: 100%;
  height: 150px;
}

.card-ui .image,
.card-ui img,
.card-ui .title {
  border-radius: 12px 12px 0 0;
  pointer-events: stroke;
}

.card-ui img {
  width: 100%;
  height: 100%;
}

.card-ui .title {
  z-index: 100;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  color: #fff;
  background-image:
      linear-gradient(
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.7)
      );
  transition: all 0.5s;
}

.card-ui .title:hover {
  transition: all 0.5s;
  color: #00000000;
  background-image:
      linear-gradient(
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0)
      );
}

.card-ui .title p {
  position: absolute;
  left: 20px;
  bottom: 20px;
  margin: 0;
  font-size: 20px;
}

.card-article {
  padding: 20px;
}

.card-article>div {
  height: 82px;
}

.card-article span {
  font-size: 14px;
  font-weight: 400;
}

.label-list {
  margin-top: 32px;
}

.label-ui {
  display: inline-block;
  border: 1px solid #c09aff;
  margin-right: 6px;
  margin-bottom: 6px;
  padding: 6px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  background: #f7f2ff;
  color: #c09aff;
}


@media screen and (max-width: 800px) {
  .about4v-content {
    text-align: left;
  }

  .card-list-ui {
    display: block;
  }

  .card-ui {
    margin: 1rem 0;
    width: 100%;
    box-shadow: #d2d2d2 1px 1px 10px;
  }

  .card-article>div {
    height: auto;
  }

}

</style>