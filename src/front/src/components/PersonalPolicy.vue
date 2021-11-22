<template>
  <div class="fragment">
    <div>
      <div class="fragment-head">
        <p style="opacity: 0.5">주식회사 포더비전</p>
        <H3>개인정보 수집 및 이용 안내</H3>
        <img src="../assets/ico-close.svg" class="btn-close" v-on:click="closePopup"/>
      </div>
      <div class="fragment-body">
        <div>
          <p>포더비전 웹사이트 문의 제출 서비스 제공을 위한 개인정보 수집·이용을 위하여 개인정보 보호법 제15조 및 제22조에 따라 귀하의 동의를 받고자 합니다.</p>
          <div>만일 다음 사항 중 어느 하나의 사항을 변경하는 경우에는 이를 사전에 알리고 동의를 받도록 하겠습니다.</div>
          <div v-show="policyDetail" class="policy">
            <p>가. 개인정보의 수집 및 이용 목적</p>
            <div>
              포더비전 웹사이트 문의 제출<br>서비스에 대한 업무 처리
            </div>
            <p>나. 수집하려는 개인정보의 항목</p>
            <div>
              필수항목: 이름, 전화번호, 전자우편
            </div>
            <p>다. 수집하려는 개인정보의 항목</p>
            <div>
              문의일로부터 6개월
            </div>
            <p>라. 동의를 거부할 권리가 있다는 사실과 동의 거부에 따른 불이익 내용</p>
            <div>
              귀하는 개인정보의 수집 및 이용에 대한 동의를 거부할 권리가 있으나, 동의하지 않은 경우에는 ＇XXXXX’ 신청을 진행하실 수 없습니다.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      policyDetail: true
    }
  },
  props: ['close-this-modal'],
  name: "PersonalPolicy.vue",
  methods: {
    closePopup: function () {
      this.$emit('closedModal', '');
    }
  }
}
</script>

<style scoped>
.fragment {
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);
  color: #37474f;
}

.fragment>div {
  display: block;
  background: #fff;
  border-radius: 4px;
  margin: 10%;
}

.fragment-head,
.fragment-body {
  padding: 16px;
}

.fragment-head {
  position: relative;
  background: #fafafa;
  border-radius: 4px 4px 0px 0px;
  color: #37474f;
}

.fragment-body,
.policy div {
  font-size: 12px !important;
}

.policy div {
  padding-left: 1rem;
}

.btn-close {
  position: absolute;
  color: #37474f;
  top: 10px;
  right: 10px;
}

/*height: 100%;*/
@media screen and (max-width: 800px) {
  .fragment>div {
    width: 96%;
  }
}

</style>