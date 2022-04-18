<template>
  <div class="review-container">
    <div class="review-header">
      <div>
        <b>{{ item.name }}</b>
      </div>
      <div>
        <StarRating :rating="parseInt(item.score)" />
        <div class="date">
          {{ new Date(item.created_at).toLocaleDateString() }}
        </div>
      </div>
    </div>
    <div class="comment">{{ item.comment }}</div>
  </div>
</template>

<script>
import StarRating from './StarRating';
export default {
  name: 'Review',
  components: {
    StarRating,
  },
  props: {
    item: Object,
  },
};
</script>

<style scoped>
.review-container {
  border: 1px solid #cecece;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
}

.review-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.date {
  font-size: 0.7rem;
  color: grey;
  text-align: right;
  font-style: italic;
}

.comment {
  font-size: 0.9rem;
}
</style>
