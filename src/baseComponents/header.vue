<!--
 * @file: 头部组件
 * @Date: 2020-09-10 18:11:11
 * @author: manyao.zhu
-->
<template>
  <div>
    {{ title }}
    <button @click="changeDate">改变值</button>
    <a-button type="primary" @click="changeDate">Primary</a-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "base-header",
  data() {
    return {
      title: "头部",
    };
  },
  created() {},
  mounted() {},
  methods: {
    ...mapActions({
      setName: "supplier/setName",
    }),
    changeDate() {
      console.log(this);
      this.$message.success("成功过");
      console.log(1);
      // this.$store.dispatch("supplier/setName", {
      //   title: "李四",
      //   cb: () => {
      //     console.log("将张三改为李四");
      //   },
      // });
      this.setName({
        title: "李四",
        cb: () => {
          console.log("jiang张三改为李四");
        },
      });
    },
  },
};
</script>
<style scoped lang="scss"></style>
