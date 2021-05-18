<template>
  <div>

    <!-- navbar top -->
    <div class="navbar-top">
      <div class="container">
        <div class="topnav">
          <div class="tn-left">
            <a href="#" title=""><truck-icon size="1.5x" class=""></truck-icon> Gratis Ongkir min Rp250rb</a>
          </div>
          <div class="tn-right">
            <a href="#" title=""><help-circle-icon size="1.5x" class=""></help-circle-icon> Bantuan</a>
            <a href="#" title=""><credit-card-icon size="1.5x" class=""></credit-card-icon> Konfirmasi Pembayaran</a>
          </div>
        </div>
      </div>
    </div>
    <MainHeader class="sticky-top"></MainHeader>
    <Nuxt />
    <MainFooter></MainFooter>
  </div>
</template>

<script>
  import MainHeader from '../components/Header.vue'
  import MainFooter from '../components/Footer.vue'
  
  import { TruckIcon, HelpCircleIcon, CreditCardIcon } from 'vue-feather-icons'

export default {

  name: 'default',

  components: {
    MainHeader,
    MainFooter,
    TruckIcon,
    HelpCircleIcon,
    CreditCardIcon
  },


  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>

</style>