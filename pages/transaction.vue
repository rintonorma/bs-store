<template>
	<div>
		<section id="transaction-page">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<Breadcrumbs class="mb-3"></Breadcrumbs>
					</div>
					<div class="main-wrapper">
						<SidebarNav class="sidebar"></SidebarNav>
						<div class="main-content">
							<h3 class="mb-3">Transaction</h3>
							<div class="mc-section">
	                <div class="row">
	                    <div class="col-12">
	                        <div class="address-header">
	                            <div class="mc-section-date">
	                                <div class="input-group border rounded">
                                    <span class="input-group-text bg-white border-0"><calendar-icon size="1.5x" class=""></calendar-icon></span>
	                                  <date-range-picker
																	    v-model="dateRange"
																	    :date-format="dateFormat"
																	    :autoApply="true"
																	    :locale-data="{
																		    format: 'dd/mm/yyyy',
																		    separator: ' - '
																	    }"
																	  ></date-range-picker>
	                                </div>
	                                <a href="#" class="btn btn-link" @click="resetDate">Reset</a>
	                            </div>
	                            <div class="input-group border rounded">
	                                <input type="text" class="search-query form-control border-0" placeholder="Cari nama barang, invoice">
                                  <button class="btn btn-light" type="button"><search-icon size="1.5x" class=""></search-icon></button>
	                            </div>
	                        </div>
	                    </div>
	                    <div class="col-12">
	                        <div class="mc-section-filter">
	                            <div class="title-filter">Filter Status</div>
	                            <VCarousel class="slider-filter" v-bind="SFSettings">
	                            	<div><a href="#" class="active">Semua</a></div>
                                <div><a href="#" class="">Menunggu Konfirmasi</a></div>
                                <div><a href="#" class="">Pesanan Diproses</a></div>
                                <div><a href="#" class="">Pesanan Dikirim</a></div>
                                <div><a href="#" class="">Pesanan Selesai</a></div>
                                <div><a href="#" class="">Pesanan Dibatalkan</a></div>
	                            </VCarousel>
	                        </div>
	                    </div>
	                </div>
	                <div class="row">
	                    <div class="col-12">
	                        <div class="text-center py-5">
	                            <img src="@/static/img/icon/ill-receipt.png" width="150px;">
	                            <h5 class="my-2 text-dark">Belum ada transaksi</h5>
	                            <p class="text-secondary">Daftar transaksi Anda masih kosong</p>
	                            <a href="#" class="btn btn-warning btn-lg px-5">Mulai Belanja</a>
	                        </div>
	                    </div>
	                </div>
	                <div class="row">
	                    <div class="col-12">
	                        <div class="card shadow-1 mb-3">
	                            <div class="transaction-list">
	                                <div class="tl-header">
	                                    <div class="tl-date">21 Des 2020</div>
	                                    <div class="tl-label text-success">Selesai</div>
	                                </div>
	                                <div class="tl-subheader">
	                                    <div class="col-12 col-lg-5">
	                                        <div class="tl-sm">No. Invoice</div>
	                                        <div class="tl-p">(INV/20201208/XX/XII/694239979)</div>
	                                    </div>
	                                    <div class="col-12 col-lg-4">
	                                        <div class="tl-sm">Status</div>
	                                        <div class="tl-p fw-bold font-lg">Pesanan Selesai</div>
	                                    </div>
	                                    <div class="col-12 col-lg-3">
	                                        <div class="tl-sm">Total Belanja</div>
	                                        <div class="tl-p fw-bold text-warning font-lg">Rp29.900</div>
	                                    </div>
	                                </div>
	                                <div class="tl-main">
	                                    <div class="product-row">
	                                        <div class="product-item col-12 col-lg-5">
	                                            <a href="#" class="product-item-img">
	                                                <img src="https://puganesia.id/cdn/uploads/120201219211908.jpg" alt="ONE-X transformer iRing bracket stand holder Ring" class="img-fluid">
	                                            </a>
	                                            <a href="#" class="product-item-desc">
	                                                <div class="title ellipsis-two-line">
	                                                    <span class="">ONE-X transformer iRing bracket stand holder Ring</span>
	                                                </div>
	                                                <small class="text-warning">Rp19.900</small>
	                                                <small class="text-secondary">1 barang (1000gr)</small>
	                                            </a>
	                                        </div>
	                                        <div class="product-item col-12 col-lg-4">
	                                            <div class="mb-2">
	                                                <div class="tl-sm">Total Harga Produk</div>
	                                                <div class="tl-p fw-bold text-warning">Rp19.900</div>
	                                            </div>
	                                        </div>
	                                        <div class="col-12 col-lg-3">
	                                            <a href="#" class="btn btn-success ml-auto">Beli lagi</a>
	                                        </div>
	                                    </div>
	                                    <div class="product-row">
	                                        <small class="text-secondary">+2 item lainnya</small>
	                                    </div>
	                                </div>
	                                <div class="tl-footer">
	                                    <ul class="product-item-nav">
	                                        <li><a href="./transaction-details.html" class="btn-link-secondary text-secondary"><eye-icon size="1.5x" class=""></eye-icon> Lihat detail transaksi</a></li>
	                                        <li><a href="#" class="btn-link-secondary text-secondary"><message-circle-icon size="1.5x" class=""></message-circle-icon> Beri ulasan</a></li>
	                                    </ul>
	                                </div>
	                            </div>
	                        </div>
	                        <div class="card shadow-1 mb-3">
	                            <div class="transaction-list">
	                                <div class="tl-header">
	                                    <div class="tl-date">21 Des 2020</div>
	                                    <div class="tl-label text-warning">Menunggu pembayaran</div>
	                                </div>
	                                <div class="tl-subheader">
	                                    <div class="col-12 col-lg-5">
	                                        <div class="tl-sm">No. Invoice</div>
	                                        <div class="tl-p">(INV/20201208/XX/XII/694239979)</div>
	                                    </div>
	                                    <div class="col-12 col-lg-4">
	                                        <div class="tl-sm">Bayar sebelum</div>
	                                        <div class="tl-p fw-bold font-lg">Min, 25 Des 2020 20:58</div>
	                                    </div>
	                                    <div class="col-12 col-lg-3">
	                                        <div class="tl-sm">Total Pembayaran</div>
	                                        <div class="tl-p fw-bold text-warning font-lg">Rp20.000</div>
	                                    </div>
	                                </div>
	                                <div class="tl-main">
	                                    <div class="product-row">
	                                        <div class="col-12 col-lg-5">
	                                            <div class="tl-p mb-2">
	                                                <img src="@/static/img/bank/Bank_Central_Asia.png" alt="Bank BCA" class="img-fluid" width="100px">
	                                                <div class="text-dark">Bank BCA Virtual Account</div>
	                                            </div>
	                                        </div>
	                                        <div class="product-item col-12 col-lg-4">
	                                            <div class="mb-2">
	                                                <div class="tl-sm">No. Virtual Acccount</div>
	                                                <div class="tl-p fw-bold text-dark font-lg">1234 2130950111</div>
	                                            </div>
	                                        </div>
	                                        <div class="col-12 col-lg-3">
	                                            <a href="#" class="btn btn-warning ml-auto">Bayar sekarang</a>
	                                        </div>
	                                    </div>
	                                    <div class="product-row">
	                                        <small class="text-secondary">Dicek dalam 10 menit setelah pembayaran berhasil</small>
	                                    </div>
	                                </div>
	                                <div class="tl-footer">
	                                    <ul class="product-item-nav">
	                                        <li><a href="./transaction-details.html" class="btn-link-secondary text-secondary"><eye-icon size="1.5x" class=""></eye-icon> Lihat detail transaksi</a></li>
	                                    </ul>
	                                </div>
	                            </div>
	                        </div>
	                        <div class="card shadow-1 mb-3">
	                            <div class="transaction-list">
	                                <div class="tl-header">
	                                    <div class="tl-date">21 Des 2020</div>
	                                    <div class="tl-label text-secondary">Pesanan Diproses</div>
	                                </div>
	                                <div class="tl-subheader">
	                                    <div class="col-12 col-lg-5">
	                                        <div class="tl-sm">No. Invoice</div>
	                                        <div class="tl-p">(INV/20201208/XX/XII/694239979)</div>
	                                    </div>
	                                    <div class="col-12 col-lg-4">
	                                        <div class="tl-sm">Pengiriman</div>
	                                        <div class="tl-p fw-bold font-lg">Instan Kurir</div>
	                                    </div>
	                                    <div class="col-12 col-lg-3">
	                                        <div class="tl-sm">Total Belanja</div>
	                                        <div class="tl-p fw-bold text-warning font-lg">Rp29.900</div>
	                                    </div>
	                                </div>
	                                <div class="tl-main">
	                                    <div class="product-row">
	                                        <div class="product-item col-12 col-lg-5">
	                                            <a href="#" class="product-item-img">
	                                                <img src="https://puganesia.id/cdn/uploads/120201219211908.jpg" alt="ONE-X transformer iRing bracket stand holder Ring" class="img-fluid">
	                                            </a>
	                                            <a href="#" class="product-item-desc">
	                                                <div class="title ellipsis-two-line">
	                                                    <span class="">ONE-X transformer iRing bracket stand holder Ring</span>
	                                                </div>
	                                                <small class="text-warning">Rp19.900</small>
	                                                <small class="text-secondary">1 barang (1000gr)</small>
	                                            </a>
	                                        </div>
	                                        <div class="product-item col-12 col-lg-4">
	                                            <div class="mb-2">
	                                                <div class="tl-sm">No. Resi</div>
	                                                <div class="tl-p fw-bold font-lg">JD0099807383</div>
	                                            </div>
	                                        </div>
	                                    </div>
	                                    <div class="product-row">
	                                        <small class="text-secondary">+2 item lainnya</small>
	                                    </div>
	                                </div>
	                                <div class="tl-footer">
	                                    <ul class="product-item-nav">
	                                        <li><a href="./transaction-details.html" class="btn-link-secondary text-secondary"><eye-icon size="1.5x" class=""></eye-icon> Lihat detail transaksi</a></li>
	                                    </ul>
	                                </div>
	                            </div>
	                        </div>
	                        <div class="card shadow-1 mb-3">
	                            <div class="transaction-list">
	                                <div class="tl-header">
	                                    <div class="tl-date">21 Des 2020</div>
	                                    <div class="tl-label text-secondary">Pesanan Dikirim</div>
	                                </div>
	                                <div class="tl-subheader">
	                                    <div class="col-12 col-lg-5">
	                                        <div class="tl-sm">No. Invoice</div>
	                                        <div class="tl-p">(INV/20201208/XX/XII/694239979)</div>
	                                    </div>
	                                    <div class="col-12 col-lg-4">
	                                        <div class="tl-sm">Pengiriman</div>
	                                        <div class="tl-p fw-bold font-lg">Instan Kurir</div>
	                                    </div>
	                                    <div class="col-12 col-lg-3">
	                                        <div class="tl-sm">Total Belanja</div>
	                                        <div class="tl-p fw-bold text-warning font-lg">Rp29.900</div>
	                                    </div>
	                                </div>
	                                <div class="tl-main">
	                                    <div class="product-row">
	                                        <div class="product-item col-12 col-lg-5">
	                                            <a href="#" class="product-item-img">
	                                                <img src="https://puganesia.id/cdn/uploads/120201219211908.jpg" alt="ONE-X transformer iRing bracket stand holder Ring" class="img-fluid">
	                                            </a>
	                                            <a href="#" class="product-item-desc">
	                                                <div class="title ellipsis-two-line">
	                                                    <span class="">ONE-X transformer iRing bracket stand holder Ring</span>
	                                                </div>
	                                                <small class="text-warning">Rp19.900</small>
	                                                <small class="text-secondary">1 barang (1000gr)</small>
	                                            </a>
	                                        </div>
	                                        <div class="product-item col-12 col-lg-4">
	                                            <div class="mb-2">
	                                                <div class="tl-sm">No. Resi</div>
	                                                <div class="tl-p fw-bold font-lg">JD0099807383</div>
	                                            </div>
	                                        </div>
	                                        <div class="col-12 col-lg-3">
	                                            <a href="./tracking.html" class="btn btn-outline-warning ml-auto">Cek resi</a>
	                                        </div>
	                                    </div>
	                                    <div class="product-row">
	                                        <small class="text-secondary">+2 item lainnya</small>
	                                    </div>
	                                </div>
	                                <div class="tl-footer">
	                                    <ul class="product-item-nav">
	                                        <li><a href="./transaction-details.html" class="btn-link-secondary text-secondary"><eye-icon size="1.5x" class=""></eye-icon> Lihat detail transaksi</a></li>
	                                    </ul>
	                                </div>
	                            </div>
	                        </div>
	                        <div class="card shadow-1 mb-3">
	                            <div class="transaction-list">
	                                <div class="tl-header">
	                                    <div class="tl-date">21 Des 2020</div>
	                                    <div class="tl-label text-danger">Gagal</div>
	                                </div>
	                                <div class="tl-subheader">
	                                    <div class="col-12 col-lg-5">
	                                        <div class="tl-sm">No. Invoice</div>
	                                        <div class="tl-p">(INV/20201208/XX/XII/694239979)</div>
	                                    </div>
	                                    <div class="col-12 col-lg-4">
	                                        <div class="tl-sm">Status</div>
	                                        <div class="tl-p fw-bold font-lg">Pesanan Dibatalkan</div>
	                                    </div>
	                                    <div class="col-12 col-lg-3">
	                                        <div class="tl-sm">Total Belanja</div>
	                                        <div class="tl-p fw-bold text-warning font-lg">Rp29.900</div>
	                                    </div>
	                                </div>
	                                <div class="tl-main">
	                                    <div class="product-row">
	                                        <div class="product-item col-12 col-lg-5">
	                                            <a href="#" class="product-item-img">
	                                                <img src="https://puganesia.id/cdn/uploads/120201219211908.jpg" alt="ONE-X transformer iRing bracket stand holder Ring" class="img-fluid">
	                                            </a>
	                                            <a href="#" class="product-item-desc">
	                                                <div class="title ellipsis-two-line">
	                                                    <span class="">ONE-X transformer iRing bracket stand holder Ring</span>
	                                                </div>
	                                                <small class="text-warning">Rp19.900</small>
	                                                <small class="text-secondary">1 barang (1000gr)</small>
	                                            </a>
	                                        </div>
	                                        <div class="product-item col-12 col-lg-4">
	                                            <div class="mb-2">
	                                                <div class="tl-sm">Total Harga Produk</div>
	                                                <div class="tl-p fw-bold text-warning">Rp19.900</div>
	                                            </div>
	                                        </div>
	                                        <div class="col-12 col-lg-3">
	                                            <a href="#" class="btn btn-warning ml-auto">Beli lagi</a>
	                                        </div>
	                                    </div>
	                                    <div class="product-row">
	                                        <small class="text-secondary">+2 item lainnya</small>
	                                    </div>
	                                </div>
	                                <div class="tl-footer">
	                                    <ul class="product-item-nav">
	                                        <li><a href="./transaction-details.html" class="btn-link-secondary text-secondary"><eye-icon size="1.5x" class=""></eye-icon> Lihat detail transaksi</a></li>
	                                    </ul>
	                                </div>
	                            </div>
	                        </div>
	                        <nav>
	                            <ul class="pagination">
	                                <li class="page-item">
	                                    <a class="page-link" href="#" aria-label="Previous">
	                                        <span aria-hidden="true">&laquo;</span>
	                                        <span class="sr-only">Previous</span>
	                                    </a>
	                                </li>
	                                <li class="page-item"><a class="page-link" href="#">1</a></li>
	                                <li class="page-item"><a class="page-link" href="#">2</a></li>
	                                <li class="page-item"><a class="page-link" href="#">3</a></li>
	                                <li class="page-item">
	                                    <a class="page-link" href="#" aria-label="Next">
	                                        <span aria-hidden="true">&raquo;</span>
	                                        <span class="sr-only">Next</span>
	                                    </a>
	                                </li>
	                            </ul>
	                        </nav>
	                    </div>
	                </div>
	            </div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<MobileNav></MobileNav>
	</div>
</template>

<script>
import { CalendarIcon, SearchIcon, EyeIcon, MessageCircleIcon } from 'vue-feather-icons'
// import DatePicker from 'vue-time-date-range-picker/dist/vdprDatePicker'
// import { CalendarDialog } from 'vue-time-date-range-picker/dist/vdprDatePicker'
import DateRangePicker from 'vue2-daterange-picker'
import VCarousel from 'vue-slick-carousel'

export default {

  name: 'transaction',

  components: {
    CalendarIcon,
    SearchIcon,
    EyeIcon,
    MessageCircleIcon,
    VCarousel,
    // DatePicker,
    // CalendarDIalog
    DateRangePicker
  },

  data () {
  	let startDate = new Date();
    let endDate = new Date();
    endDate.setDate(endDate.getDate() + 6)

		return {
			// 'date-picker' : vdprDatePicker.default,
			// 'calendar-dialog' : vdprDatePicker.CalendarDialog
			dateRange: {
        startDate,
        endDate,
      },

			SFSettings: {
			  "slidesToShow": 4,
			  "slidesToScroll": 1,
			  "variableWidth": true,
			  "infinite": false,
			  "responsive": [
					{
					  "breakpoint": 1024,
					  "settings": {
							"slidesToShow": 4,
							"slidesToScroll": 1,
							"infinite": false,
					  }
					},
					{
					  "breakpoint": 600,
					  "settings": {
							"slidesToShow": 2,
							"slidesToScroll": 1,
							"initialSlide": 1
					  }
					},
					{
					  "breakpoint": 480,
					  "settings": {
						"slidesToShow": 2,
						"slidesToScroll": 1,
					  }
					}
			  ]
			},
		}
  },

  filters: {
    dateCell (value) {
      let dt = new Date(value)

      return dt.getDate()
    },
    date (val) {
      return val ? val.toLocaleString() : ''
    }
  },
  
  methods: {
    dateFormat (classes, date) {
      if (!classes.disabled) {
        classes.disabled = date.getTime() < new Date()
      }
      return classes
    },
    resetDate () {
    	let startDate = new Date();
	    let endDate = new Date();
	    endDate.setDate(endDate.getDate() + 6)
    	this.dateRange= {
        startDate,
        endDate,
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.title-filter{
    white-space: nowrap;
    width: 100px;
    font-weight: bold;
    margin-bottom: 15px;
}

.slider-filter{
    padding: 0 15px;
    margin: 0px;
    width: 100%;
    margin-bottom: 15px;

    a {
	    display: block;
	    font-size: 14px;
	    margin-right: 10px;
	    background: #fff;
	    color: #6c757d;
	    border: 1px solid #ced4da;
	    padding: 7px 10px;
	    border-radius: 20px;
		}
		a.active {
	    color: #069699;
	    background-color: transparent;
	    background-image: none;
	    border-color: #069699;
		}
}
.reportrange-text{
	border: none;
}
@media (max-width: 767px){
	.slider-filter{
		padding: 0;
	}
}
</style>