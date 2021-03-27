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
            src="~assets/logo.png"
            class="self-center"
          ></q-img>
        </div>
        <div class="col-md-4"></div>
      </div>

      <q-card class="q-py-0" style="margin-top:-1rem;">
        <q-card-section>
          <div class="text-h6">Sign-In</div>
        </q-card-section>
        <q-card-section>
          <q-input
            outlined
            v-model="text"
            label="Email or mobile phone number"
          />
          <q-input
            outlined
            class="q-mt-sm"
            v-model="password"
            label="Password"
          />
        </q-card-section>
        <q-card-actions align="center">
          <q-btn style="width:200px;" @click="onLogin" color="amber"
            >Sign In</q-btn
          >
          <div class="q-mt-sm">
            By continuing, you agree to Amazon's Conditions of
            <span style="cursor:pointer;" class="text-primary">Use </span> and
            <span style="cursor:pointer;" class="text-primary">Privacy</span>
            Notice.
            <q-expansion-item
              switch-toggle-side
              expand-separator
              label="Need help?"
              class="text-primary"
            >
              <q-card>
                <q-card-section>
                  <q-list bordered separator>
                    <q-item clickable v-ripple>
                      <q-item-section>Forgot Your Password</q-item-section>
                    </q-item>
                    <q-item clickable v-ripple>
                      <q-item-section
                        >Others Issues With Sign In</q-item-section
                      >
                    </q-item>
                  </q-list>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </div>
        </q-card-actions>
      </q-card>
      <q-separator />
      <div
        class="text-center q-mt-md"
        style=" border-bottom: 1px dotted #000; 
   line-height: 0.1em;
   margin: 10px 0 12px;
   margin-top:1rem; "
      >
        <span
          style="background:#fff; 
    padding:0 10px; "
        >
          New to Amazon?</span
        >
      </div>
      <q-btn
        @click="SignUp"
        style="width:100%"
        class="q-mt-lg text-black"
        color="grey-1"
        >Create New Account</q-btn
      >
    </div>
    <div class="col-md-4"></div>
    <q-separator class="q-mt-md" />
    <div class="col-md-12" style="background-color:#F8F8F8; height:191px;">
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
     password:"",
     text:""
   }
 },
  methods: {
    onLogin() {
      this.$router.push("/main");
    },
    SignUp() {
      this.$router.push("/register");
    }
  }
};
</script>
