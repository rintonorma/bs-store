<template>
	<div>
		<section id="account-page">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<Breadcrumbs class="mb-3"></Breadcrumbs>
					</div>
				</div>
				<div class="main-wrapper">
						<SidebarNav class="sidebar"></SidebarNav>
						<div class="main-content">
								<h3 class="mb-3">Data Pribadi</h3>
								<div class="mc-section">
                    <div class="row">
                        <div class="col-12 col-lg-4">
                            <p class="text-secondary">Ubah Foto Profil</p>
                            <div class="upload-avatar mb-3">
                                <div class="upload-avatar-img">
                                    <img id="imageResult" src="">
                                </div>
                                <input for="upload" id="upload" type="file" onchange="readURL(this);" class="btn btn-outline-secondary btn-block my-3"></input>
                                <small class="text-secondary">Besar file: maksimum 10.000.000 bytes (10 Megabytes)<br>Ekstensi file yang diperbolehkan: .JPG .JPEG .PNG</small>
                            </div>
                        </div>
                        <div class="col-12 col-lg-8">
                            <form>
                                <p class="text-secondary">Ubah Biodata Diri</p>
                                <div class="form-group">
                                    <label class="mb-1">Nama Depan</label>
                                    <input type="text" class="form-control" id="firstname">
                                </div>
                                <div class="form-group">
                                    <label class="mb-1">Nama Belakang</label>
                                    <input type="text" class="form-control" id="lastname">
                                </div>
                                <div class="form-group">
                                    <label class="mb-1">Email</label>
                                    <div class="input-group">
                                        <input type="email" class="form-control" id="email" placeholder="" value="sarahsahen@gmail.com">
                                      	<span class="label-status"><check-icon size="1.5x" class=""></check-icon></span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="mb-1">Telepon</label>
                                    <div class="input-group">
                                        <input type="number" class="form-control" id="phone" value="081234567890">
                                        <button type="button" class="btn btn-success">verifikasi</button>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="mb-1">Jenis Kelamin</label>
                                    <div class="input-group">
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="gender" id="genderMale" value="option1" checked>
                                            <label class="form-check-label" for="genderMale">Laki-laki</label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input class="form-check-input" type="radio" name="gender" id="genderFemale" value="option2">
                                            <label class="form-check-label" for="genderFemale">Perempuan</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="mb-1">Tanggal Lahir</label>
                                    <datetime v-model="date" input-class="form-control"></datetime>
                                </div>                                
                                <a href="#" class="btn btn-warning btn-lg w-100">Simpan</a>
                            </form>
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
import { CheckIcon } from 'vue-feather-icons'
import { Datetime } from 'vue-datetime'
import SidebarNav from '../components/SidebarNav.vue'

export default {

	name: 'account',

	components: {
    CheckIcon,
    datetime: Datetime,
    SidebarNav
  },

	data () {
		return {

		}
	}
}
</script>

<style lang="scss" scoped>

</style>










