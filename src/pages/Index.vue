<template>
  <div>
    <main-carousel />

    <first-cards-row />
    <second-carousel />
    <third-carousel />
    <second-card-row />
    <watches-carousel />
    <books-carousel />
    <third-card-row />
    <made-in-italy-carousel />
    <electronic-carousel />
    <generic-store-carousel />
    <last-carousel />
  </div>
</template>

<script>
import MainCarousel from "src/components/MainPage/MainCarousel";
import FirstCardsRow from "src/components/MainPage/FirstCardsRow";
import SecondCarousel from "src/components/MainPage/SecondCarousel.vue";
import ThirdCarousel from "src/components/MainPage/ThirdCarousel.vue";
import SecondCardRow from "src/components/MainPage/SecondCardRow.vue";
import WatchesCarousel from "src/components/MainPage/WatchesCarousel.vue";
import BooksCarousel from "src/components/MainPage/BooksCarousel.vue";
import ThirdCardRow from "src/components/MainPage/ThirdCardRow.vue";
import MadeInItalyCarousel from "src/components/MainPage/MadeInItalyCarousel.vue";
import ElectronicCarousel from "src/components/MainPage/ElectronicCarousel.vue";
import GenericStoreCarousel from "src/components/MainPage/GenericStoreCarousel.vue";
import LastCarousel from "src/components/MainPage/LastCarousel.vue";
export default {
  components: {
    MainCarousel,
    FirstCardsRow,
    SecondCarousel,
    ThirdCarousel,
    SecondCardRow,
    WatchesCarousel,
    BooksCarousel,
    ThirdCardRow,
    MadeInItalyCarousel,
    ElectronicCarousel,
    GenericStoreCarousel,
    LastCarousel
  },
  name: "PageIndex"
};
</script>
