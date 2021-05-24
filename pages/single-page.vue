<template>
	<div>
		<section id="single-page">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<Breadcrumbs class="mb-3"></Breadcrumbs>
					</div>
					<div class="col-12 col-lg-2">
						<aside id="sidebar-widget" class="sidebar_widget pr-3">
                <div class="title">
                    <h4 class="text-muted p-3">Informasi</h4>
                    <button type="button" class="btn btn-lg text-muted" id="closeFilter"><x-icon size="2x" class=""></x-icon></button> 
                </div>
                <div class="widget_inner">
                    <div class="widget_list">
                        <h3>Informasi</h3>
                        <ul>
                            <li class="active">
                                <a href="/single-page">Tentang Kami</a> 
                            </li>
                            <li>
                                <a href="/single-page">Hubungi Kami</a> 
                            </li>
                            <li>
                                <a href="/single-page">FAQ</a> 
                            </li>
                            <li>
                                <a href="/single-page">Cari Toko Terdekat</a> 
                            </li>
                            <li>
                                <a href="/single-page">Privasi</a> 
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
					</div>
					<div class="col-12 col-lg-10">
						<div class="title py-3">
                <h2 class="text-dark">Tentang Kami</h2>
            </div>
            <div class="media-body">
                <div class="featured-img">
                </div>
                <div class="content">
                    <h4 class="text-dark mb-3">Selamat datang di BabyShop</h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>

                </div>
            </div>
					</div>
				</div>
			</div>
		</section>
		<nav class="navbar-bottom d-block d-sm-none">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <a href="#" title="" class="botNav" id="filterBtn"><menu-icon size="1.5x" class=""></menu-icon> <span>Artikel Lainnya</span></a>
                </div>
            </div>
        </div>
    </nav>
	</div>
</template>

<script>
import { MenuIcon, XIcon } from 'vue-feather-icons'

export default {

  name: 'single-page',

  components:{
  	MenuIcon,
  	XIcon
  },

  mounted () {
  	$("#filterBtn").on('click', function(event) {
      document.getElementById("sidebar-widget").style.display="block";
      console.log('sadassa');
    });

    $("#closeFilter").on('click', function(event) {
      document.getElementById("sidebar-widget").style.display="none";
    });
  },

  data () {
		return {

		}
  }
}
</script>

<style lang="css" scoped>
</style>