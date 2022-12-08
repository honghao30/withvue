<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>
      <img
        src="https://cdn.pixabay.com/photo/2019/09/30/19/20/caravansary-4516601_960_720.jpg"
        alt=""
      />
    </swiper-slide>
    <swiper-slide>
      <img
        src="https://cdn.pixabay.com/photo/2019/09/30/19/20/caravansary-4516601_960_720.jpg"
        alt=""
      />
    </swiper-slide>
  </swiper>
</template>

<script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = swiper => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style lang="scss" scoped>
.swiper-slide img {
  width: 100%;
}
</style>
