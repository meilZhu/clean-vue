<!--
 * @file: 
 * @Date: 2020-09-17 10:35:39
 * @author: manyao.zhu
-->
<template>
  <div>
    <button @click="changeLanguage('zh')">中文</button
    ><button @click="changeLanguage('en')">英文</button>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    changeLanguage(lan) {
      this.$i18n.locale = lan;
    },
  },
};
</script>
<style scoped lang="scss"></style>
