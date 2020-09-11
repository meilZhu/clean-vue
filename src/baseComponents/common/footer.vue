<!--
 * @file: 
 * @Date: 2020-09-10 18:14:07
 * @author: manyao.zhu
-->
<template>
  <div>
    {{ title }}
    <span>{{ supplierTitle }}</span>
    <div>{{ name }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "base-footer",
  data() {
    return {
      title: "底部",
    };
  },
  created() {},
  mounted() {},
  // computed: mapState({
  //   // supplierTitle(state) {
  //   //   return state.supplier.title;
  //   // },
  //   // supplierTitle: (state) => state.supplier.title,
  // }),
  computed: {
    supplierTitle() {
      return this.$store.state.supplier.title;
    },
    ...mapState({
      name: (state) => state.supplier.title,
    }),
  },
  methods: {},
};
</script>
<style scoped lang="scss"></style>
