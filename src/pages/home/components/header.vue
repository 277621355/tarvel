<template>
  <div class="head">
    <div class="left">
      <a href="#" class="fa fa-angle-left"></a>
    </div>
    <div class="input">
      <span class="fa fa-search"></span>
      <input type="text" placeholder="输入城市/景点/游玩主题">
    </div>
    <router-link to="/city" class="right">
      <i>{{city}}</i>
      <span class="fa fa-caret-down"></span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "headder",
  props: {
    city: String
  }
};
</script>
<style lang="stylus" scoped>
$col = #00bcd4;

.head {
  display: flex;
  line-height: 86px;
  background-color: $col;
  color: #fff;
  font-size: 22px;

  .input {
    position: relative;

    span {
      position: absolute;
      left: 6px;
      font-size: 35px;
      top: 14px;
    }

    input {
      width: 100%;
      height: 100%;
      border-radius: 5 + 5px;
      padding-left: 40px;
      font-size: 22px;
    }

    border-radius: 10px;
    flex: 1;
    height: 64px;
    background-color: #fff;
    margin-top: 12px;
    margin-left: 2px;
    color: #ccc;
    line-height: 64px;
  }

  .left {
    width: 64px;
    float: left;
    height: 86px;

    a {
      width: 100%;
      height: 86px;
      font-size: 50px;
      text-align: center;
      overflow: hidden;
      line-height: 86px;
      color: #fff;
    }
  }

  .right {
    width: 124px;
    float: right;
    color: #fff;
    height: 86px;
    text-align: center;

    span {
      font-size: 30px;
    }

    i {
      font-size: 26px;
    }
  }
}
</style>
