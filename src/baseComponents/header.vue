<!--
 * @file: 头部组件
 * @Date: 2020-09-10 18:11:11
 * @author: manyao.zhu
-->
<template>
  <div>
    {{ title }}
    <button @click="changeDate">改变值</button>
    <p>{{ $tc("operations.add", 0) }}</p>
    <p>{{ $tc("operations.add", 1) }}</p>
    <p>{{ $tc("operations.add", 2) }}</p>
    <a-button type="primary" @click="changeDate">Primary</a-button>
    <a-date-picker @change="onChange($event)" />

    <input type="text" v-model="text" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "base-header",
  data() {
    return {
      title: "头部",
      text: 122,
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
    onChange(date) {
      console.log("change");
      console.log(date);
    },
  },
};
</script>
<style scoped lang="scss"></style>
