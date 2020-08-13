<template>
  <div id="app">
    <div class="pagerwrap">
      <top />
      <router-view />
      <bottom />
    </div>
  </div>
</template>
<script>
import top from "./components/top";  // 头部
import bottom from "./components/bottom";  // 底部
import home from "./views/home/home";  // 首页
import order from "./views/order/order";  // 订单详情
import success from "./views/success/success";  // 成功页
import fill from "./views/fill/fill";  // 填写信息
import payment from "./views/payment/payment";  // 支付页
export default {
  name: "App",
  components: {
    top,
    bottom,
    home,
    order,
    success,
    fill,
    payment,
  },
  data() {
    return {

    };
  },
};
</script>
<style lang="scss" scope>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
  margin: 0 auto;
  // background-image: url("./assets/images/bg_main1.png");
  background-image: url("./assets/images/bg_main.png");
  background-position: top center;
  background-repeat: no-repeat;
  position: relative;
}
.pagerwrap {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  // border: 1px solid red;
}
// .top_img {
//   // width: 100%;
//   width: 1000px;
//   height: 1000px;
//   margin: 0 auto;
//   background-image: url("./assets/images/bg_main.png");
//   background-position: top center;
//   background-repeat: no-repeat;
//   position: relative;
// }
// .bottom_img {
//   // width: 100%;
//   width: 1000px;
//   height: 1000px;
//   margin: 0 auto;
//   background-image: url("./assets/images/bg_main1.png");
//   background-position: bottom center;
//   background-repeat: no-repeat;
//   position: relative;
// }
</style>