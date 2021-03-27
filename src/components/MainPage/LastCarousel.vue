<template>
  <main>
    <div class="header">
      <h5 class="text-bold">Buy in other sections of the shop</h5>
    </div>

    <vue-horizontal responsive scroll class="horizontal">
      <div class="item" :key="1">
        <div class="card">
          <div class="content">
            <div>
              <img src="../../assets/R12P1.jpg" alt="Nothing there" />
            </div>
            <q-separator></q-separator>
            <p class="text-primary">Price: 32.24 $</p>
            <q-btn>Find more</q-btn>
          </div>
        </div>
      </div>
      <div class="item" :key="1">
        <div class="card">
          <div class="content">
            <div>
              <img src="../../assets/R12P2.jpg" alt="Nothing there" />
            </div>
            <q-separator></q-separator>
            <p class="text-primary">Price: 22.24 $</p>
            <q-btn>Find more</q-btn>
          </div>
        </div>
      </div>
      <div class="item" :key="1">
        <div class="card">
          <div class="content">
            <div>
              <img src="../../assets/R12P3.jpg" alt="Nothing there" />
            </div>
            <q-separator></q-separator>
            <p class="text-primary">Price: 22.67 $</p>
            <q-btn>Find more</q-btn>
          </div>
        </div>
      </div>
      <div class="item" :key="1">
        <div class="card">
          <div class="content">
            <div>
              <img src="../../assets/R12P4.jpg" alt="Nothing there" />
            </div>
            <q-separator></q-separator>
            <p class="text-primary">Price: 54 $</p>
            <q-btn>Find more</q-btn>
          </div>
        </div>
      </div>
      <div class="item" :key="1">
        <div class="card">
          <div class="content">
            <div>
              <img src="../../assets/R12P5.jpg" alt="Nothing there" />
            </div>
            <q-separator></q-separator>
            <p class="text-primary">Price: 44.87 $</p>
            <q-btn>Find more</q-btn>
          </div>
        </div>
      </div>
      <div class="item" :key="1">
        <div class="card">
          <div class="content">
            <div>
              <img src="../../assets/R12P6.jpg" alt="Nothing there" />
            </div>
            <q-separator></q-separator>
            <p class="text-primary">Price: 132.42 $</p>
            <q-btn>Find more</q-btn>
          </div>
        </div>
      </div>
      <div class="item" :key="1">
        <div class="card">
          <div class="content">
            <div>
              <img src="../../assets/R12P7.jpg" alt="Nothing there" />
            </div>
            <q-separator></q-separator>
            <p class="text-primary">Price: 51.42 $</p>
            <q-btn>Find more</q-btn>
          </div>
        </div>
      </div>
      <div class="item" :key="1">
        <div class="card">
          <div class="content">
            <div>
              <img src="../../assets/R12P8.jpg" alt="Nothing there" />
            </div>
            <q-separator></q-separator>
            <p class="text-primary">Price: 22.24 $</p>
            <q-btn>Find more</q-btn>
          </div>
        </div>
      </div>
      <div class="item" :key="1">
        <div class="card">
          <div class="content">
            <div>
              <img src="../../assets/R12P9.jpg" alt="Nothing there" />
            </div>
            <q-separator></q-separator>
            <p class="text-primary">Price: 22.24 $</p>
            <q-btn>Find more</q-btn>
          </div>
        </div>
      </div>
      <div class="item" :key="1">
        <div class="card">
          <div class="content">
            <div>
              <img src="../../assets/R12P10.jpg" alt="Nothing there" />
            </div>
            <q-separator></q-separator>
            <p class="text-primary">Price: 22.24 $</p>
            <q-btn>Find more</q-btn>
          </div>
        </div>
      </div>
      <div class="item" :key="1">
        <div class="card">
          <div class="content">
            <div>
              <img src="../../assets/R12P12.jpg" alt="Nothing there" />
            </div>
            <q-separator></q-separator>
            <p class="text-primary">Price: 22.24 $</p>
            <q-btn>Find more</q-btn>
          </div>
        </div>
      </div>
      <div class="item" :key="1">
        <div class="card">
          <div class="content">
            <div>
              <img src="../../assets/R12P13.jpg" alt="Nothing there" />
            </div>
            <q-separator></q-separator>
            <p class="text-primary">Price: 22.24 $</p>
            <q-btn>Find more</q-btn>
          </div>
        </div>
      </div>
      <div class="item" :key="1">
        <div class="card">
          <div class="content">
            <div>
              <img src="../../assets/R12P11.jpg" alt="Nothing there" />
            </div>
            <q-separator></q-separator>
            <p class="text-primary">Price: 22.24 $</p>
            <q-btn>Find more</q-btn>
          </div>
        </div>
      </div>
    </vue-horizontal>
  </main>
</template>

<script>
// For convenience sake, I import a collection of images from unsplash.
// import {singapore} from '../../../../../assets/img'
// const img1 = require('../../assets/R12P1.jpg')
// var img2 = new Image()
// img2.src = this.img1

import VueHorizontal from "vue-horizontal";
export default {
  components: {
    VueHorizontal
  },
  data() {
    return {
      items: [
        // {
        //     id:1,
        //     img:this.img1
        // }
      ]
    };
  },
  mounted() {
    console.log("this.items", this.items);
  }
};
</script>

<!-- Content Design -->
<style scoped>
.card {
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.image {
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  padding-top: 50%;
}

.content {
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  color: #333333;
}

.brand .icon {
  flex-shrink: 0;
  height: 20px;
  width: 20px;
  fill: currentColor;
}

.brand .name {
  margin-left: 4px;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.5;
}

.title {
  font-size: 14px;
  font-weight: 700;
  line-height: 1.6;
  margin-top: 8px;
  margin-bottom: 8px;
}

.date {
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5;
}
</style>

<!-- Parent CSS (Container) -->
<style scoped>
.header {
  margin-bottom: 16px;
}

main {
  margin-top: -4.2rem;
  padding: 24px;
}

@media (min-width: 768px) {
  main {
    padding: 48px;
  }
}
</style>

<!-- Responsive Breakpoints -->
<style scoped>
.horizontal {
  --count: 1;
  --gap: 16px;
  --margin: 24px;
}

@media (min-width: 640px) {
  .horizontal {
    --count: 2;
  }
}

@media (min-width: 768px) {
  .horizontal {
    --count: 3;
    --margin: 0;
  }
}

@media (min-width: 1024px) {
  .horizontal {
    --count: 4;
  }
}

@media (min-width: 1280px) {
  .horizontal {
    --gap: 24px;
    --count: 6;
  }
}
</style>

<!--
## Responsive Logic
The margin removes the padding from the parent container and add it into vue-horizontal.
If the gap is less than margin, this causes overflow to show and peeks into the next content for better UX.
You can replace this section entirely for basic responsive CSS logic if you don't want this "peeking" experience
for the mobile web.
Note that this responsive logic is hyper sensitive to your design choices, it's not a one size fit all solution.
var() has only 95% cross browser compatibility, you should convert it to fixed values.

There are 2 set of logic:
0-768 for peeking optimized for touch scrolling.
>768 for navigation via buttons for desktop/laptop users.
-->
<style scoped>
@media (max-width: 767.98px) {
  .item {
    width: calc((100% - (var(--margin) * 2) + var(--gap)) / var(--count));
    padding: 0 calc(var(--gap) / 2);
  }

  .item:first-child {
    width: calc(
      (100% - (var(--margin) * 2) + var(--gap)) / var(--count) + var(--margin) -
        (var(--gap) / 2)
    );
    padding-left: var(--margin);
  }

  .item:last-child {
    width: calc(
      (100% - (var(--margin) * 2) + var(--gap)) / var(--count) + var(--margin) -
        (var(--gap) / 2)
    );
    padding-right: var(--margin);
  }

  .item:only-child {
    width: calc(
      (100% - (var(--margin) * 2) + var(--gap)) / var(--count) + var(--margin) *
        2 - var(--gap)
    );
  }

  .horizontal {
    margin: 0 calc(var(--margin) * -1);
  }

  .horizontal >>> .v-hl-container {
    scroll-padding: 0 calc(var(--margin) - (var(--gap) / 2));
  }

  .horizontal >>> .v-hl-btn {
    display: none;
  }
}

@media (min-width: 768px) {
  .item {
    width: calc((100% - ((var(--count) - 1) * var(--gap))) / var(--count));
    margin-right: var(--gap);
  }
}
</style>
