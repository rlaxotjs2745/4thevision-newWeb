<template>
    <div>
      <div class="headcopy-area">
        <H1>
          <span>또 다른 세계, 또 다른 나와 만나는 메타버스,</span><br>
          현실과 가상의 세계가 상호작용하는<br>
          세상을 4V Engien이 만들어 갑니다.<br>
        </H1>
        <div class="spc-sm"/>
        <button class="main-button">더 많은 이야기 나누기</button>
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

@media screen and (min-width: 1920px) {

}

@media screen and (max-width: 768px) {


}

</style>