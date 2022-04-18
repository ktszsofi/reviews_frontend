<template>
  <div>
    <span v-for="i in 5" :key="i">
      <b-icon v-if="i <= rating" icon="star-fill"></b-icon>
      <b-icon
        v-else-if="rating % 1 != 0 && i == Math.floor(rating) + 1"
        icon="star-half"
      ></b-icon>
      <b-icon v-else-if="i > rating" icon="star"></b-icon>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    rating: Number,
  },
};
</script>

<style scoped>
.b-icon {
  color: cadetblue;
}
</style>
