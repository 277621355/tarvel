   <template>
  <div>
    <swiper :options="swiperOption" class="swi" v-if="swiper.length">
      <swiper-slide v-for="v in swiper" :key="v.id">
        <img :src="v.imgUrl" alt class="swiper-img">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HeadSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      }
    };
  },
  props: {
    swiper: Array
  },
  methods: {
    log() {
      console.log(HeadSwiper);
    }
  }
};
</script>
<style lang="stylus" scoped>
.swi >>> .swiper-pagination-bullet-active {
  background-color: #fff;
}

img {
  height: 260px;
  width: 100%;
}
</style>
