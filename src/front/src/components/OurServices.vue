<template>
    <div>
      <h2>고품질 메타버스 구현을 위한 몰입형 XR 기술과<br>콘텐츠 실감 기술 개발</h2>
      <span>
        또 다른 세계, 또 다른 나와 만나는 메타버스<br>
        현실과 가상의 세계가 상호작용하는 기술을 4V ENGINE 으로 만들어 갑니다.
      </span>

      <div class="spc-md"/>
      <div>
        <mix-slide-ui/>
      </div>
    </div>
</template>

<script>
import MixSlide from "@/4vInterface/MixSlide";

export default {
  name: "OurServices.vue",
  components: {
    "mix-slide-ui": MixSlide
  }
}
</script>

<style scoped>

span {
  opacity: 0.7;
}

@media screen and (max-width: 800px) {


}

</style>