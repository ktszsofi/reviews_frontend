<template>
  <div>
    <div
      class="background"
      :style="{
        'background-image': 'url(' + image + ')',
      }"
    ></div>
    <div class="storeInfo">
      <div class="title">it's a CATch Store</div>
      <div class="subTitle">Your cat will thank you for it</div>
    </div>
    <b-row align-v="stretch" class="m-0">
      <b-col
        class="infoContainer"
        cols="6"
        sm="3"
        v-for="info in infoList"
        :key="info.title"
      >
        <InfoBox
          :icon="info.icon"
          :title="info.title"
          :subTitle="info.subTitle"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import InfoBox from './InfoBox';
export default {
  components: {
    InfoBox,
  },
  data() {
    return {
      image: require('@/assets/background.jpg'),
      infoList: [
        {
          icon: 'cup-straw',
          title: 'Food',
          subTitle:
            'Junior, adult, or special needs? You will find their favourite food here.',
        },
        {
          icon: 'gift',
          title: 'Entertainment',
          subTitle:
            'Hunter, crazy or lazy? We have toys for every personality.',
        },
        {
          icon: 'heart',
          title: 'Care',
          subTitle:
            'Fur, nails or teeth? We will help you to keep your cat clean and pretty.',
        },
        {
          icon: 'people',
          title: 'Contact',
          subTitle: 'Email: itsacatch@store.com Phone: +00 123 4567',
        },
      ],
    };
  },
};
</script>

<style scoped>
.background {
  height: 200px;
  background-size: cover;
  opacity: 0.4;
  background-position: center 30%;
}
.storeInfo {
  position: absolute;
  top: 70px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
}
.title {
  font-size: 3rem;
  font-style: italic;
  font-weight: 600;
  letter-spacing: -2px;
}
.subTitle {
  font-size: 2rem;
  font-style: italic;
  font-weight: 600;
  letter-spacing: -2px;
}
.infoContainer {
  padding: 0px;
}
</style>
