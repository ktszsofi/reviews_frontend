<template>
  <div id="app" v-if="dataLoaded">
    <div class="info">
      <StoreInfo />
    </div>
    <div class="content">
      <b-row>
        <b-col cols="12" md="6">
          <ReviewForm @submit="submit" />
        </b-col>
        <b-col cols="12" md="6">
          <ReviewSummary :items="reviews" />
        </b-col>
      </b-row>
      <ReviewList :reviews="reviews" />
    </div>
  </div>
  <div v-else>
    <div class="d-flex justify-content-center mb-3">
      <b-spinner></b-spinner>
    </div>
  </div>
</template>

<script>
import api from './services/ReviewsService.js';
import StoreInfo from './components/StoreInfo.vue';
import ReviewList from './components/ReviewList.vue';
import ReviewSummary from './components/ReviewSummary.vue';
import ReviewForm from './components/ReviewForm.vue';

export default {
  name: 'App',
  components: {
    ReviewList,
    ReviewSummary,
    ReviewForm,
    StoreInfo,
  },
  data() {
    return {
      dataLoaded: false,
      reviews: [],
    };
  },
  async mounted() {
    try {
      let response = await api.getItems();
      this.reviews = response.data;
      this.dataLoaded = true;
    } catch (e) {
      alert('Something went wrong. Try again.');
    }
  },
  methods: {
    async submit(review) {
      try {
        let response = await api.postItems(review);
        console.log(response);
        this.reviews.unshift(response.data[0]);
      } catch (e) {
        alert('Something went wrong. Try again.');
      }
    },
  },
};
</script>

<style>
.content {
  margin: 20px;
}
.customPage.page-item.active .page-link {
  background-color: cadetblue;
  border-color: cadetblue;
}
.customPage .page-link {
  color: cadetblue;
}
</style>
