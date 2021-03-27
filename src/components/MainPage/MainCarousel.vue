<template>
  <div class="">
    <q-carousel
      class=""
      animated
      v-model="slide"
      arrows
      infinite
      autoplay
      style="height:600px"
    >
      <q-carousel-slide :name="1" img-src="~assets/car1.jpg" />
      <q-carousel-slide :name="2" img-src="~assets/car2.jpg" />
      <q-carousel-slide :name="3" img-src="~assets/car3.jpg" />
      <q-carousel-slide :name="4" img-src="~assets/car4.jpg" />
    </q-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 1
    };
  }
};
</script>
