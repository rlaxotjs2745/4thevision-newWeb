<template>
<div>
  <div>
    <div class="flex-layout justfy-sb contact-view">
      <div class="contact-section flex-layout">
        <div class="self-center">
          <div class="highlight">
            <div/>
            <div class="highlight-text">Contact</div>
          </div>
          <h2>궁금하신 내용을 남겨주세요!</h2>
          <div class="r-desktop" data-tf-widget="RfGkVuS8" data-tf-opacity="0" data-tf-hide-headers style="width:500px;height:400px;"></div>
          <button class="btn-contact r-mobile" data-tf-popup="RfGkVuS8" data-tf-size="70" >파트너십 제안 & 문의</button>
        </div>
      </div>
      <div class="map-section">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.4327024305544!2d127.09869385121773!3d37.403246241120904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca78a45a0c9e5%3A0x1ac98020d24fef6c!2zKOyjvCntj6zrjZTruYTsoIQ!5e0!3m2!1sko!2skr!4v1635902770701!5m2!1sko!2skr" width="100%" height="700px" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "Contact",
  data () {
    return {
      contactModalStatus : false
    }
  },
  methods: {

  }
}
</script>

<style scoped>

.contact-section,
.map-section {
  width: 50%;
  height: 500px;
  color: #fff;
}

.contact-section {
  width: 30%;
  padding: 100px 10% 100px 10%;
  background: #62727b;
}

.btn-contact {
  padding: 16px;
  border: none;
  background: #FFFFFF;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
}

.btn-contact:hover {
  background: #c09aff;
}

@media screen and (max-width: 768px) {

  .contact-view {
    display: block;
  }

  .contact-view>div:nth-child(1) {
    width: auto;
    padding: 100px 10% 100px 10%;
    height: 300px;
  }

  .map-section {
    width: 100%;
    height: 400px;
    padding: 0;
  }

  .map-section iframe {
    height: 400px;
  }

}

</style>