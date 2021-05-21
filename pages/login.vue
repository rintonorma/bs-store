<template>
	<div>
		<section id="login-page">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<!-- <Breadcrumbs class="mb-3"></Breadcrumbs> -->
					</div>
					<div class="col-12 col-lg-4 offset-lg-4 text-center">
						<h5 class="mb-3">Login menggunakan Media Sosial</h5>
						<div class="cta">
							<a href="#" class="btn btn-facebook btn-block rounded-pill w-100"><img src="@/static/img/icon/Facebook-icon-WHITE.png" alt="" width="18px;" class="align-middle"> Facebook</a>
							<a href="#" class="btn btn-google btn-block rounded-pill w-100"><img src="@/static/img/icon/google-logo.png" alt="" width="18px;" class="align-middle"> Google</a>
						</div>
						<hr>

					</div>
					<div class="col-12 col-lg-4 offset-lg-4 text-center">
						<div class="text-secondary mb-3">atau login menggunakan</div>
						<form>
              <div class="form-group">
                  <input type="email" class="form-control" aria-describedby="username" placeholder="Username atau Email">
              </div>
              <div class="form-group">
                  <input type="password" class="form-control" id="password" placeholder="Password">
              </div>
              <a href="#" class="btn btn-warning btn-lg rounded-pill w-100" @click="login">Masuk</a>
              <div class="py-3">
                  <a href="#" class="btn-link">Lupa password?</a>
              </div>
              <hr>
              <div class="text-center text-muted py-3 mt-3">
                  Baru di BabyShop.com? <a href="./register" class="btn-link">Daftar Sekarang</a>
              </div>
          	</form>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {

  name: 'login',

  data () {
		return {

		}
  },
  methods: {
  	login () {
  		this.$store.commit('login')
  		this.$nextTick(() => {
  			this.$router.push('/account')
  		})
  	}
  }
}
</script>

<style lang="scss" scoped>
#login-page{

	.cta{
		margin-bottom: 15px;
		display: grid;
		grid-gap: 15px;
    grid-template-columns: 1fr 1fr;
	}
}

.form-group{
	margin-bottom: 10px;

	.form-control{
    padding: 15px 30px;
    border-radius: 50px;
	}
}
</style>





