<template>
    <div>
      <div class="highlight">
        <div/>
        <div class="highlight-text">Portfolio</div>
      </div>

      <div class="r-desktop">
        <h2>포더비전이 만들어온 세상</h2>
        <span>포더비전은 메타버스 기술, 콘텐츠, 장비, 실시간 방송 등 폭넓은 경험과 노하우를 보유하고 있으며,<br>
        클라이언트의 요구사항을 뛰어넘어 감동을 주는 서비스를 만드는 것을 목표로 합니다.</span>
        <div class="spc-lg"/>
        <div class="portfolio-list">
          <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-01.png"/><p><br>한국전력 대민홍보 콘텐츠</p></div>
          <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-02.png"/><p>남동발전 영홍도 발전소<br>디지털트윈 VR 시뮬레이터<br>교육 콘텐츠</p></div>
          <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-03.png"/><p>VO.DOT<br>ICT VR 5 어드밴스드<br>프로젝트 플래닝 기획</p></div>
          <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-04.png"/><p>“Beat the Bears”<br>스트레오타입<br>한국 전통음악 체험 콘텐츠</p></div>


<!--          <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-05.png"/><p>KICT VT 카메라<br>장비 R&D</p></div>-->
<!--          <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-06.png"/><p>Island of Dinosaur<br>VR 콘텐츠 개발</p></div>-->
          <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-07.png"/><p>VR 드라마 ‘Run! 구구단’</p></div>
          <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-08.png"/><p>VR 가상 노래방 시뮬레이션<br>콘텐츠 및 서비스 개발</p></div>
          <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-010.png"/><p>SBS<br>사대륙 피겨 선수 대회<br>VR 생중계</p></div>
          <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-011.png"/><p>AR 공룡 테마파크<br>“DINO DISCOVERY”</p></div>
<!--          <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-09.png"/><p>UNICEF 디지털 체험존 및<br>디지털 콘텐츠 6종 개발</p></div>-->
          <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-012.png"/><p>SBS<br>연예대상 2016<br>VR 생중계</p></div>
          <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-013.png"/><p>의료 VR<br>VR 수술 콘텐츠 개발</p></div>
          <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-014.png"/><p>람보르기니 체험 VR</p></div>
          <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-015.png"/><p>세계최초 KT 야구 VR 생중계</p></div>
<!--          <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-016.png"/><p>삼성 갤럭시 S7 TV CF</p></div>-->
        </div>
      </div>

      <div class="r-mobile">
        <h2>포더비전이 만들어온 세상</h2>
        <span>포더비전은 메타버스 기술, 콘텐츠, 장비, 실시간 방송 등 폭넓은 경험과 노하우를 보유하고 있으며,
        클라이언트의 요구사항을 뛰어넘어 감동을 주는 서비스를 만드는 것을 목표로 합니다.</span>
        <div class="spc-lg"/>

        <div id="portfolioList" class="portfolio-list">
          <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-01.png"/><p><br>한국전력 대민홍보 콘텐츠</p></div>
          <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-02.png"/><p>남동발전 영홍도 발전소<br>디지털트윈 VR 시뮬레이터<br>교육 콘텐츠</p></div>
          <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-03.png"/><p>VO.DOT<br>ICT VR 5 어드밴스드<br>프로젝트 플래닝 기획</p></div>
          <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-04.png"/><p>“Beat the Bears”<br>스트레오타입<br>한국 전통음악 체험 콘텐츠</p></div>

          <button id="showAllContentButton" class="btn-portfolio-show" v-on:click="ContentsStatus = true" v-if="!ContentsStatus">더 많은 포트폴리오가 궁금해요</button>

          <div v-if="ContentsStatus">
            <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-05.png"/><p>KICT VT 카메라<br>장비 R&D</p></div>
            <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-06.png"/><p>Island of Dinosaur<br>VR 콘텐츠 개발</p></div>
            <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-07.png"/><p>VR 드라마 ‘Run! 구구단’</p></div>
            <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-08.png"/><p>VR 가상 노래방 시뮬레이션<br>콘텐츠 및 서비스 개발</p></div>

            <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-09.png"/><p>UNICEF 디지털 체험존 및<br>디지털 콘텐츠 6종 개발</p></div>
            <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-010.png"/><p>SBS<br>사대륙 피겨 선수 대회<br>VR 생중계</p></div>
            <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-011.png"/><p>AR 공룡 테마파크<br>“DINO DISCOVERY”</p></div>
            <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-012.png"/><p>SBS<br>연예대상 2016<br>VR 생중계</p></div>

            <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-013.png"/><p>의료 VR<br>VR 수술 콘텐츠 개발</p></div>
            <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-014.png"/><p>람보르기니 체험 VR</p></div>
            <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-015.png"/><p>세계최초 KT 야구 VR 생중계</p></div>
            <div class="portfolio-item"><img src="../assets/portfolio-images/portfolio-016.png"/><p>삼성 갤럭시 S7 TV CF</p></div>
            <button class="btn-portfolio-show" v-on:click="ContentsStatus = false; scrollUp();">포트폴리오 생략하기</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Portfolio.vue",
  data () {
    return {
      ContentsStatus: false
    }
  },
  methods: {
    scrollUp() {
      const portfolioTitle = document.getElementById('portfolioList');
      const titleLocation = portfolioTitle.getBoundingClientRect();
      window.scrollBy (0, titleLocation.y);
    }
  }
}
</script>

<style scoped>
.portfolio-list {
  display: block;
}

.portfolio-list .portfolio-item {
  display: inline-block;
  position: relative;
  margin-right: 32px;
  margin-bottom: 32px;
}

.portfolio-list>div>img {
  width: 326px;
}

.portfolio-list p {
  position: absolute;
  bottom: 16px;
  left: 16px;
  font-size: 1.2rem;
}

.btn-portfolio-show {
  width: 100%;
  height: 64px;
  border: none;
  border-radius: 16px;
  color: #fff;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.3);
}

.btn-portfolio-show:hover {
  background: #8e5dff;
}

@media screen and (max-width: 768px) {
  .portfolio-list .portfolio-item img {
    width: 100%;
  }

  .portfolio-list .portfolio-item {
    margin-right: 0;
    margin-bottom: 12px;
  }
}

</style>