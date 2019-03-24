<template>
  <div class="icons">
    <swiper :options="swiperOption" class="swi">
      <swiper-slide class="contt" v-for="v in pages" :key="v.id">
        <div class="cont" v-for=" v1 in v" :key="v1.id">
          <a href="javascript:;">
            <img :src="v1.imgUrl" alt>
            <p>{{v1.desc}}</p>
          </a>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "hIcons",
  props: {
    icon: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination"
      }
    };
  },

  computed: {
    pages() {
      const pages = [];
      this.icon.forEach((v, i) => {
        const page = Math.floor(i / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(v);
      });
      return pages;
    }
  }
};
</script>
<style lang="stylus" scoped>
.icons {
  width: 100%;
  height: 345px;

  .swi {
    height: 100%;

    .contt {
      flex-wrap: wrap;
      display: flex;

      .cont {
        // flex 1
        height: 50%;
        width: 25%;

        a {
          text-align: center;

          img {
            margin-top: 7px;
            height: 120px;
            width: 120px;
          }

          p {
            margin-top: 10px;
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
