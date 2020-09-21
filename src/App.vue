<template>
  <div id="app">
    <div class="pagerwrap">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
  margin: 0 auto;
  // background-image: url("./assets/images/bg_main1.png");
  // background-image: url("./assets/images/bg_main.png");
  background-position: top center;
  background-repeat: no-repeat;
  position: relative;
  background-color: #eee;
}

.pagerwrap {
  width: 100%;
  margin: 0 auto;
}
</style>
