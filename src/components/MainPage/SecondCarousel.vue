<template>
<q-card>
    <q-card-section> <div class="text-h6">Offers by category with Amazon Outlet</div><div class="text-subtitle2 text-primary">find out</div></q-card-section>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="primary"
     
      padding
      arrows
      height="300px"
      class="bg-grey-1 shadow-2 rounded-borders"
    >
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
            
          <q-img class="rounded col-2 full-height" src="~assets/R3P1.jpg" />
            <q-img class="rounded col-2 full-height" src="~assets/R3P2.jpg" />
         <q-img class="rounded col-2 full-height" src="~assets/R3P3.jpg" />
         <q-img class="rounded col-2 full-height" src="~assets/R3P4.jpg" />
         <q-img class="rounded col-2 full-height" src="~assets/R3P5.jpg" />
         <q-img class="rounded col-2 full-height" src="~assets/R3P6.jpg" />
           <q-img class="rounded col-2 full-height" src="~assets/R3P7.jpg" />

        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap">
          <q-img class="rounded col-2 " src="~assets/R3P7.jpg" />
          <q-img class="rounded col-2" src="~assets/R3P8.jpg" />
            <q-img class="rounded col-2 " src="~assets/R3P9.jpg" />
        </div>
      </q-carousel-slide>
      
    </q-carousel>
  </div>
  </q-card>
</template>
<script>
export default {
    data() {
        return {
            slide:1
        }
    },
}
</script>