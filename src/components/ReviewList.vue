<template>
  <div class="reviewList">
    <div class="d-flex">
      <b-form-select
        @change="currentPage = 1"
        v-model="perPage"
        :options="pageOptions"
      ></b-form-select>
      <div class="perPage">per page</div>
    </div>

    <b-pagination
      class="d-flex mt-2"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      page-class="customPage"
    ></b-pagination>
    <b-row>
      <b-col v-for="review in reviewsToShow" :key="review.id" lg="6"
        ><Review :item="review"
      /></b-col>
    </b-row>
  </div>
</template>

<script>
import Review from './Review';

export default {
  props: {
    reviews: Array,
  },
  components: {
    Review,
  },
  data() {
    return {
      perPage: 5,
      currentPage: 1,
      pageOptions: [5, 10, 20, 50],
    };
  },
  computed: {
    rows() {
      return this.reviews.length;
    },
    reviewsToShow() {
      let reviewsToShow = [];
      let firstToShow = (this.currentPage - 1) * this.perPage;
      if (firstToShow > this.reviews.length) {
        firstToShow = 0;
      }
      let lastToShow = firstToShow + this.perPage;
      if (lastToShow > this.reviews.length) {
        lastToShow = this.reviews.length;
      }
      for (let i = firstToShow; i < lastToShow; i++) {
        reviewsToShow.push(this.reviews[i]);
      }
      return reviewsToShow;
    },
  },
};
</script>

<style scoped>
.perPage {
  margin-left: 5px;
}
select {
  width: 100px;
}
.d-flex {
  align-items: center;
  justify-content: end;
}
.reviewList {
  margin-right: 20px;
  margin-left: 20px;
}
</style>
