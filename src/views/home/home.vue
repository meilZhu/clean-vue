<!--
 * @file: 
 * @Date: 2020-09-10 21:54:18
 * @author: manyao.zhu
-->
<template>
  <div class="home">
    <Header></Header>
    <span class="test">
      {{ home }}
    </span>
    <Language></Language>
    <Footer></Footer>
    <base-table :name="home"></base-table>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      home: "首页",
    };
  },
};
</script>
<style scoped lang="scss">
@import "../../assets/css/shared";
.home {
  .test {
    color: $color;
  }
}
</style>
