<template>
	<div>
		<section id="address-page">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<Breadcrumbs class="mb-3"></Breadcrumbs>
					</div>
					<div class="main-wrapper">
						<SidebarNav class="sidebar"></SidebarNav>
						<div class="main-content">
							<h3 class="mb-3">Address</h3>
							<div class="mc-section">
                  <div class="row">
                      <div class="col-12">
                          <div class="address-header">
                              <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#modalDefault" @click="showAddAddress = true">+ Tambah Alamat Baru</button>
                              <div class="input-group border">
                                  <input type="text" class="search-query form-control border-0" placeholder="Cari alamat atau nama penerima">
                                  <button class="btn btn-light" type="button"><search-icon size="1.5x" class=""></search-icon></button>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="table-responsive">
                          <table class="table table-hover">
                              <thead>
                                  <tr>
                                      <th class="border-0"></th>
                                      <th class="border-0">Penerima</th>
                                      <th class="border-0" style="width: 275px;">Alamat Pengiriman</th>
                                      <th class="border-0">Daerah pengiriman</th>
                                      <th class="border-0" style="width: 100px;">Pin Point</th>
                                      <th class="border-0" style="width: 100px;"></th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>
                                          <div>
                                              <input type="radio" id="default-68027118" name="radio-address" class="set-default-address-button" checked title="Jadikan Alamat Utama" data-toggle="modal" data-target="#modalDefault" @click="showPrimaryAddress=true">
                                              <label id="default-68027118" class="log-radio-label" for="default-68027118">
                                                  <span data-hover="tooltip" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Jadikan Alamat Utama"></span>
                                              </label>
                                          </div>
                                      </td>
                                      <td>
                                          <div>Azmi Aziz</div>
                                          <div>6281234567890</div>
                                      </td>
                                      <td>
                                          <p>graha gading serpong blok 2 nomer 7, Perum Dasana indah kel. bojongnangka kec. kelapa dua</p>
                                      </td>
                                      <td>
                                          <p>Banten, Kab. Tangerang, Kelapa Dua 15810<br>Indonesia</p>
                                      </td>
                                      <td class="pin-location">
                                          <a href="#" class=" btn-lg btn-link" title="Anda telah menandai lokasi pada peta"><map-pin-icon size="1.5x" class=""></map-pin-icon></a>
                                      </td>
                                      <td class="action-button">
                                          <a href="#" id="edit-68027118" class="btn btn-sm btn-outline-secondary"><edit-icon size="1.5x" class=""></edit-icon></a>
                                          <a href="#" id="delete-68027118" class="btn btn-sm btn-outline-secondary"><trash-2-icon size="1.5x" class=""></trash-2-icon></a>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <div>
                                              <input type="radio" id="default-68027118" name="radio-address" class="set-default-address-button" title="Jadikan Alamat Utama" data-toggle="modal" data-target="#modalDefault" @click="showPrimaryAddress=true">
                                              <label id="default-68027118" class="log-radio-label" for="default-68027118">
                                                  <span data-hover="tooltip" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Jadikan Alamat Utama"></span>
                                              </label>
                                          </div>
                                      </td>
                                      <td>
                                          <div>Azmi Aziz</div>
                                          <div>6281234567890</div>
                                      </td>
                                      <td>
                                          <p>graha gading serpong blok 2 nomer 7, Perum Dasana indah kel. bojongnangka kec. kelapa dua</p>
                                      </td>
                                      <td>
                                          <p>Banten, Kab. Tangerang, Kelapa Dua 15810<br>Indonesia</p>
                                      </td>
                                      <td class="pin-location">
                                          <a href="#" class=" btn-lg btn-link" title="Anda telah menandai lokasi pada peta"><map-pin-icon size="1.5x" class=""></map-pin-icon></a>
                                      </td>
                                      <td class="action-button">
                                          <a href="#" id="edit-68027118" class="btn btn-sm btn-outline-secondary"><edit-icon size="1.5x" class=""></edit-icon></a>
                                          <a href="#" id="delete-68027118" class="btn btn-sm btn-outline-secondary"><trash-2-icon size="1.5x" class=""></trash-2-icon></a>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td>
                                          <div class="log-radio-small log-radio-dimension">
                                              <input type="radio" id="default-68027118" name="radio-address" class="set-default-address-button" title="Jadikan Alamat Utama" data-toggle="modal" data-target="#modalDefault" @click="showPrimaryAddress=true">
                                              <label id="default-68027118" class="log-radio-label" for="default-68027118">
                                                  <span data-hover="tooltip" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Jadikan Alamat Utama"></span>
                                              </label>
                                          </div>
                                      </td>
                                      <td>
                                          <div>Azmi Aziz</div>
                                          <div>6281234567890</div>
                                      </td>
                                      <td>
                                          <p>graha gading serpong blok 2 nomer 7, Perum Dasana indah kel. bojongnangka kec. kelapa dua</p>
                                      </td>
                                      <td>
                                          <p>Banten, Kab. Tangerang, Kelapa Dua 15810<br>Indonesia</p>
                                      </td>
                                      <td class="pin-location">
                                          <a href="#" class=" btn-lg btn-link" title="Anda telah menandai lokasi pada peta"><map-pin-icon size="1.5x" class=""></map-pin-icon></a>
                                      </td>
                                      <td class="action-button">
                                          <a href="#" id="edit-68027118" class="btn btn-sm btn-outline-secondary"><edit-icon size="1.5x" class=""></edit-icon></a>
                                          <a href="#" id="delete-68027118" class="btn btn-sm btn-outline-secondary"><trash-2-icon size="1.5x" class=""></trash-2-icon></a>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<MobileNav></MobileNav>

		<!-- Modal Add Address-->
		<modal-default v-if="showAddAddress" @close="showAddAddress = false">
	    <template slot="modal-title">Tambah Alamat </template>
	    <template slot="modal-content">
	    	<p class="text-muted">Isi alamat pengiriman Anda dengan benar untuk mempermudah proses pengiriman.</p>
        <div class="checkoutInfo m-0">
            <form class="w-100">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <div class="form-group">
                            <label class="mb-1">Nama Depan Pengirim<span class="text-danger">*</span></label>
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
                                <span class="input-group-text bg-transparent border-end-0 text-secondary"><map-pin-icon size="1.5x" class=""></map-pin-icon></span>
                                <input type="text" class="form-control border-start-0" placeholder="Cari alamat atau lokasi anda">
                                <button class="btn btn-success" type="button">Konfirmasi Lokasi</button>
                            </div>
                            <div class="map-embed">
                                <img src="@/static/img/google-map.jpg" alt="" class="img-fluid">
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
	    </template>
	    <template slot="modal-cta"><button class="btn btn-warning">Tambah Alamat</button></template>
		</modal-default>

		<!-- Modal Primary Address-->
		<modal-default :name="PrimaryAddress" v-if="showPrimaryAddress" @close="showPrimaryAddress = false">
	    <template slot="modal-title">Alamat Utama </template>
	    <template slot="modal-content">
	    	<p class="">Apakah Anda yakin ingin menjadikan <span class="fw-bold">"graha gading serpong blok 2 nomer 7, Perum Dasana indah kel. bojongnangka kec. kelapa dua"</span> sebagai alamat utama?</p>
	    	<p>Anda hanya dapat memilih satu alamat utama.</p>
	    </template>
	    <template slot="modal-cta"><button class="btn btn-warning">Jadikan Alamat Utama</button></template>
		</modal-default>

	</div>
</template>

<script>
import { SearchIcon, Trash2Icon, EditIcon, MapPinIcon } from 'vue-feather-icons'
import ModalDefault from '../components/ModalDefault.vue'

export default {

  name: 'shipping',

  components: {
    SearchIcon,
    Trash2Icon,
    EditIcon,
    MapPinIcon,
    ModalDefault
  },

  data () {
		return {
			showAddAddress: false,
			showPrimaryAddress: false,
		}
  },

  methods: {
    showModalFn: function (showModalData) {
        this.showModal = true
    }
	}

}
</script>

<style lang="scss" scoped>
table{
	thead{
		tr{
	    border-bottom: 1px solid #ddd;
		}
	}
	tbody{
		tr{
	    border-bottom: 1px solid #ddd;
		}
	}
}
</style>





