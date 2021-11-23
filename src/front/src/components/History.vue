<template>
    <div>
      <div class="section-title">
        <div>
          <h2>포더비전이 걸어온 길</h2>
          <span style="opacity: 0.7">2015년부터 한 걸음씩 멈추지 않고 걸어왔습니다.</span>
          <div class="spc-lg"/>
          <button class="btn-document" v-on:mouseleave="getIRDocs = '[IR] IR 자료가 궁금해요!'" v-on:mouseover="getIRDocs = 'Contact us에서 요청해주세요.'">{{ getIRDocs }}</button><br>
          <button class="btn-document" onclick="location.href = 'https://www.notion.so/4thevision/93c67d52a9534e00801686095cbf73c5'">[채용] 포더비전 입사 지원</button>
        </div>
        <div>
          <img src="../assets/3d-slogan.png">
        </div>
      </div>
      <div class="history-map">
        <img src="../assets/history.png">
      </div>
    </div>
</template>

<script>
export default {
  name: "History.vue",
  data () {
    return {
      getIRDocs: '[IR] IR 자료가 궁금해요!'
    }
  }
}

</script>

<style scoped>
.section-title {
  display: flex;
  padding: 200px 10% 0 10%;
}

.section-title>div {
  width: 50%;
}

.btn-document {
  text-align: left;
  width: 300px;
  background: #fff;
  color: #62727B;
  padding: 16px;
  margin-bottom: 16px;
  border: solid 1px #cfd8dc;
  font-size: 16px;
  cursor: pointer;
}

.btn-document:hover {
  background: #fafafa;
}

.history-map {
  width: 100%;
  overflow: scroll;
  padding-bottom: 32px;
}

.history-map img {
  width: 2200px;
}

.history-map ::-webkit-scrollbar {
  background: none;
}

@media screen and (max-width: 768px) {
  .section-title {
    display: block;
  }

  .section-title>div {
    width: 100%;
  }

  .section-title>div img {
    width: 100%;
  }
}

</style>