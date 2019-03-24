<template>
  <div>
    <headder :city='city'></headder>
    <head-swiper :swiper='HeadSwiperlist'></head-swiper>
    <h-icons :icon='HIconslist'></h-icons>
    <hot :hot= 'hotlist'></hot>
    <weeken :week='weekenlist'></weeken>
  </div>
</template>
<script>
import headder from "./components/header";
import HeadSwiper from "./components/swiper";
import HIcons from "./components/hIcons";
import hot from "./components/hot";
import weeken from "./components/weeken";
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      city1: "",
      HeadSwiperlist: [],
      HIconslist: [],
      hotlist: [],
      weekenlist: [],
      city :'北京'
    };
  },
  methods: {},
  components: {
    headder,
    HeadSwiper,
    HIcons,
    hot,
    weeken
  },
  created() {
    this.getdata();
  },
  methods: {
    async getdata() {
      const res = await axios.get("/api/index.json" + this.city1);
      const { data } = res.data;
      this.HeadSwiperlist = data.swiperList;
      this.HIconslist = data.iconList;
      this.hotlist = data.recommendList;
      this.weekenlist = data.weekendList;
    }
  }
};
</script>
<style lang="stylus" scoped>
</style>


