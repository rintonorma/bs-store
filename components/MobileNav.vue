<template>
	<div>
		<!-- mobile menu -->
		<nav class="navbar-bottom d-block d-sm-none">
			<div class="container-fluid">
				<div class="row">
					<div class="col-6">
						<a href="" title="" class="botNav active"><home-icon size="1x" class=""></home-icon> <span>Beranda</span></a>
					</div>
					<div class="col-6">
						<a href="" title="" class="botNav"><user-icon size="1x" class=""></user-icon> <span>Akun</span></a>
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

  data () {
	return {

	}
  }
}
</script>

<style lang="css" scoped>
</style>