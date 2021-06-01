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
            <div class="cp-item active">
                <span class="icon"><truck-icon size="1.5x" class=""></truck-icon></span>
                <span class="text">Pengiriman</span></div>
            <div class="cp-item">
                <span class="icon"><credit-card-icon size="1.5x" class=""></credit-card-icon></span>
                <span class="text">Pembayaran</span>
            </div>
        </div>
      </div>
    </nav>
    <div class="container my-2">
      <div class="col-lg-6 offset-lg-3">
        <div class="card">
          <div class="checkout-desc-container">
            <div class="card-header d-flex justify-content-between">
              <div>Pilih Alamat Pengiriman</div>
              <div><a href="#" title="" class="btn-link" data-toggle="modal" data-target="#paymentMethod">Ubah Alamat</a></div>
            </div>
            <div class="address-list">
              <ul>
                <li>
                  <a href="#">
                    <div>
                      <h6 class="fw-bold">sarah sahen</h6>
                      <small class="text-secondary">6281234567890<br>
                          graha gading serpong blok 2 nomer 7, Perum Dasana indah kel. bojongnangka kec. kelapa dua<br>
                      Banten, Kab. Tangerang, Kelapa Dua 15810<br>Indonesia</small>
                    </div>
                    <chevron-right-icon size="1.5x" class=""></chevron-right-icon>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div>
                      <h6 class="fw-bold">sarah sahen</h6>
                      <small class="text-secondary">6281234567890<br>
                          graha gading serpong blok 2 nomer 7, Perum Dasana indah kel. bojongnangka kec. kelapa dua<br>
                      Banten, Kab. Tangerang, Kelapa Dua 15810<br>Indonesia</small>
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
    <div class="container my-2">
      <div class="col-lg-6 offset-lg-3">
          <div class="card">
              <div class="checkout-desc-container">
                  <div class="card-header d-flex justify-content-between">
                      <div>Alamat Pengiriman</div>
                      <div style="display: none"><a href="#" title="" class="btn-link" data-toggle="modal" data-target="#paymentMethod">Ubah Alamat</a></div>
                  </div>
                  <div class="card-body">
                      <p class="text-muted">Isi alamat pengiriman Anda dengan benar untuk mempermudah proses pengiriman.</p>
                      <div class="checkoutInfo m-0">
                          <form class="w-100">
                              <div class="row">
                                  <div class="col-12 col-lg-6">
                                      <div class="form-group">
                                          <label class="mb-1">Nama Depan <span class="text-danger">*</span></label>
                                          <input type="text" class="form-control" placeholder="">
                                      </div>
                                  </div>
                                  <div class="col-12 col-lg-6">
                                      <div class="form-group">
                                          <label class="mb-1">Nama Belakang <span class="text-danger">*</span></label>
                                          <input type="text" class="form-control" placeholder="">
                                      </div>
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="col-12 col-lg-12">
                                      <div class="form-group">
                                          <label class="mb-1">Alamat Lengkap <span class="text-danger">*</span></label>
                                          <input type="text" class="form-control mb-1" placeholder="">
                                      </div>
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="col-12 col-lg-6">
                                      <div class="form-group">
                                          <label class="mb-1">Provinsi <span class="text-danger">*</span></label>
                                          <select class="form-control">
                                            <option>Silahkan pilih wilayah atau provinsi</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                          </select>
                                      </div>
                                  </div>
                                  <div class="col-12 col-lg-6">
                                      <div class="form-group">
                                          <label class="mb-1">Kabupaten / Kota <span class="text-danger">*</span></label>
                                          <input type="text" class="form-control" placeholder="">
                                      </div>
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="col-12 col-lg-6">
                                      <div class="form-group">
                                          <label class="mb-1">Kecamatan <span class="text-danger">*</span></label>
                                          <input type="text" class="form-control" placeholder="">
                                      </div>
                                  </div>
                                  <div class="col-12 col-lg-6">
                                      <div class="form-group">
                                          <label class="mb-1">Kode Pos <span class="text-danger">*</span></label>
                                          <input type="number" class="form-control" placeholder="">
                                      </div>
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="col-12 col-lg-12">
                                      <div class="form-group">
                                          <label class="mb-1">Nomor Telepon <span class="text-danger">*</span></label>
                                          <input type="number" class="form-control" placeholder="">
                                      </div>
                                  </div>
                              </div>
                              <div class="row">
                                  <div class="col-12 col-lg-12">
                                      <div class="form-group">
                                          <label class="mb-1">Lokasi Map<span class="text-danger">*</span></label>
                                          <div class="input-group">
                                              <span class="input-group-text border-end-0 bg-transparent"><map-pin-icon size="1.5x" class=""></map-pin-icon></span>
                                              <input type="text" class="form-control border-start-0" placeholder="Cari alamat atau lokasi anda">
                                              <button class="btn btn-primary" type="button">Konfirmasi Lokasi</button>
                                          </div>
                                          <div class="map-embed">
                                              <img src="~/static/img/google-map.jpg" alt="">
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <a href="/payment" title="" class="btn btn-warning btn-lg w-100 btnPayment mt-3"><lock-icon size="1.5x" class=""></lock-icon> LANJUT PEMBAYARAN</a>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ArrowLeftIcon, LockIcon, TruckIcon, CreditCardIcon, ChevronRightIcon, MapPinIcon } from 'vue-feather-icons'

export default {

  name: 'delivery',
  layout: 'details-page',

  components: {
    ArrowLeftIcon,
    LockIcon,
    TruckIcon,
    CreditCardIcon,
    ChevronRightIcon,
    MapPinIcon
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.card-body{
  padding: 20px;

  label {
    padding: 0;
  }

  .map-embed{
    img {
      width: 100%;
    }
  } 
}
</style>