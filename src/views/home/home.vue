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
    <a-button type="primary" @click="request">请求接口</a-button>
    <Language></Language>
    <Footer></Footer>
    <base-table :name="home"></base-table>
  </div>
</template>

<script>
import { getUserPortal } from "../../shared/fetch/service/common.service";
export default {
  name: "home",
  data() {
    return {
      home: "首页",
    };
  },
  methods: {
    request() {
      const params = {
        appId: "SRM",
      };
      getUserPortal(params).then((res) => {
        console.log("请求接口成功", res);
      });
    },
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
