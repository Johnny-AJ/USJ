<template>
  <div id="app">
    <div class="pagerwrap">
      <top />
      <home />
      <bottom />
    </div>
  </div>
</template>
<script>
import top from "./components/top";
import bottom from "./components/bottom";
import home from "./views/home/home";
export default {
  name: "App",
  components: {
    top,
    bottom,
    home,
  },
  data() {
    return {};
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