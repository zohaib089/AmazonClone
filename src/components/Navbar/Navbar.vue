<template>
  <q-toolbar
    style="height:50px !important; width:100vw !important;"
    class="bg-black text-white"
  >
    <q-img
      style="width:230px !important;
      height:55px !important;
      background-color:white;
      margin-left:-.66rem !important;
      "
      src="../..//assets/logo.png"
    ></q-img>

    <q-icon style="font-size:2.4rem !important; " name="mdi-map-marker" />

    <p style="font-size:10px; margin-top:-1rem;">Send</p>
    <span
      style=" white-space: nowrap; display:block !important;margin-left:-1.5rem; margin-top:1.1rem; font-weight:bold;font-size:.8rem;"
      >Torino 10141</span
    >

    <q-select
      content-class="myselect"
      class="text-info"
      filled
      v-model="model"
      use-input
      input-debounce="0"
      :options="options"
      @filter="filterFn"
      style="background:#f3f3f3; "
    >
      <template v-slot:selected>
        <template>
          All Categories
        </template>
      </template>
    </q-select>

    <q-input
      style="background:#f3f3f3;width:100% !important;"
      v-model="search"
      filled
      type="search"
    >
      <template v-slot:append>
        <q-icon @click="goToSearch" name="search" />
      </template>
    </q-input>

    <q-btn
      color="white"
      size="sm"
      flat
      @mouseover="hello = true"
      label="Hi Zohaib Accounts ans lists"
    >
      <!--   Menu components started here  -->
      <q-menu v-model="hello" @mouseleave="hello = false" fit>
        <q-list style="min-width: 100px">
          <q-item clickable>
            <q-item-section>New tab</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>New incognito tab</q-item-section>
            <q-separator />
            <q-item-section>Recent tabs</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>History</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>Downloads</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>Settings</q-item-section>
          </q-item>
          <q-item clickable>
            <q-item-section>Help &amp; Feedback</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>

    <q-btn color="white" size="sm" flat label="Returns and Orders" />

    <q-btn color="white" size="sm" icon="mdi-cart" flat label="Shopping cart" />

    <!-- <div class="row ">
        <div class="col-md-4">
          <q-select
            filled
            v-model="model"
            use-input
            input-debounce="0"
            label="Simple filter"
            :options="options"
            @filter="filterFn"
            style="width: 250px"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  No results
                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>
        <div class="col-md-8"></div>
      </div> -->
    <!-- <q-separator /> -->
    <!-- <q-spacer/> -->
    <!-- <q-btn flat round dense icon="sim_card" class="q-mr-xs" />
      <q-btn flat round dense icon="gamepad" /> -->
  </q-toolbar>
</template>

<script>
const stringOptions = ["Google", "Facebook", "Twitter", "Apple", "Oracle"];

export default {
  data() {
    return {
      model: null,
      search: "",
      options: stringOptions,
      hello: false
    };
  },

  methods: {
    filterFn(val, update) {
      if (val === "") {
        update(() => {
          this.options = stringOptions;

          // with Quasar v1.7.4+
          // here you have access to "ref" which
          // is the Vue reference of the QSelect
        });
        return;
      }

      update(() => {
        const needle = val.toLowerCase();
        this.options = stringOptions.filter(
          v => v.toLowerCase().indexOf(needle) > -1
        );
      });
    },
    goToSearch() {
      this.$router.push("/search");
    }
  }
};
</script>

<style lang="scss"></style>
