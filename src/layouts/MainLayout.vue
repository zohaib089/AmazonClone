<template>

<div class="container-fluid">
<navbar/>
  <q-layout  >

    <q-header  elevated>
      <q-toolbar style="background-color:#232f3e;">
        <q-btn
          flat
          dense
          
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
          label="All"
        />
        <q-btn
          flat
          dense
          
          label="Customer care"
        />
        
        <q-btn
      color="white"
      
      flat
      dense
      @mouseover="hello = true"
      label="Prime"
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
     <q-btn
          flat
          dense
          
          label="AmazonBasics"
        /> <q-btn
          flat
          dense
          
          label="Amazon.co.uk of zohaib"
        /> <q-btn
          flat
          dense
          
          label="Best Sellers"
        /> <q-btn
          flat
          dense
          
          label="Offers"
        /> <q-btn
          flat
          dense
          
          label="Buy Again"
        /> <q-btn
          flat
          dense
          
          label="Gift Ideas"
        /> <q-btn
          flat
          dense
          
          label="Books"
        /> <q-btn
          flat
          dense
          
          label="Announements"
        /> <q-btn
          flat
          dense
          
          label="Electronics"
        />

        <q-space />
        <q-btn
          flat
          dense
          
          label="Try Amazon Music 3 months for free"
        />

        <div></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
  
    <q-page-container>
      <router-view />
    </q-page-container>
    <Footer/>
    <logofooter/>
  <location-footer/>
  <div style="background-color:black;margin-top:-1rem; height:60px;" class=" navFooterLine navFooterLinkLine navFooterPadItemLine navFooterCopyright">
    <ul class="row">
      <li class="col-md-2 q-mt-md" >
        <a href="/gp/help/customer/display.html?ie=UTF8&amp;nodeId=200545940&amp;ref_=footer_cou" class="nav_a">
      <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">General conditions of use and sale</font></font>
      </a>
      </li>
      <li class="col-md-2 q-mt-md">
        <a href="/gp/help/customer/display.html?ie=UTF8&amp;nodeId=200545460&amp;ref_=footer_privacy" class="nav_a">
        <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Privacy Policy</font></font>
        </a>
        </li>
        <li class="col-md-2 q-mt-md">
          <a href="/gp/help/customer/display.html?ie=UTF8&amp;nodeId=200571750&amp;ref_=footer_legal_area" class="nav_a">
          <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Legal area</font></font>
          </a>
          </li>
          <li class="col-md-2 q-mt-md">
            <a href="/gp/help/customer/display.html?ie=UTF8&amp;nodeId=201890250&amp;ref_=footer_cookies_notice" class="nav_a">
            <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Cookies</font></font>
            </a>
            </li>
            <li class="col-md-2 q-mt-md">
              <a href="/gp/help/customer/display.html?ie=UTF8&amp;nodeId=201909150&amp;ref_=footer_Interest_Based_Ads_Notice" class="nav_a">
              <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Interest-based advertising</font></font>
              </a></li>

              <li class="col-md-2 q-mt-md">
             <a href="/gp/help/customer/display.html?ie=UTF8&amp;nodeId=201909150&amp;ref_=footer_Interest_Based_Ads_Notice" class="nav_a">
              <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">      
                © 2010-2020, Amazon.com, Inc. or its affiliates.</font></font>
             </a>
              </li>
                       
              </ul>

              
                  </div>
  </q-layout>


 
          
</q-page>
</div>
</template>

<script>
import Navbar from 'src/components/Navbar/Navbar.vue'
import Footer from 'src/components/Footer.vue'
import Logofooter from 'src/components/logofooter.vue'
import LocationFooter from 'src/components/LocationFooter.vue'




const linksData = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default {
  components: { Navbar, Footer, Logofooter, LocationFooter },
  name:
    'MainLayout',
  
  data () {
    return {
      leftDrawerOpen: false,
      hello:false,
      essentialLinks: linksData
    }
  }
}
</script>
