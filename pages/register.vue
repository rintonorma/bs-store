<template>
	<div>
		<section id="register-page">
			<div class="container">
				<div class="row">
					<div class="col-12 col-lg-4 offset-lg-4 text-center">
						<h5 class="mb-3">Daftar menggunakan Media Sosial</h5>
						<div class="cta">
							<a href="#" class="btn btn-facebook btn-block rounded-pill w-100"><img src="@/static/img/icon/Facebook-icon-WHITE.png" alt="" width="18px;" class="align-middle"> Facebook</a>
							<a href="#" class="btn btn-google btn-block rounded-pill w-100"><img src="@/static/img/icon/google-logo.png" alt="" width="18px;" class="align-middle"> Google</a>
						</div>
						
					</div>
					<div class="col-12 col-lg-6 offset-lg-3">
						<div class="text-secondary mb-3 text-center">atau isi formulir pendaftaran dibawah dengan lengkap</div>
						<form>
							<hr>
							<div class="text-secondary mb-3">Data Pribadi Anda</div>
							<div class="row form-group align-items-center">
							  <div class="col-3">
							    <label for="firstname" class="col-form-label">Nama Depan <span class="text-danger">*</span></label>
							  </div>
							  <div class="col-9">
							    <input type="text" id="firstname" class="form-control" aria-describedby="firstname">
							  </div>
							</div>
							<div class="row form-group align-items-center">
							  <div class="col-3">
							    <label for="lastname" class="col-form-label">Nama Belakang <span class="text-danger">*</span></label>
							  </div>
							  <div class="col-9">
							    <input type="text" id="lastname" class="form-control" aria-describedby="lastname">
							  </div>
							</div>
							<div class="row form-group align-items-center">
							  <div class="col-3">
							    <label for="emailinput" class="col-form-label">Email <span class="text-danger">*</span></label>
							  </div>
							  <div class="col-9">
							    <input type="email" id="emailinput" class="form-control" aria-describedby="emailinput">
							  </div>
							</div>
							<div class="row form-group align-items-center">
							  <div class="col-3">
							    <label for="phoneinput" class="col-form-label">Telepon <span class="text-danger">*</span></label>
							  </div>
							  <div class="col-9">
							    <input type="number" id="phoneinput" class="form-control" aria-describedby="phoneinput">
							  </div>
							</div>
							<div class="row form-group align-items-center">
							  <div class="col-3">
							    <label for="genderinput" class="col-form-label">Jenis Kelamin</label>
							  </div>
							  <div class="col-9">
							    <select class="form-select" aria-label="Jenis Kelamin">
									  <option selected>-- Silahkan Pilih --</option>
									  <option value="1">Perempuan</option>
									  <option value="2">Laki-laki</option>
									</select>
							  </div>
							</div>
							<div class="row form-group align-items-center">
							  <div class="col-3">
							    <label for="genderinput" class="col-form-label">Tanggal Lahir</label>
							  </div>
							  <div class="col-9">
							    <datetime v-model="date" input-class="inputdate"></datetime>
							  </div>
							</div>
							<hr>
							<div class="text-secondary mb-3">Alamat Anda</div>
							<div class="row form-group align-items-center">
							  <div class="col-3">
							    <label for="companyinput" class="col-form-label">Perusahaan</label>
							  </div>
							  <div class="col-9">
							    <input type="text" id="companyinput" class="form-control" aria-describedby="companyinput">
							  </div>
							</div>
							<div class="row form-group align-items-center">
							  <div class="col-3">
							    <label for="provinsiinput" class="col-form-label">Provinsi <span class="text-danger">*</span></label>
							  </div>
							  <div class="col-9">
							    <select class="form-select" aria-label="Jenis Kelamin">
									  <option selected>-- Silahkan Pilih --</option>
									  <option value="1">Aceh</option>
									  <option value="2">Bali</option>
									  <option value="3">Banten</option>
									</select>
							  </div>
							</div>
							<div class="row form-group align-items-center">
							  <div class="col-3">
							    <label for="addressinput" class="col-form-label">Alamat <span class="text-danger">*</span></label>
							  </div>
							  <div class="col-9">
							    <input type="email" id="addressinput" class="form-control" aria-describedby="addressinput">
							  </div>
							</div>
							<div class="row form-group align-items-center">
							  <div class="col-3">
							    <label for="addressinput2" class="col-form-label"></label>
							  </div>
							  <div class="col-9">
							    <input type="text" id="addressinput2" class="form-control" aria-describedby="addressinput2">
							  </div>
							</div>
							<div class="row form-group align-items-center">
							  <div class="col-3">
							    <label for="provinsiinput" class="col-form-label">Kota / Kecamatan <span class="text-danger">*</span></label>
							  </div>
							  <div class="col-9">
							    <select class="form-select" aria-label="Jenis Kelamin">
									  <option selected>-- Silahkan Pilih --</option>
									  <option value="1">Aceh</option>
									  <option value="2">Bali</option>
									  <option value="3">Banten</option>
									</select>
							  </div>
							</div>
							<div class="row form-group align-items-center">
							  <div class="col-3">
							    <label for="postcode" class="col-form-label">Kode Pos</label>
							  </div>
							  <div class="col-9">
							    <input type="number" id="postcode" class="form-control" aria-describedby="postcode">
							  </div>
							</div>
							<hr>
							<div class="text-secondary mb-3">Password Anda</div>
							<div class="row form-group align-items-center">
							  <div class="col-3">
							    <label for="password1" class="col-form-label">Password <span class="text-danger">*</span></label>
							  </div>
							  <div class="col-9">
							    <input type="password" id="password1" class="form-control" aria-describedby="password1">
							  </div>
							</div>
							<div class="row form-group align-items-center">
							  <div class="col-3">
							    <label for="password2" class="col-form-label">Konfirmasi Password <span class="text-danger">*</span></label>
							  </div>
							  <div class="col-9">
							    <input type="password" id="password2" class="form-control" aria-describedby="password2">
							  </div>
							</div>
							<hr>
							<div class="text-secondary mb-3">Newsletter</div>
							<div class="row form-group align-items-center">
							  <div class="col-3">
							    <label for="newsletterinput" class="col-form-label">Mendaftar</label>
							  </div>
							  <div class="col-9">
							    <div class="form-check form-check-inline">
									  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
									  <label class="form-check-label align-middle" for="flexRadioDefault1">Ya</label>
									</div>
									<div class="form-check form-check-inline">
									  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
									  <label class="form-check-label align-middle" for="flexRadioDefault2">Tidak</label>
									</div>
							  </div>
							</div>
							<a href="./profile" class="btn btn-warning btn-lg rounded-pill w-100">Daftar</a>
              <hr>
              <div class="text-center text-muted py-3 mt-3">
                  Sudah punya akun di BabyShop.com? <a href="./login" class="btn-link">Masuk Sekarang</a>
              </div>
						</form>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import Vue from 'vue'
import { Datetime } from 'vue-datetime'

export default {

  name: 'register',

  components: {
    datetime: Datetime,
  },

  data () {
	return {

	}
  }
}
</script>

<style lang="scss" scoped>
#register-page{

	.cta{
		margin-bottom: 15px;
		display: grid;
		grid-gap: 15px;
    grid-template-columns: 1fr 1fr;
	}
}

.form-group{
	margin-bottom: 10px;

	.form-control, .form-select{
    padding: 5px 15px;
    border-radius: 50px;
	}
}


</style>