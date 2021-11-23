<template>
<div class="footer-info">
  <div class="flex-layout justfy-sb">
    <div>
      <img class="footer-logo" src="../assets/footer-4v-logo.png"/>
      <div class="spc-md"/>
      <div class="company-info">
        <div><span class="title">사업자명</span> <span>주식회사 포더비전</span></div>
        <div><span class="title">사업자 등록번호</span> <span>866-81-00239</span></div>
        <div><span class="title">대표</span> <span>이아백</span></div>
      </div>
      <div class="company-info">
        <div><span class="title">문의전화</span> <span>031-8017-0369</span></div>
        <div><span class="title">이메일</span> <span>info@4thevision.com</span></div>
        <div><span class="title">팩스번호</span> <span>031-624-8069</span></div>
      </div>
      <div class="company-info r-desktop">
        <div class="r-desktop"><span class="title">주소</span> <span>소경기도 성남시 수정구 시흥동 창업로 42 경기기업성장센터 322호</span></div>
      </div>
      <div class="company-info r-mobile">
        <div class="r-desktop"><span class="title">주소</span><span>경기도 성남시 수정구 시흥동 창업로 42<br>경기기업성장센터 322호</span></div>
      </div>
      <div class="spc-md"/>
      <span class="copyright">Copyright 2021. 4thevision inc. all rights reserved.</span>
    </div>
    <div class="site-map-area">
      <span class="site-map">Site Map</span><br>
      <div class="spc-sm"/>
      <button class="btn-pages" v-on:click="goTop()">맨위로</button>
<!--      <Button class="btn-pages" v-on:click="$router.push({ path: '/personal-policy' })">개인정보처리방침</Button>-->
      <button class="btn-pages" v-on:click="personalPolicyOpen = true">개인정보처리방침<img src="../assets/ico-open-in-new.svg" style="width: 12px; margin-left: 1px;"></button>
      <personal-policy v-show="personalPolicyOpen"
                      :close-this-modal="personalPolicyOpen"
                      @closedModal="closeModal('personalPolicy')"
      />
      <button class="btn-pages" onclick="location.href = 'https://blog.naver.com/4thevision'">포더비전 기술 블로그</button>
    </div>
  </div>

</div>
</template>

<script>
import PersonalPolicy from "@/components/PersonalPolicy";

export default {
  components: {
    'personal-policy' : PersonalPolicy
  },
  data () {
    return {
      snsName: String,
      personalPolicyOpen: false
    }
  },
  methods: {
    goTop() {
      window.scrollTo(0,0);
    },
    closeModal(modalName) {
      const modal = modalName;
      switch (modal) {
        case 'personalPolicy':
          this.personalPolicyOpen = false;
      }
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

.footer-logo {
  width: 180px;
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

.site-map {
  font-size: 12px;
  font-weight: bold;
}

.btn-pages {
  background: none;
  color: #fff;
  padding: 0;
  margin-right: 16px;
}

.company-info>div{
  display: inline-block;
}

@media screen and (max-width: 800px) {
  .footer-info>div {
    display: block;
  }

  .company-info span{
    color: #fff;
    margin-left: 10px;
    opacity: 0.7;
    font-size: 12px;
    line-height: 28px;
  }

  .footer-info>div>div:nth-child(2) {
    margin-top: 72px;
    padding-top: 32px;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
  }

  .company-info>div{
    display: block;
  }

  .company-info>div span:nth-child(1) {
    margin: 0;
  }
}


</style>