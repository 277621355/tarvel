<template>
  <div>
    <div class="h_head">周末去哪儿</div>
    <div v-for="v in week" :key="v.id">
      <img :src='v.imgUrl' alt>
      <p class="p1">{{v.title}}</p>
      <p class="p2">{{v.desc}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "weeken",
  props:{
      week:Array
  },
  data() {
    return {
      list: [
        {
          id: "0",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
          title: "北京温泉排行榜",
          desc: "细数北京温泉，温暖你的冬天"
        },
        {
          id: "0",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
          title: "北京温泉排行榜",
          desc: "细数北京温泉，温暖你的冬天"
        },
        {
          id: "0",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
          title: "北京温泉排行榜",
          desc: "细数北京温泉，温暖你的冬天"
        },
        {
          id: "0",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
          title: "北京温泉排行榜",
          desc: "细数北京温泉，温暖你的冬天"
        },
        {
          id: "0",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
          title: "北京温泉排行榜",
          desc: "细数北京温泉，温暖你的冬天"
        },
        {
          id: "0",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
          title: "北京温泉排行榜",
          desc: "细数北京温泉，温暖你的冬天"
        },
        {
          id: "0",
          imgUrl:
            "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
          title: "北京温泉排行榜",
          desc: "细数北京温泉，温暖你的冬天"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped>
.h_head {
  height: 60px;
  background-color: #eee;
  line-height: 60px;
  padding-left: 15px;
  font-size: 20px;
}
img {
    width 100%
}
.p1{
    font-size 26px
    margin-top 25px
    margin-bottom 20px
    padding-left 10px
}
.p2{
    font-size 22px
    margin-bottom 20px
    padding-left 10px
    color #ccc

}
</style>
