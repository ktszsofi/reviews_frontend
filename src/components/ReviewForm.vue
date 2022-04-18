<template>
  <div>
    <h5>Leave a review</h5>
    <label for="name">Please enter your name</label>
    <b-form-input id="name" v-model="name" placeholder="Name"></b-form-input>
    <label for="score"
      >How would you rate your experience with our store?</label
    >
    <b-form-rating color="cadetblue" id="score" v-model="score"></b-form-rating>
    <label for="comment">Please detail your rating</label>
    <b-form-textarea
      id="comment"
      v-model="comment"
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    <div class="submit">
      <b-button
        @click="submit()"
        :disabled="name == null || name.length < 1 || score == null"
        >Send</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      score: null,
      comment: null,
    };
  },
  methods: {
    submit() {
      let review = {
        name: this.name,
        score: this.score,
        comment: this.comment,
      };
      this.$emit('submit', review);
      this.name = null;
      this.score = null;
      this.comment = null;
    },
  },
};
</script>

<style scoped>
.submit {
  text-align: right;
  margin-top: 10px;
  margin-bottom: 20px;
}
label {
  font-size: 0.8rem;
}
button {
  background-color: cadetblue;
  border-color: cadetblue;
}
</style>
