<template>
  <div>
    <section id="backpage">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6 offset-lg-3 d-flex align-items-center justify-content-between">
            <div class="d-flex">
              <a href="/cart" title=""><arrow-left-icon class="text-white me-3"></arrow-left-icon></a>
              <h5 class="text-white m-0">Checkout</h5>
            </div>
            <div class="safety-warning">
              <lock-icon size="1x" class=""></lock-icon> Transaksi Aman
            </div>
          </div>
        </div>
      </div>
    </section>
    <nav class="checkout-progress">
      <div class="container">
        <div class="col-12 col-lg-6 offset-lg-3 d-flex align-items-center justify-content-round">
            <div class="cp-item">
                <span class="icon"><truck-icon size="1.5x" class=""></truck-icon></span>
                <span class="text">Pengiriman</span></div>
            <div class="cp-item active">
                <span class="icon"><credit-card-icon size="1.5x" class=""></credit-card-icon></span>
                <span class="text">Pembayaran</span>
            </div>
        </div>
      </div>
    </nav>
    <div class="container my-2">
        <div class="row">
            <div class="col-lg-6 offset-lg-3">
                <div class="card">
                    <div class="checkout-desc-container">
                        <div class="card-header">
                            Ringkasan Pembayaran
                        </div>
                    </div>
                    <div class="checkout-cta-container">
                        <div class="checkout-price">
                            <div class="col-xs-7">Total Tagihan</div>
                            <div class="col-xs-5">Rp35.000.000</div>
                        </div>
                        <div class="checkout-price">
                            <div class="col-xs-7">Ongkos Kirim</div>
                            <div class="col-xs-5">Rp50.000</div>
                        </div>
                        <hr>
                        <div class="checkout-price">
                            <div class="col-xs-7"><p class="m-0" style="font-weight: 500;">Total Pembayaran</p></div>
                            <div class="col-xs-5"><h5 class="text-warning">Rp35.050.000</h5></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container my-2">
        <div class="row">
            <div class="col-lg-6 offset-lg-3">
                <div class="card">
                    <div class="checkout-desc-container">
                        <div class="card-header d-flex justify-content-between">
                            <div><shield-icon size="1.5x" class=""></shield-icon> Pilih Metode Pembayaran</div>
                        </div>
                        <div class="card-body">
                            <label>Debit Instan</label>
                            <ul class="list-unstyled">
                                <li class="listIcon">
                                    <a href="./payment.html" title="" class="li-title inactive">
                                        <div class="w-100 d-flex align-items-center">
                                            <div class="li-img">
                                                <img src="https://ecs7.tokopedia.net/img/toppay/sprites/bridirectdebit.png" alt="">
                                            </div>
                                            <div class="li-text">
                                                <p class="m-0">Direct Debit BRI</p>
                                                <small class="text-muted ">Jaringan sedang offline</small>
                                            </div>
                                        </div>
                                        <chevron-right-icon size="1.5x" class=""></chevron-right-icon>
                                    </a>
                                </li>
                                <li class="listIcon">
                                    <a href="./payment.html" title="" class="li-title">
                                        <div class="w-100 d-flex align-items-center">
                                            <div class="li-img">
                                                <img src="https://ecs7.tokopedia.net/img/toppay/sprites/bca-oneklik.png" alt="">
                                            </div>
                                            <div class="li-text">
                                                <p class="m-0">BCA OneKlik</p>
                                            </div>
                                        </div>
                                        <chevron-right-icon size="1.5x" class=""></chevron-right-icon>
                                    </a>
                                </li>
                                <li class="listIcon">
                                    <a href="./payment.html" title="" class="li-title">
                                        <div class="w-100 d-flex align-items-center">
                                            <div class="li-img">
                                                <img src="https://ecs7.tokopedia.net/img/toppay/sprites/mandiri.png" alt="">
                                            </div>
                                            <div class="li-text">
                                                <p class="m-0">Direct Debit Mandiri</p>
                                            </div>
                                        </div>
                                        <chevron-right-icon size="1.5x" class=""></chevron-right-icon>
                                    </a>
                                </li>
                            </ul>
                            <label>Kartu Kredit</label>
                            <ul class="list-unstyled">
                                <li class="listIcon">
                                    <a href="./payment.html" title="" class="li-title">
                                        <div class="w-100 d-flex align-items-center">
                                            <div class="li-img">
                                                <credit-card-icon size="1.5x" class=""></credit-card-icon>
                                            </div>
                                            <div class="li-text">
                                                <p class="m-0">Kartu Kredit / Debit</p>
                                            </div>
                                        </div>
                                        <chevron-right-icon size="1.5x" class=""></chevron-right-icon>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { ArrowLeftIcon, LockIcon, TruckIcon, CreditCardIcon, ChevronRightIcon, ShieldIcon } from 'vue-feather-icons'

export default {

  name: 'payment',
  layout: 'details-page',

  components: {
    ArrowLeftIcon,
    LockIcon,
    TruckIcon,
    CreditCardIcon,
    ChevronRightIcon,
    ShieldIcon
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>















