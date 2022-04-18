<template>
  <div class="infoBox">
    <b-icon scale="2" :icon="icon"></b-icon>
    <div class="title">{{ title }}</div>
    <div class="subTitle">{{ subTitle }}</div>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    title: String,
    subTitle: String,
  },
};
</script>

<style scoped>
.infoBox {
  padding: 20px;
  background-color: cadetblue;
  color: white;
  text-align: center;
  height: 100%;
}
.title {
  margin-top: 5px;
  font-weight: bold;
  font-size: 1.2rem;
}
.subTitle {
  font-size: 0.8rem;
  font-style: italic;
}
</style>
