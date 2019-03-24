<template>
  <div>
    <div class="h_head">热销推荐</div>
    <div class="item" v-for="v in hot" :key="v.id">
      <img :src="v.imgUrl" alt>
      <p class="p1">{{v.title}}</p>
      <p class="p2">{{v.desc}}</p>
      <button>查看详情</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "hot",
  props: {
    hot: Array
  },
  data() {
    return {};
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

.item {
  position: relative;
  padding-left: 160px;
  height: 160px;
  padding-top: 10px;

  img {
    position: absolute;
    left: 10px;
    height: 140px;
    width: 140px;
  }

  .p1 {
    font-size: 26px;
    margin-top: 15px;
  }

  .p2 {
    font-size: 22px;
    margin: 20px 0;
  }

  button {
    height: 35px;
    width: 120px;
    border-radius: 8px;
    background-color: #ff9300;
    color: #fff;
    font-size: 20px;
  }
}
</style>
