<template>
  <div>
    <div class="r-desktop">
      <div>
        <h2>1세대 가상현실 기업에서,<br>1세대 메타버스 엔진 기업으로의 도약</h2>
        <span>
          포더비전은 다양한 몰입형 미디어 분야의 기술을 선도하는<br>
          1세대 Immersive media Tech 기업에서 메타버스 엔진 기업으로의 도약을 시작하고 있습니다.<br>
          IT, 게임, 엔터테인먼트, 산업, 교육 등 다양한 산업 영역에서 가상·증강현실 콘텐츠 개발 분야의<br>
          경험과 전문 역량을 바탕으로 글로벌 미래 산업의 패러다임 ‘메타버스 엔진’ 개발을 통해<br>
          다가올 미래 기술을 이끌어 가는 기업을 목표하고 있습니다.<br>
        </span>
      </div>
      <div>
        <h2>현실과 가상 세계의 유용한 상호작용과<br>즐거운 몰입 경험 창조</h2>
        <span>
          사용자 경험을 중심으로 시장 및 트렌드 분석, 사용자 리서치를 통한 메타버스 콘텐츠 및 서비스 기획,<br>
          현실과 가상 세계와의 상호작용 및 연동 기술, 고품질 메타버스 구현을 위한 몰입형 XR, 네트워크,<br>
          콘텐츠 실감기술 개발에 집중하여 포더비전만의 새롭고 차별화된 ‘메타버스 엔진 기술을 이용한<br>
          혁신적인 서비스 및 플랫폼’의 미래를 그려가고 있습니다.
        </span>
      </div>
    </div>
    <div class="r-mobile">
      <div>
        <div>
          <img src="../assets/ico_rocket.svg">
        </div>
        <h2>1세대 가상현실 기업에서,<br>1세대 메타버스 엔진<br>기업으로의 도약</h2>
        <span>
          포더비전은 다양한 몰입형 미디어 분야의 기술을 선도하는
          1세대 Immersive media Tech 기업에서 메타버스 엔진 기업으로의 도약을 시작하고 있습니다.<br><br>
          IT, 게임, 엔터테인먼트, 산업, 교육 등 다양한 산업 영역에서 가상·증강현실 콘텐츠 개발 분야의
          경험과 전문 역량을 바탕으로 글로벌 미래 산업의 패러다임 ‘메타버스 엔진’ 개발을 통해
          다가올 미래 기술을 이끌어 가는 기업을 목표하고 있습니다.
        </span>
      </div>
      <div>
        <div>
          <img src="../assets/ico_vrdevice.svg">
        </div>
        <h2>현실과 가상 세계의<br>유용한 상호작용과<br>즐거운 몰입 경험 창조</h2>
        <span>
          사용자 경험을 중심으로 시장 및 트렌드 분석, 사용자 리서치를 통한 메타버스 콘텐츠 및 서비스 기획,
          현실과 가상 세계와의 상호작용 및 연동 기술, 고품질 메타버스 구현을 위한 몰입형 XR, 네트워크,
          콘텐츠 실감기술 개발에 집중하여 포더비전만의 새롭고 차별화된 ‘메타버스 엔진 기술을 이용한
          혁신적인 서비스 및 플랫폼’의 미래를 그려가고 있습니다.
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main.vue"
}
</script>

<style>

.story-content {
  text-align: center;
  background-image: url("../assets/content-bg-01.png");
  background-image: url("../assets/content-bg-01-01.png");
  background-image: url("../assets/content-bg-01-02.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.story-content span {
  font-weight: 400;
  opacity: 0.6;
}

.story-content>div>div:nth-child(2) {
  margin-top: 64px;
}

.story-content h2 {
  font-size: 30px;
  font-weight: 500;
}

@media screen and (max-width: 768px) {

  .story-content {
    text-align: left;
    background-image: url("../assets/content-bg-01-m.svg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .story-content h2 {
    font-size: 1.6rem;
    font-weight: 600;
  }

  .story-content span {
    opacity: 0.8;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
  }

}

</style>