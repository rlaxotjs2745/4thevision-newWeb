<template>
  <div class="home">

    <!-- main content section -->
    <head-content id="compMain" class="main-content"/>

    <!-- story content section -->
    <story-content id="compStry" class="story-content"/>

   <our-service-content id="compService" class="our-services-content"/>

    <!-- tech -->
    <our-tech-content id="compTech" class="our-tech-content"/>

    <!-- portfolio -->
    <portfolio-content id="compPtf" class="portfolio-content"/>

    <!-- Company History -->
    <our-history id="compHsty" class="our-history-content"/>

    <!-- Partner -->
    <our-partner id="compPtn" class="our-partners-content"/>

    <!-- Contact -->
    <contact4v id="compCntct" class="contact4v-content"/>

  </div>
</template>

<script>
import Main from "../components/Main"
import Story from "../components/Story"
import OurServices from "@/components/OurServices"
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
  height: 800px;
  padding: 85px 10% 100px 10%;
  background: #37474f;
  color: #fff;
}

.story-content {
  padding: 100px 10% 100px 10%;
  color: #fff;
}

.our-services-content {
  text-align: center;
  padding: 100px 10% 100px 10%;
  background: #292929;
  color: #fff;
}

.our-tech-content {
  padding: 100px 10% 100px 10%;
  background: #37474f;
  color: #fff;
}

.portfolio-content {
  padding: 100px 10% 100px 10%;
  background: #8e5dff;
  color: #fff;
}

.our-history-content,
.our-partners-content {
  padding: 100px 10% 100px 10%;
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