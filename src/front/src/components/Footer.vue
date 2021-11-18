<template>
<div class="footer-info">
  <img src="../assets/footer-4v-logo.png"/>
  <div class="spc-md"/>
  <div class="company-info">
    <span class="title">사업자명</span> <span>주식회사 포더비전</span>
    <span class="title">사업자 등록번호</span> <span>866-81-00239</span>
    <span class="title">대표</span> <span>이아백</span>
  </div>
  <div class="company-info">
    <span class="title">문의전화</span> <span>031-624-0869</span>
    <span class="title">이메일</span> <span>ask@4thevision.com</span>
    <span class="title">팩스번호</span> <span>031-624-8069</span>
  </div>
  <div class="company-info">
    <span class="title">주소</span> <span>경기도 성남시 수정구 창업로42번길 경기기업지원허브 332호</span>
  </div>
  <div class="spc-md"/>
  <span class="copyright">Copyright 2021. 4thevision inc. all rights reserved.</span>
</div>
</template>

<script>
export default {
  data () {
    return {
      footerToggle: false,
      snsName: String
    }
  },
  methods: {
    goTop() {
      window.scrollTo(0,0);
    }
  }
}
</script>

<style scoped>
.footer-info {
  padding: 72px 10% 72px 10%;
  background: #58646a;
  color: #fff;
}

.company-info .title {
  font-weight: 500;
  opacity: 1 !important;
}

.company-info span{
  color: #fff;
  margin-left: 16px;
  opacity: 0.7;
  font-size: 16px;
  line-height: 32px;
}

.copyright {
  opacity: 0.5;
  font-size: 12px;
  line-height: 1.83;
  text-transform: uppercase;
  letter-spacing: 0.24px;
  color: #fefefe;
}

@media screen and (max-width: 800px) {

}


</style>