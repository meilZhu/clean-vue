<!--
 * @file: 
 * @Date: 2020-09-10 19:00:35
 * @author: manyao.zhu
-->
<template>
  <div>{{ title }}{{ name }}</div>
</template>

<script>
export default {
  name: "base-table",
  data() {
    return {
      title: "表格",
    };
  },
  props: ["name"],
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang="scss"></style>
