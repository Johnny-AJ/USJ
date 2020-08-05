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
    home
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
  background-image: url("assets/images/bg_main.png");
  background-position: top center;
  background-repeat: no-repeat;
  position: relative;
}
.pagerwrap {
  width: 1000px;
  height: 100%;
  margin: 0 auto;
  border: 1px solid red;
}
</style>
