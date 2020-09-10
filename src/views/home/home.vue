<template>
  <div>
    <Header></Header>
    {{ home }}
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
<style scoped></style>
