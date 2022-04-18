<template>
  <div>
    <div class="summary">
      <h1>{{ averageScore }}</h1>
      <StarRating :rating="parseFloat(averageScore)" />
      <div>{{ items.length }} reviews</div>
    </div>
    <div class="rating">
      <div v-for="prog in progress" :key="prog.stars" class="d-flex">
        {{ prog.stars }}
        <div class="progressBar d-flex m-2">
          <div
            class="progress"
            :style="{
              width: (calculateStars(prog.stars) / items.length) * 100 + '%',
              background: prog.color,
            }"
          ></div>
          <div class="progress empty"></div>
        </div>
        <div>
          <b
            >{{
              Math.round((calculateStars(prog.stars) / items.length) * 100) +
              '%'
            }}
          </b>
          ({{ calculateStars(prog.stars) }})
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from './StarRating';
export default {
  name: 'ReviewSummary',
  components: {
    StarRating,
  },
  props: {
    items: Array,
  },
  data() {
    return {
      progress: [
        {
          stars: 5,
          color: 'green',
        },
        {
          stars: 4,
          color: 'lightGreen',
        },
        {
          stars: 3,
          color: 'yellow',
        },
        {
          stars: 2,
          color: 'orange',
        },
        {
          stars: 1,
          color: 'red',
        },
      ],
    };
  },
  computed: {
    averageScore: function () {
      let sum = 0;
      this.items.forEach((item) => {
        sum += parseInt(item.score);
      });
      return (sum / this.items.length).toFixed(1);
    },
  },
  methods: {
    calculateStars(star) {
      let sum = 0;
      this.items.forEach((item) => {
        if (item.score == star) {
          sum++;
        }
      });
      return sum;
    },
  },
};
</script>

<style scoped>
.summary {
  display: flex;
  align-items: center;
  column-gap: 10px;
}
.rating {
  margin-left: 20px;
  margin-right: 20px;
}
.progressBar {
  flex: 1;
}
.progressNum {
  flex: 1;
}
.progress {
  height: 15px;
  border-radius: 10px 0 0 10px;
}
.progress.empty {
  background: #f3f3f3;
  flex: 1;
  border-radius: 0 10px 10px 0;
}
h1 {
  color: cadetblue;
}
</style>
