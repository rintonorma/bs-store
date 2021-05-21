<template>
	<div>
		<section id="security-page">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<Breadcrumbs class="mb-3"></Breadcrumbs>
					</div>
					<div class="main-wrapper">
						<SidebarNav class="sidebar"></SidebarNav>
						<div class="main-content">
							<h3 class="mb-3">Security</h3>
							<div class="mc-section">
                  <div class="row">
                      <div class="col-12 col-lg-8">
                          <form>
                              <p class="text-secondary">Ubah Kata Sandi</p>
                              <div class="form-group row align-items-center">
                                  <div class="col-12 col-lg-3">
                                  	<label class="mb-1">Kata Sandi Lama</label>
                                  </div>
                                  <div class="col-12 col-lg-9">
                                  	<input type="password" class="form-control" id="oldpassword" placeholder="Masukkan kata sandi lama">
                                  </div>
                              </div>
                              <div class="form-group row align-items-center">
                              		<div class="col-12 col-lg-3">
	                                  <label class="mb-1">Kata Sandi Baru</label>
	                                </div>
	                                <div class="col-12 col-lg-9">
	                                  <input type="password" class="form-control" id="newpassword" placeholder="Masukkan kata sandi baru">
	                                </div>
                              </div>
                              <div class="form-group row align-items-center">
                              		<div class="col-12 col-lg-3">
	                                  <label class="mb-1">Konfirmasi Kata Sandi Baru</label>
	                                </div>
	                                <div class="col-12 col-lg-9">
	                                  <input type="password" class="form-control" id="confirmnewpassword" placeholder="Konfirmasi kata sandi baru">
	                                </div>
                              </div>
                              <a href="#" class="btn btn-warning btn-lg w-100">Simpan</a>
                          </form>
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
export default {

  name: 'security',

  data () {
		return {

		}
  }
}
</script>

<style lang="css" scoped>
</style>