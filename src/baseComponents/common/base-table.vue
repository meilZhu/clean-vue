<!--
 * @file: 
 * @Date: 2020-09-10 19:00:35
 * @author: manyao.zhu
-->
<template>
  <div>
    {{ title }}{{ name }}

    <button>
      {{ $tc("operations.exchange", 0) }}
    </button>
    <button @click="exhcange()">
      {{ $tc("operations.exchange", 1) }}
    </button>
    <button>
      {{ $tc("operations.exchange", 2) }}
    </button>
  </div>
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
  methods: {
    exhcange() {
      console.log("改变");
      this.$message.success(this.$i18n.tc("operations.exchange", 1));
      this.$message.warning(
        this.$i18n.t("footerDesc", { name: this.$i18n.t("projectName") })
      );
      this.$message.error(
        this.$i18n.tc("operations.exchange", 0, {
          name: this.$i18n.t("projectName"),
        })
      );
    },
  },
};
</script>
<style scoped lang="scss"></style>
