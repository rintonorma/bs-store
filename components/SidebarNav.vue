<template>
	<div>
			<div class="card h-100">
					<div class="nav-side-menu">
							<div class="menu-bar">
									<div class="brand">
											<div class="section-profile">
													<span class="avatar">
														<!-- <user-icon size="1x" class="" ></user-icon> -->
														<img src="@/static/img/photo-1519993796861-26556330a4a9.jpeg">
													</span> 
													<div>
															<h5 class="mb-1">Azmi Aziz</h5>
															<small class="text-muted">Last login Min, 24 Des 2020 19:18</small>
													</div>
											</div>
									</div>
									<menu-icon size="2x" class="toggle-btn" data-toggle="collapse" data-target="#menu-content"></menu-icon>
							</div>
							<div class="menu-list">
									<ul id="menu-content" class="menu-content collapse out">
											<li class="active">
													<nuxt-link to="/account">
															<user-icon size="1.5x" class="me-2"></user-icon> Data Pribadi
													</nuxt-link>
											</li>
											<li>
													<nuxt-link to="/shipping">
															<map-pin-icon size="1.5x" class="me-2"></map-pin-icon> Daftar Alamat
													</nuxt-link>
											</li>
											<li>
													<nuxt-link to="/security">
															<lock-icon size="1.5x" class="me-2"></lock-icon> Keamanan
													</nuxt-link>
											</li>
											<li>
													<nuxt-link to="/transaction">
															<file-text-icon size="1.5x" class="me-2"></file-text-icon> Transaction
													</nuxt-link>
											</li>
											<li>
													<nuxt-link to="/" class="text-danger">
															<log-out-icon size="1.5x" class="me-2"></log-out-icon> Logout
													</nuxt-link>
											</li>
									</ul>
							</div>
					</div>
			</div>
	</div>
</template>

<script>
import { UserIcon, MapPinIcon, LockIcon, FileTextIcon, LogOutIcon, MenuIcon } from 'vue-feather-icons'

export default {

  name: 'SidebarNav',

  components: {
    UserIcon,
    MapPinIcon,
    LockIcon,
    FileTextIcon,
    LogOutIcon,
    MenuIcon
  },

  data () {
		return {

		}
  },
}
</script>

<style lang="scss" scoped>

</style>



