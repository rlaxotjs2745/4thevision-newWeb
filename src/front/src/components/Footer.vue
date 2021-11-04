<template>
<div class="footer-info">
  <div class="hbox">
    <!-- logo image -->
    <div>
      <img class="footer-logo" src="../assets/footer-4v-logo.png"/>
    </div>
    <!-- company info -->
    <div>
      <h6>주식회사 포더비전</h6>
      <div class="hbox footer-text-area">
        <div class="footer-title">
          <p>CEO, CTO</p>
          <p>설립년월</p>
          <p>주소</p>
          <p>사업자등록번호</p>
        </div>
        <div class="footer-text-info">
          <p>이아백</p>
          <p>2015년 10월</p>
          <p>경기도 성남시 분당구 LH판교제2테크노벨리<br>기업성장센터(322호)</p>
          <p>사업자등록번호</p>
        </div>
      </div>
    </div>
    <!-- contact us -->
    <div>
      <div>
        <h6>Contact us</h6>
        <div class="hbox footer-text-area">
          <div class="footer-title">
            <p>본사전화</p>
            <p>팩스번호</p>
            <p>이메일</p>
          </div>
          <div class="footer-text-info">
            <p>031-8017-0360</p>
            <p>031-8060-0144</p>
            <p>contact@4thevision.com</p>
          </div>
        </div>
        <div class="footer-sns-links footer-text-area">
          <img src="../assets/ico_naverblog.png"
               @mouseover="footerToggle = true; snsName ='네이버 블로그'"
               @mouseleave="footerToggle = false;"/>
          <img src="../assets/ico_linkedin.png"
               @mouseover="footerToggle = true; snsName='링크드인'"
               @mouseleave="footerToggle = false;"/>
          <div class="footer-toggle" v-show="footerToggle">포더비전 {{ snsName }} 바로가기 ✨</div>
        </div>
      </div>
    </div>
    <!-- top -->
    <div>
      <button class="btn_gotop" @click="goTop">맨위로</button>
    </div>
  </div>
  <p class="copyright">Copyright 2021. 4thevision inc. all rights reserved.</p>
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
  background: #424242;
  color: #fff;
}

.footer-info>div {
  justify-content: space-between;
}

.footer-info h6 {
  margin: 0;
  font-size: 1.2rem;
}

.footer-title p,
.footer-text-info p {
  opacity: 0.8;
  font-size: 0.8rem !important;
}

.footer-title p {
  font-weight: 600;
  margin-right: 32px;
}

.footer-text-info p {
  font-weight: 300;
}

.footer-title:nth-child(1)>p:nth-child(3) {
  margin-bottom: 32px;
}

.footer-sns-links img{
  margin-right: 8px;
}

.footer-toggle {
  position: absolute;
  background: rgba(0, 0, 0, 0.1);
  padding: 4px;
  border-radius: 4px;
  font-size: 12px;
  transition: all 2s;
}

.btn_gotop {
  background: #727272;
  color: #fff;
  border: none;
  padding: 12px;
  border-radius: 16px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
}

.btn_gotop:hover {
  background: #8e5dff;
}

.footer-text-area {
  min-width: 300px;
}

.copyright {
  pointer-events: none;
  text-align: center;
  margin: 1.6rem 0 0 0;
  opacity: 0.3;
  font-weight: 300;
}

@media screen and (max-width: 800px) {
  .footer-logo {
    width: 60%;
  }

  .footer-info h6 {
    font-size: 1rem;
  }

  .footer-info {
    padding: 52px 32px 52px 32px;
    min-width: auto;
  }

  .footer-info>div {
    display: inline-block;
  }

  .footer-info>div>div {
    margin-top: 32px;
  }

  .copyright {
    font-size: 12px;
  }

  .footer-title p,
  .footer-text-info p {
    font-size: 10px;
  }

  .footer-title:nth-child(1)>p:nth-child(3) {
    margin-bottom: 24px;
  }
}

</style>