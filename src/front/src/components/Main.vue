<template>
    <div>
      <div class="headcopy-area">
        <H1>
          <span>또 다른 세계, 또 다른 나와 만나는 메타버스,</span><br>
          현실과 가상의 세계가 상호작용하는<br>
          세상을 4V Engien이 만들어 갑니다.<br>
        </H1>
        <div class="spc-sm"/>
        <button class="main-button">Contact us</button>
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
  letter-spacing: 1px;
  background: #8e5dff;
  color: #fff;
}
background: #7346d9;

.main-button:hover {
}

@media screen and (min-width: 1920px) {

}

@media screen and (max-width: 768px) {


}

</style>