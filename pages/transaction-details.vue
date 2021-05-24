<template>
	<div>
		<div>
			<section id="backpage">
				<div class="container">
					<div class="row">
						<div class="col-12 col-lg-6 offset-lg-3">
							<div class="d-flex">
                <a href="/transaction" title=""><arrow-left-icon class="text-white me-3"></arrow-left-icon></a>
                <h5 class="text-white m-0">Detail Transaksi</h5>
              </div>
						</div>
					</div>
				</div>
			</section>
			<section id="detailspage">
				<div class="container">
					<div class="row">
						<div class="col-12 col-lg-6 offset-lg-3">
							<div class="row">
		              <div class="col-12 col-lg-8">
		                  <div class="mb-3">
		                      <div class="tl-sm">No. Invoice</div>
		                      <div class="tl-p">(INV/20201208/XX/XII/694239979)</div>
		                  </div>
		                  <div class="mb-3">
		                      <div class="tl-sm">Status</div>
		                      <div class="tl-p fw-bold text-success">Pesanan Selesai</div>
		                  </div>
		                  <div class="mb-3">
		                      <div class="tl-sm">Tanggal Pembelian</div>
		                      <div class="tl-p">21 Des 2020, 10:31 WIB</div>
		                  </div>
		              </div>
		              <div class="col-12 col-lg-4">
		                  <a href="#" class="btn btn-warning ms-auto mb-1">Beli lagi</a>
		                  <div class="ms-auto"><small class="text-secondary">Untuk bantuan silahkan <a href="#" class="btn-link">klik disini </a></small></div>
		              </div>
		          </div>
		          <hr>
		          <div class="row">
		              <div class="product-item col-12 col-lg-12">
		                  <a href="#" class="product-item-img">
		                      <img src="https://puganesia.id/cdn/uploads/120201219211908.jpg" alt="ONE-X transformer iRing bracket stand holder Ring" class="img-fluid">
		                  </a>
		                  <a href="#" class="product-item-desc">
		                      <div class="title ellipsis-two-line">
		                          <span class="text-dark">ONE-X transformer iRing bracket stand holder Ring</span>
		                      </div>
		                      <small class="text-warning">Rp19.900</small>
		                      <small class="text-secondary">1 barang (1000gr)</small>
		                  </a>
		              </div>
		              <div class="product-item col-12 col-lg-8">
		                  <div class="mb-2">
		                      <div class="tl-sm">Total Harga Produk</div>
		                      <div class="tl-p fw-bold text-warning">Rp19.900</div>
		                  </div>
		              </div>
		              <div class="col-12 col-lg-4">
		                  <a href="#" class="btn btn-warning ms-auto">Beli lagi</a>
		              </div>
		          </div>
		          <hr>
		          <div class="row">
		              <div class="product-item col-12 col-lg-12">
		                  <a href="#" class="product-item-img">
		                      <img src="https://puganesia.id/cdn/uploads/120201220112749.jpg" alt="Penjepit Kabel Organizer 4pcs" class="img-fluid">
		                  </a>
		                  <a href="#" class="product-item-desc">
		                      <div class="title ellipsis-two-line">
		                          <span class="text-dark">Penjepit Kabel Organizer 4pcs</span>
		                      </div>
		                      <small class="text-warning">Rp10.000</small>
		                      <small class="text-secondary">1 barang (1000gr)</small>
		                  </a>
		              </div>
		              <div class="product-item col-12 col-lg-8">
		                  <div class="mb-2">
		                      <div class="tl-sm">Total Harga Produk</div>
		                      <div class="tl-p fw-bold text-warning">Rp10.000</div>
		                  </div>
		              </div>
		              <div class="col-12 col-lg-4">
		                  <a href="#" class="btn btn-warning ms-auto">Beli lagi</a>
		              </div>
		          </div>
		          <hr>
		          <div class="">
		              <div class="fw-bold mb-3">Pengiriman</div>
		              <div class="fw-bold">Gojek - Instan Kurir</div>
		              <p>No. Resi: GK-11-357710115</p>
		              <small>Dikirim kepada Sara Sahen<br>
		              graha gading serpong blok 2 nomer 7, Perum Dasana indah kel. bojongnangka kec. kelapa dua<br>
		              Kelapa Dua Kab. Tangerang, 15810<br>
		              Banten<br>
		              Telp: 6282244449019</small>
		          </div>
		          <hr>
		          <div class="">
		              <div class="fw-bold mb-3">Pembayaran</div>
		              <div class="text-secondary">
		                  <div class="row">
		                      <div class="col-6"><small>Total Harga (1 Barang)</small></div>
		                      <div class="col-6 text-end"><small>Rp 29.900</small></div>
		                  </div>
		                  <div class="row">
		                      <div class="col-6"><small>Total Ongkos Kirim (2000 Gr)</small></div>
		                      <div class="col-6 text-end"><small>Rp 0</small></div>
		                  </div>
		                  <div class="row">
		                      <div class="col-6"><small>Total Bayar</small></div>
		                      <div class="col-6 text-end"><small>Rp 29.900</small></div>
		                  </div>
		                  <div class="row">
		                      <div class="col-6"><small>Metode Pembayaran</small></div>
		                      <div class="col-6 text-end"><small>BCA Virtual Account</small></div>
		                  </div>
		              </div>
		          </div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import { ArrowLeftIcon } from 'vue-feather-icons'

export default {

  name: 'transaction-details',
  layout: 'details-page',

  components: {
    ArrowLeftIcon
  },

  data () {
		return {

		}
  }
}
</script>

<style lang="scss" scoped>
#backpage{
	background: #007f82;
	color: #fff;
  padding: 15px 0;
  position: --webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1;

  svg{
    width: 28px;
    height: 28px;
  }
}
</style>