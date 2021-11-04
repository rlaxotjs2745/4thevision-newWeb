<template>
  <div class="sns-area">
    <img src="../assets/copy-sns-modal.svg"/>
    <div>
      <img src="../assets/ico_naverblog.png"/>
    </div>
    <div>
      <img src="../assets/ico_linkedin.png"/>
    </div>
  </div>
</template>

<style>
.sns-area {
  position: fixed;
  top: 50%;
  right: 26px;
}

.sns-area>div:nth-child(2),
.sns-area>div:nth-child(3){
  margin-top: 20px;
}

@media screen and (max-width: 768px) {
  .sns-area {
    display: none;
  }
}
</style>