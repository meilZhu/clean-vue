<!--
 * @file: 
 * @Date: 2020-09-10 16:54:42
 * @author: manyao.zhu
-->
<template>
  <div>
    {{ login }}
    <div>{{ num | number }}</div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      login: "登录",
      num: 12345,
    };
  },
  created() {},
  mounted() {},
  filters: {
    number: function(num) {
      return `$ ${num}`;
    },
  },
  methods: {},
};
</script>
<style scoped></style>
