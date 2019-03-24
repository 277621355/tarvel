<template>
  <div class="head">
    <!-- <div class="left">
      <a href="#" class="fa fa-angle-left"></a>
    </div>
    <div class="input">
      <span class="fa fa-search"></span>
      <input type="text" placeholder="输入城市/景点/游玩主题">
    </div>
    <router-link to="/city" class="right">
      <i>{{city}}</i>
      <span class="fa fa-caret-down"></span>
    </router-link> -->
    <div class="top">
      <a href="#" class="fa fa-angle-left"></a>

        <!-- <span class=""></span> -->
        <span>城市选择</span>
    </div>
  </div>
</template>
<script>
export default {
    name:'cHeader',
    data() {
        return {
            
        }
    },
}
</script>
<style lang="stylus" scoped>
$col = #00bcd4;

.head {
  display: flex;
  line-height: 86px;
  background-color: $col;
  color: #fff;
  font-size: 22px;
  text-align center
  }
  .top {
      width 100%
      text-align center
  }
</style>
