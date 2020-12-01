<template>
  <div class="swiper-container" id="mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="img in getBanners" :key="img.id">
        <img :src="img.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay]);
export default {
  name: "Carousel",
  props: {
    getBanners: Array,
  },
  watch: {
    getBanners() {
      setTimeout(() => {
        new Swiper(".swiper-container", {
          loop: true,

          pagination: {
            el: ".swiper-pagination",
          },

          navigation: {
            nextEl: ".swiper-button-prev",
            prevEl: ".swiper-button-next",
          },

          scrollbar: {
            el: ".swiper-scrollbar",
          },
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
        });
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped>
</style>
