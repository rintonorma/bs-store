<template>
	<div>
		<section id="backpage">
				<div class="container">
					<div class="row">
						<div class="col-12 col-lg-6 offset-lg-3">
							<div class="d-flex">
                <a href="/transaction" title=""><arrow-left-icon class="text-white me-3"></arrow-left-icon></a>
                <h5 class="text-white m-0">Cek Resi</h5>
              </div>
						</div>
					</div>
				</div>
			</section>
		<section id="tracking-page">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 offset-lg-3">
              <h5>Expedisi J&T</h5>
              <p>Customer Service jntcallcenter@jet.co.id : Telp 021-8066-1888,</p>
              <h6 class="fw-bold mb-2">Informasi Pengiriman</h6>
              <div class="table-responsive">
                  <table class="table table-bordered table-striped border">
                      <tbody>
                          <tr>
                            <th scope="row">No Resi</th>
                            <td class="fw-bold">JD0099807383</td>
                          </tr>
                          <tr>
                            <th scope="row">Status</th>
                            <td class="fw-bold">Delivered</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <h6 class="fw-bold mb-2">History</h6>
              <div class="table-responsive">
                  <table class="table table-bordered table-striped border">
                      <thead>
                          <tr>
                            <th scope="col">Tanggal</th>
                            <th scope="col">Keterangan</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                            <th scope="row">07 Dec 2020 15:59:21</th>
                            <td>Terkirim: Drop Point, BALARAJA (Anggs)</td>
                          </tr>
                          <tr>
                            <th scope="row">07 Dec 2020 14:16:05</th>
                            <td>Sedang Diantar: Drop Point, BALARAJA</td>
                          </tr>
                          <tr>
                            <th scope="row">07 Dec 2020 10:05:14</th>
                            <td>Telah Tiba: Drop Point, BALARAJA</td>
                          </tr>
                          <tr>
                            <th scope="row">07 Dec 2020 04:41:23</th>
                            <td>Telah Berangkat: Pusat Transit, TANGERANG</td>
                          </tr>
                          <tr>
                            <th scope="row">07 Dec 2020 02:50:54</th>
                            <td>Telah Tiba: Pusat Transit, TANGERANG</td>
                          </tr>
                          <tr>
                            <th scope="row">07 Dec 2020 01:30:18</th>
                            <td>Telah Berangkat: Pusat Transit, JAKARTA</td>
                          </tr>
                          <tr>
                            <th scope="row">07 Dec 2020 01:29:05</th>
                            <td>Telah Tiba: Pusat Transit, JAKARTA</td>
                          </tr>
                          <tr>
                            <th scope="row">06 Dec 2020 22:44:21</th>
                            <td>Telah Berangkat: Drop Point, JAKARTA</td>
                          </tr>
                          <tr>
                            <th scope="row">06 Dec 2020 20:46:32</th>
                            <td>Telah Tiba: Drop Point, JAKARTA</td>
                          </tr>
                          <tr>
                            <th scope="row">06 Dec 2020 20:04:49</th>
                            <td>Telah Berangkat: Drop Point, JAKARTA</td>
                          </tr>
                          <tr>
                            <th scope="row">06 Dec 2020 16:56:28</th>
                            <td>Telah Diambil: Drop Point, JAKARTA</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { ArrowLeftIcon } from 'vue-feather-icons'

export default {

  name: 'tracking',
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