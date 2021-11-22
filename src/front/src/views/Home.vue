<template>
  <div class="home">

    <head-content id="compMain" class="main-content"/>

    <story-content id="compStry" class="story-content"/>

    <our-service-content id="compService" class="our-services-content"/>

    <engine-content class="our-engine-content"/>

    <our-tech-content id="compTech" class="our-tech-content"/>

    <portfolio-content id="compPtf" class="portfolio-content"/>

    <our-history id="compHsty" class="our-history-content"/>

    <our-partner id="compPtn" class="our-partners-content"/>

    <contact4v id="compCntct" class="contact4v-content"/>

  </div>
</template>

<script>
import Main from "../components/Main"
import Story from "../components/Story"
import OurServices from "@/components/OurServices"
import Engine from "@/components/V4Engine"
import OurTech from "../components/OurTech"
import Portfolio from "../components/Portfolio"
import History from "../components/History"
import Partner from "../components/Partner"
import Contact from "../components/Contact"

export default {
  name: 'Home',
  components: {
    'head-content' : Main,
    'story-content' : Story,
    'our-service-content': OurServices,
    'engine-content' : Engine,
    'our-tech-content' : OurTech,
    'portfolio-content' : Portfolio,
    'our-history' : History,
    'our-partner' : Partner,
    'contact4v' : Contact
  }
}
</script>

<style>

.main-content {
  display: block;
  position: relative;
  height: 720px;
  padding: 72px 10% 200px 10%;
  background: #37474f;
  color: #fff;
}

.story-content {
  padding: 200px 10% 200px 10%;
  color: #fff;
}

.our-services-content {
  text-align: center;
  padding: 200px 10% 200px 10%;
  background: #292929;
  color: #fff;
}

.our-engine-content {
  text-align: center;
  padding: 200px 10% 200px 10%;
  background: #121212;
  color: #fff;
}

.our-tech-content {
  padding: 200px 10% 200px 10%;
  background: #212121;
  color: #fff;
}

.portfolio-content {
  padding: 200px 10% 200px 10%;
  background: #424242;
  color: #fff;
}

.our-history-content {

}

.our-partners-content {
  padding: 200px 10% 200px 10%;
  background: #fafafa;
}

.our-partners-content {
  background: #fff;
}

@media screen and (max-width: 768px) {

  span {
    font-size: 1.2rem;
  }

}

</style>