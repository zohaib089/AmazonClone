<template>
  <div class="row " style="margin-top:-3rem;">
    <div class="col-md-4 col-sm-4 col-xs-4"></div>
    <div class="col-md-4 col-sm-4 col-xs-4 item-center" style="">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <q-img
            style="
        width:100% !important;"
            src="../../assets/logo.png"
            class="self-center"
          ></q-img>
        </div>
        <div class="col-md-4"></div>
      </div>

      <q-card class="q-py-0" style="margin-top:-2rem;">
        <q-card-section>
          <div class="text-h6">Create account</div>
        </q-card-section>
        <q-card-section>
          <q-input outlined v-model="name" label="Your Name" />
          <q-input outlined v-model="text" class="q-mt-sm" label="Email" />
          <q-input
            outlined
            class="q-mt-sm"
            hint="Passwords must be at least 6 characters. "
            v-model="password1"
            label="Password"
          />
          <q-input
            outlined
            class="q-mt-sm"
            v-model="password2"
            label="Reneter Your Password"
          />
        </q-card-section>
        <q-card-actions align="center">
          <q-btn style="width:200px;" @click="onLogin" color="amber"
            >Create Amazon account</q-btn
          >
          <div class="q-mt-sm q-ml-sm">
            Creating account, you must agree to Amazon's Conditions of
            <span style="cursor:pointer;" class="text-primary">Use </span> and
            <span style="cursor:pointer;" class="text-primary">Privacy</span>
          </div>
        </q-card-actions>
        <div class="q-ml-lg">
          Already have an account?
          <span @click="GoToLogin" style="cursor:pointer;" class="text-primary"
            >Sign-In ></span
          >
        </div>
      </q-card>
      <q-separator />
    </div>
    <div class="col-md-4"></div>
    <q-separator class="q-mt-md" />
    <div class="col-md-12" style="background-color:#F8F8F8; height:100px;">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-4 text-primary" align="center">
              Condition Of Use
            </div>
            <div class="col-md-4 text-primary" align="center">Privacy</div>
            <div class="col-md-4 text-primary" align="center">Help</div>
            <div
              style="margin-left:7rem !important;margin-top:.5rem;"
              class="col-md-12"
            >
              © 1996-2020, Amazon.com, Inc. or its affiliates
            </div>
          </div>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      text: "",
      password1: "",
      password2: "",
      onLogin: ""
    };
  },
  methods: {
    GoToLogin() {
      this.$router.push("/");
    }
  }
};
</script>
