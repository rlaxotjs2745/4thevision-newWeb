<template>
    <div>
      <div class="r-desktop desktop-history">
        <div class="flex-layout justfy-sb">
          <div>
            <div class="spc-lg"/>
            <div class="highlight">
              <div/>
              <div class="highlight-text">Company History</div>
            </div>
            <h2>포더비전이 걸어온 길</h2>
            <span>한 걸음씩 멈추지 않고 걸어왔습니다.</span>
            <div class="spc-md"/>
            <img src="../assets/3d-slogan.png"/>
            <div class="spc-md"/>
            <button class="btn-joinus">[문의] 자세한 이야기를 듣고싶어요</button><br>
            <button class="btn-joinus">[IR] 최신 IR자료를 보고싶어요</button><br>
            <button class="btn-joinus">[채용] 포더비전 입사 지원</button><br>
          </div>
          <div>
            <img src="../assets/history.svg">
          </div>
        </div>
      </div>
      
      <div class="r-mobile mobile-history">
        <div class="highlight">
          <div/>
          <div class="highlight-text">Company History</div>
        </div>
        <h2>포더비전이 걸어온 길</h2>
        <span>한 걸음씩 멈추지 않고 걸어왔습니다.</span>
        <div class="spc-lg"/>
        <img src="../assets/m-history.svg">
      </div>
      
    </div>
</template>

<script>
export default {
  name: "History.vue"
}

</script>

<style scoped>
.flex-layout>div{
  width: 50%;
}

.desktop-history>div:nth-child(2) img{
  width: 100%;
}

.mobile-history img {
  width: 100%;
}

.btn-joinus {
  text-align: left;
  width: 302px;
  height: 52px;
  padding: 0 16px;
  border: 1px solid #707070;
  border-radius: 4px;
  margin-bottom: 12px;
  background: #fff;
  font-weight: 500;
  font-size: 16px;
}

.btn-joinus:hover {
  background: #c09aff;
}

@media screen and (max-width: 768px) {

}

</style>