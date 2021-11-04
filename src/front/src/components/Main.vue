<template>
    <div>
      <p class="sub-title">또 다른 세계, 또 다른 나와 만나는 메타버스,<br/></p>
      <h1 class="desktop-headline">현실과 가상의 세계가 상호작용하는<br/>세상을 4V Engien이 만들어 갑니다.</h1>
      <h1 class="mobile-headline">현실과 가상의 세계가<br/>상호작용하는 세상을<br/>4V Engien이<br/>만들어 갑니다.</h1>
      <div class="btn-main-box">
        <button class="btn-main btn-main-layout">더 많은 이야기 나누기</button>
      </div>
      <div class="m-text-center">
        <div class="our-story-card">
          <div>
            <img src="../assets/ico_mission.svg"/>
            <p>MISSION</p>
            <span class="r-desktop">
              사람들에게 시공간의 한계를 넘어설 수 있는<br>
              도구를 제공하여 만나고, 즐기고, 일하는 방식을<br>
              변화시킵니다.
            </span>
            <span class="r-mobile">
              사람들에게 시공간의 한계를<br>넘어설 수 있는 도구를 제공하여<br>
              만나고, 즐기고, 일하는 방식을<br>
              변화시킵니다.
            </span>
          </div>
        </div>
        <div class="our-story-card">
          <div>
            <img src="../assets/ico_vision.svg"/>
            <p>VISION</p>
            <span>
              현실과 가상이 공존하는 세계,<br>
              누구나 소통하고 일과 즐거움을<br>
              누릴 수 있어야 합니다.
          </span>
          </div>
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

.sub-title {
  text-align: left;
  font-size: 1.5rem;
  line-height: 2.2rem;
  font-weight: 300;
}

.btn-main {
  padding: 16px 20px 16px 20px;
  border: none;
  border-radius: 12px;
  background: #8e5dff;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
}

.btn-main-layout {
  margin-top: 120px;
}

.our-story-card {
  display: inline-block;
  margin-top: 100px;
  margin-right: 100px;
}

.our-story-card img {
  width: 3rem;
}

.mobile-headline {
  display: none;
}

@media screen and (max-width: 768px) {

  .mobile-headline {
    display: block;
    font-size: 30px;
  }

  .desktop-headline {
    display: none;
  }

  h1, .sub-title {
    /*text-align: center;*/
  }

  .sub-title {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .btn-main-box {
    /*text-align: center;*/
  }

  .our-story-card {
    /*text-align: center;*/
    width: 100%;
    text-align: left;
    margin: 72px 0 0 0;
  }

}

</style>