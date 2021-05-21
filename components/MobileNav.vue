<template>
	<div>
		<!-- mobile menu -->
		<nav class="navbar-bottom d-block d-sm-none">
			<div class="container-fluid">
				<div class="row">
					<div class="col-6">
						<nuxt-link to="/" title="" id="homeLink" class="botNav"><home-icon size="1x" class=""></home-icon> <span>Beranda</span></nuxt-link>
					</div>
					<div class="col-6">
						<nuxt-link to="/account" title="" id="accountLink" class="botNav"><user-icon size="1x" class=""></user-icon> <span>Akun</span></nuxt-link>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
import { UserIcon, HomeIcon } from 'vue-feather-icons'

export default {

  name: 'MobileNav',

  components: {
		UserIcon,
		HomeIcon

  },

  mounted (){
		$('#homeLink').on("click", function(){
			$('#homeLink').addClass('active');
			$('#accountLink').removeClass('active');
		});
		$('#accountLink').on("click", function(){
			$('#accountLink').addClass('active');
			$('#homeLink').removeClass('active');
		});
  },

  data () {
		return {

		}
  }
}
</script>

<style lang="scss" scoped>
</style>