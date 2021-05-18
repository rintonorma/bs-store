<template>
	<div>
		<section id="categories">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<Breadcrumbs class="mb-3"></Breadcrumbs>
					</div>
					<div class="col-12 col-lg-2">
						<aside id="sidebar-widget" class="sidebar_widget pr-3">
                <div class="title sticky-top">
                    <h4 class="text-muted p-3">Filter</h4>
                    <button type="button" class="btn btn-lg text-muted" id="closeFilter"><x-icon size="2x" class=""></x-icon></button> 
                </div>
                <div class="widget_inner">
                		<div class="widget_list">
                        <h3 data-toggle="collapse" data-target="#group-0">
                            KATEGORI
                            <chevron-down-icon size="1.5x" class="parent-collapsed text-muted"></chevron-down-icon>
                            <chevron-up-icon size="1.5x" class="parent-expanded text-muted"></chevron-up-icon>
                        </h3>
                        <div id="group-0 vertical-menu" class="list-group mb-3 collapse in show">
                            <ul>
                                <li>
                                    <a href="#">Susu  <span>(6)</span></a> 
                                </li>
                                <li>
                                    <a href="#">Mainan Anak <span>(8)</span></a> 
                                </li>
                                <li>
                                    <a href="#">Baju Bayi <span>(10)</span></a> 
                                </li>
                                <li>
                                    <a href="#">Perlengkapan Bayi <span>(6)</span></a> 
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="widget_list">
                        <h3 data-toggle="collapse" data-target="#group-1">
                            HARGA
                            <chevron-down-icon size="1.5x" class="parent-collapsed text-muted"></chevron-down-icon>
                            <chevron-up-icon size="1.5x" class="parent-expanded text-muted"></chevron-up-icon>
                        </h3>
                        <div id="group-1" class="list-group mb-3 collapse in show" style="overflow: visible;">
                            <range-slider v-model="range" v-bind="price" class="mt-4"></range-slider>
                        </div>
                    </div>
                    <div class="widget_list">
                        <h3 data-toggle="collapse" data-target="#group-2">
                            BRAND
                            <chevron-down-icon size="1.5x" class="parent-collapsed text-muted"></chevron-down-icon>
                            <chevron-up-icon size="1.5x" class="parent-expanded text-muted"></chevron-up-icon>
                        </h3>
                        <div id="group-2" class="list-group mb-3 collapse in show">
                        	<div class="form-check">
													  <input class="form-check-input" type="checkbox" value="" id="checkbrand1">
													  <label class="form-check-label" for="checkbrand1">
													    4moms <span>(1)</span>
													  </label>
													</div>
													<div class="form-check">
													  <input class="form-check-input" type="checkbox" value="" id="checkbrand2">
													  <label class="form-check-label" for="checkbrand2">
													    59S UVC LED <span>(12)</span>
													  </label>
													</div>
													<div class="form-check">
													  <input class="form-check-input" type="checkbox" value="" id="checkbrand3">
													  <label class="form-check-label" for="checkbrand3">
													    Abe Food <span>(10)</span>
													  </label>
													</div>
													<div class="form-check">
													  <input class="form-check-input" type="checkbox" value="" id="checkbrand4">
													  <label class="form-check-label" for="checkbrand4">
													    Abon Baby Gold <span>(1)</span>
													  </label>
													</div>
													<div class="form-check">
													  <input class="form-check-input" type="checkbox" value="" id="checkbrand5">
													  <label class="form-check-label" for="checkbrand5">
													    4moms <span>(1)</span>
													  </label>
													</div>
													<div class="form-check">
													  <input class="form-check-input" type="checkbox" value="" id="checkbrand6">
													  <label class="form-check-label" for="checkbrand6">
													    59S UVC LED <span>(12)</span>
													  </label>
													</div>
													<div class="form-check">
													  <input class="form-check-input" type="checkbox" value="" id="checkbrand7">
													  <label class="form-check-label" for="checkbrand7">
													    Abe Food <span>(10)</span>
													  </label>
													</div>
													<div class="form-check">
													  <input class="form-check-input" type="checkbox" value="" id="checkbrand8">
													  <label class="form-check-label" for="checkbrand8">
													    Abon Baby Gold <span>(1)</span>
													  </label>
													</div>
                        </div>
                    </div>
                    <div class="widget_list">
                        <h3 data-toggle="collapse" data-target="#group-3">
                            FILTER KATEGORI
                            <chevron-down-icon size="1.5x" class="parent-collapsed text-muted"></chevron-down-icon>
                            <chevron-up-icon size="1.5x" class="parent-expanded text-muted"></chevron-up-icon>
                        </h3>
                        <div id="group-3" class="list-group mb-3 collapse in show">
                          <div class="form-check">
													  <input class="form-check-input" type="checkbox" value="" id="checkbrand1">
													  <label class="form-check-label" for="checkbrand1">
													    4moms <span>(1)</span>
													  </label>
													</div>
													<div class="form-check">
													  <input class="form-check-input" type="checkbox" value="" id="checkbrand2">
													  <label class="form-check-label" for="checkbrand2">
													    59S UVC LED <span>(12)</span>
													  </label>
													</div>
													<div class="form-check">
													  <input class="form-check-input" type="checkbox" value="" id="checkbrand3">
													  <label class="form-check-label" for="checkbrand3">
													    Abe Food <span>(10)</span>
													  </label>
													</div>
													<div class="form-check">
													  <input class="form-check-input" type="checkbox" value="" id="checkbrand4">
													  <label class="form-check-label" for="checkbrand4">
													    Abon Baby Gold <span>(1)</span>
													  </label>
													</div>
													<div class="form-check">
													  <input class="form-check-input" type="checkbox" value="" id="checkbrand5">
													  <label class="form-check-label" for="checkbrand5">
													    4moms <span>(1)</span>
													  </label>
													</div>
													<div class="form-check">
													  <input class="form-check-input" type="checkbox" value="" id="checkbrand6">
													  <label class="form-check-label" for="checkbrand6">
													    59S UVC LED <span>(12)</span>
													  </label>
													</div>
													<div class="form-check">
													  <input class="form-check-input" type="checkbox" value="" id="checkbrand7">
													  <label class="form-check-label" for="checkbrand7">
													    Abe Food <span>(10)</span>
													  </label>
													</div>
													<div class="form-check">
													  <input class="form-check-input" type="checkbox" value="" id="checkbrand8">
													  <label class="form-check-label" for="checkbrand8">
													    Abon Baby Gold <span>(1)</span>
													  </label>
													</div>
                        </div>
                    </div>
                    <div class="d-grid">
		                	<button type="button" class="btn btn-success my-3">Submit</button>
		                </div>
                </div>
            </aside>
					</div>
					<div class="col-12 col-lg-10">
						<h1 class="mb-3">Mainan Anak</h1>
						<BannerCarousel></BannerCarousel>
						<div class="product-list">
							<div class="mc-toolbar sticky-top">
								<div class="display">
									<button id="grid" class="active"><grid-icon size="2x" class=""></grid-icon></button>
									<button id="list" ><list-icon size="2x" class=""></list-icon></button>
								</div>
								<div class="toolbar">
									<div class="amount">( Menampilkan 1-12 dari 594 Produk )</div>
	                  <div class="sorting input-group">
	                      <label class="input-group-text">Urut Berdasarkan</label>
	                      <select class="form-control rounded-0">
	                          <option>Posisi</option>
	                          <option>Terbaru</option>
	                          <option>Abjad A-Z</option>
	                          <option>Termurah</option>
	                          <option>Termahal</option>
	                      </select>
	                  </div>
	                  <div class="limiter input-group">
	                      <label class="input-group-text">Tampilkan</label>
	                      <select class="form-control rounded-0">
	                          <option>12</option>
	                          <option>24</option>
	                          <option>48</option>
	                      </select>
	                  </div>
	                  <div class="sorting-mobile" id="sorting-mobile">
	                      <div class="title">
	                          <h4 class="text-muted p-3">Urut Berdasarkan</h4>
	                          <a href="#" class="btn btn-lg text-muted" id="closeSorting"><i class="fas fa-times"></i></a> 
	                      </div>
	                      <div class="sorting-inner">
	                          <ul>
	                              <li><a href="" class="active">posisi</a></li>
	                              <li><a href="">terbaru</a></li>
	                              <li><a href="">abjad a - z</a></li>
	                              <li><a href="">termurah</a></li>
	                              <li><a href="">termahal</a></li>
	                          </ul>
	                      </div>
	                  </div>
								</div>
              </div> <!-- end mc toolbar -->
              <div class="mc-product">
              	<div class="card-group">
              		<div class="card figure">
										<div class="label-disc">-15%</div>
										<div class="ratio ratio-1x1">
										  <img class="image-main" src="@/static/img/product/baground-skip-hop-250x250.jpeg" srcset="@/static/img/product/baground-skip-hop-250x250.jpeg" alt="Demo image 1">
											<img class="image-hover" src="@/static/img/product/252385_2-1000x1000-250x250.jpeg" srcset="@/static/img/product/252385_2-1000x1000-250x250.jpeg" alt="Demo image 2">
										</div>
									  <div class="card-body">
											<h5 class="card-title"><a href="#">Skip Hop Zoo Insulated Food Jar Termos Makan Anak 325 ml tersedia pilihan motif</a></h5>
											<div class="card-price">Rp322.150</div>
											<div class="card-disc">Rp379.000</div>
											<div class="rating">
											  <div class="stars">
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-empty"></star-icon>
											  </div>
											  <span class="review-no">(41)</span>
											</div>
											<div class="shippingfree"><img src="@/static/img/icon/shippingfree.svg"></div>
									  </div>
									</div><!-- end card -->
									<div class="card figure">
										<div class="label-disc">-15%</div>
										<div class="ratio ratio-1x1">
										  <img class="image-main" src="@/static/img/product/baground-skip-hop-250x250.jpeg" srcset="@/static/img/product/baground-skip-hop-250x250.jpeg" alt="Demo image 1">
											<img class="image-hover" src="@/static/img/product/252385_2-1000x1000-250x250.jpeg" srcset="@/static/img/product/252385_2-1000x1000-250x250.jpeg" alt="Demo image 2">
										</div>
									  <div class="card-body">
											<h5 class="card-title"><a href="#">Skip Hop Zoo Insulated Food Jar Termos Makan Anak 325 ml tersedia pilihan motif</a></h5>
											<div class="card-price">Rp322.150</div>
											<div class="card-disc">Rp379.000</div>
											<div class="rating">
											  <div class="stars">
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-empty"></star-icon>
											  </div>
											  <span class="review-no">(41)</span>
											</div>
											<div class="shippingfree"><img src="@/static/img/icon/shippingfree.svg"></div>
									  </div>
									</div><!-- end card -->
									<div class="card figure">
										<div class="label-disc">-15%</div>
										<div class="ratio ratio-1x1">
										  <img class="image-main" src="@/static/img/product/baground-skip-hop-250x250.jpeg" srcset="@/static/img/product/baground-skip-hop-250x250.jpeg" alt="Demo image 1">
											<img class="image-hover" src="@/static/img/product/252385_2-1000x1000-250x250.jpeg" srcset="@/static/img/product/252385_2-1000x1000-250x250.jpeg" alt="Demo image 2">
										</div>
									  <div class="card-body">
											<h5 class="card-title"><a href="#">Skip Hop Zoo Insulated Food Jar Termos Makan Anak 325 ml tersedia pilihan motif</a></h5>
											<div class="card-price">Rp322.150</div>
											<div class="card-disc">Rp379.000</div>
											<div class="rating">
											  <div class="stars">
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-empty"></star-icon>
											  </div>
											  <span class="review-no">(41)</span>
											</div>
											<div class="shippingfree"><img src="@/static/img/icon/shippingfree.svg"></div>
									  </div>
									</div><!-- end card -->
									<div class="card figure">
										<div class="label-disc">-15%</div>
										<div class="ratio ratio-1x1">
										  <img class="image-main" src="@/static/img/product/baground-skip-hop-250x250.jpeg" srcset="@/static/img/product/baground-skip-hop-250x250.jpeg" alt="Demo image 1">
											<img class="image-hover" src="@/static/img/product/252385_2-1000x1000-250x250.jpeg" srcset="@/static/img/product/252385_2-1000x1000-250x250.jpeg" alt="Demo image 2">
										</div>
									  <div class="card-body">
											<h5 class="card-title"><a href="#">Skip Hop Zoo Insulated Food Jar Termos Makan Anak 325 ml tersedia pilihan motif</a></h5>
											<div class="card-price">Rp322.150</div>
											<div class="card-disc">Rp379.000</div>
											<div class="rating">
											  <div class="stars">
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-empty"></star-icon>
											  </div>
											  <span class="review-no">(41)</span>
											</div>
											<div class="shippingfree"><img src="@/static/img/icon/shippingfree.svg"></div>
									  </div>
									</div><!-- end card -->
									<div class="card figure">
										<div class="label-disc">-15%</div>
										<div class="ratio ratio-1x1">
										  <img class="image-main" src="@/static/img/product/baground-skip-hop-250x250.jpeg" srcset="@/static/img/product/baground-skip-hop-250x250.jpeg" alt="Demo image 1">
											<img class="image-hover" src="@/static/img/product/252385_2-1000x1000-250x250.jpeg" srcset="@/static/img/product/252385_2-1000x1000-250x250.jpeg" alt="Demo image 2">
										</div>
									  <div class="card-body">
											<h5 class="card-title"><a href="#">Skip Hop Zoo Insulated Food Jar Termos Makan Anak 325 ml tersedia pilihan motif</a></h5>
											<div class="card-price">Rp322.150</div>
											<div class="card-disc">Rp379.000</div>
											<div class="rating">
											  <div class="stars">
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-empty"></star-icon>
											  </div>
											  <span class="review-no">(41)</span>
											</div>
											<div class="shippingfree"><img src="@/static/img/icon/shippingfree.svg"></div>
									  </div>
									</div><!-- end card -->
									<div class="card figure">
										<div class="label-disc">-15%</div>
										<div class="ratio ratio-1x1">
										  <img class="image-main" src="@/static/img/product/baground-skip-hop-250x250.jpeg" srcset="@/static/img/product/baground-skip-hop-250x250.jpeg" alt="Demo image 1">
											<img class="image-hover" src="@/static/img/product/252385_2-1000x1000-250x250.jpeg" srcset="@/static/img/product/252385_2-1000x1000-250x250.jpeg" alt="Demo image 2">
										</div>
									  <div class="card-body">
											<h5 class="card-title"><a href="#">Skip Hop Zoo Insulated Food Jar Termos Makan Anak 325 ml tersedia pilihan motif</a></h5>
											<div class="card-price">Rp322.150</div>
											<div class="card-disc">Rp379.000</div>
											<div class="rating">
											  <div class="stars">
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-empty"></star-icon>
											  </div>
											  <span class="review-no">(41)</span>
											</div>
											<div class="shippingfree"><img src="@/static/img/icon/shippingfree.svg"></div>
									  </div>
									</div><!-- end card -->
									<div class="card figure">
										<div class="label-disc">-15%</div>
										<div class="ratio ratio-1x1">
										  <img class="image-main" src="@/static/img/product/baground-skip-hop-250x250.jpeg" srcset="@/static/img/product/baground-skip-hop-250x250.jpeg" alt="Demo image 1">
											<img class="image-hover" src="@/static/img/product/252385_2-1000x1000-250x250.jpeg" srcset="@/static/img/product/252385_2-1000x1000-250x250.jpeg" alt="Demo image 2">
										</div>
									  <div class="card-body">
											<h5 class="card-title"><a href="#">Skip Hop Zoo Insulated Food Jar Termos Makan Anak 325 ml tersedia pilihan motif</a></h5>
											<div class="card-price">Rp322.150</div>
											<div class="card-disc">Rp379.000</div>
											<div class="rating">
											  <div class="stars">
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-empty"></star-icon>
											  </div>
											  <span class="review-no">(41)</span>
											</div>
											<div class="shippingfree"><img src="@/static/img/icon/shippingfree.svg"></div>
									  </div>
									</div><!-- end card -->
									<div class="card figure">
										<div class="label-disc">-15%</div>
										<div class="ratio ratio-1x1">
										  <img class="image-main" src="@/static/img/product/baground-skip-hop-250x250.jpeg" srcset="@/static/img/product/baground-skip-hop-250x250.jpeg" alt="Demo image 1">
											<img class="image-hover" src="@/static/img/product/252385_2-1000x1000-250x250.jpeg" srcset="@/static/img/product/252385_2-1000x1000-250x250.jpeg" alt="Demo image 2">
										</div>
									  <div class="card-body">
											<h5 class="card-title"><a href="#">Skip Hop Zoo Insulated Food Jar Termos Makan Anak 325 ml tersedia pilihan motif</a></h5>
											<div class="card-price">Rp322.150</div>
											<div class="card-disc">Rp379.000</div>
											<div class="rating">
											  <div class="stars">
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-fill"></star-icon>
													<star-icon size="1x" class="star-empty"></star-icon>
											  </div>
											  <span class="review-no">(41)</span>
											</div>
											<div class="shippingfree"><img src="@/static/img/icon/shippingfree.svg"></div>
									  </div>
									</div><!-- end card -->
              	</div><!-- end card group -->
              	<nav>
                  <ul class="pagination">
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                      <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- mobile menu -->
		<nav class="navbar-bottom d-block d-sm-none">
			<div class="container-fluid">
				<div class="row">
					<div class="col-6">
						<button type="button" class="botNav" id="filterBtn"><filter-icon size="1x" class=""></filter-icon> <span>Filter</span></button>
					</div>
					<div class="col-6">
						<button type="button" class="botNav" id="sortingBtn"><sliders-icon size="1x" class=""></sliders-icon> <span>Urutkan</span></button>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>

import BannerCarousel from '../components/BannerCarousel.vue'
import { GridIcon, ListIcon, StarIcon, ChevronDownIcon, ChevronUpIcon, FilterIcon, SlidersIcon, XIcon } from 'vue-feather-icons'
import RangeSlider from '@vueform/slider/dist/slider.vue2.js'

export default {

  name: 'categories',

  components:{
  	BannerCarousel,
  	GridIcon, 
  	ListIcon,
  	StarIcon,
  	ChevronDownIcon, 
  	ChevronUpIcon,
  	RangeSlider,
  	FilterIcon, 
  	SlidersIcon,
  	XIcon
  },

  mounted () {
  	$('#list').on("click", function(event){
  		event.preventDefault();
  		$('.mc-product .card-group').addClass('list-grid');
  		$('#grid').removeClass('active');
  		$('#list').addClass('active');
  	});
    $('#grid').on("click", function(event){
    	event.preventDefault();
    	$('.mc-product .card-group').removeClass('list-grid');
    	$('#grid').addClass('active');
    	$('#list').removeClass('active');
  	});
  	$("#filterBtn").on('click', function(event) {
      document.getElementById("sidebar-widget").style.display="block";
      console.log('sadassa');
    });

    $("#sortingBtn").on('click', function(event) {
      document.getElementById("sorting-mobile").style.display="block";
    });

    $("#closeFilter").on('click', function(event) {
      document.getElementById("sidebar-widget").style.display="none";
    });

    $("#closeSorting").on('click', function(event) {
      document.getElementById("sorting-mobile").style.display="none";
    });
  },

  data () {
		return {
			price:{
				format:{
					prefix:'Rp',
					thousand:'.'
				},
				max:400000000,
			},
			range: [0, 400000000]
	  }
	}
}
</script>

<style lang="scss" scoped>

.mc-product {

	.card-group {
    display: grid;
    grid-template-columns: repeat(6, minmax(170px, 1fr));
    grid-gap: .5rem;

    .card{
			text-align: center;
			border-radius: 15px;
			overflow: hidden;
	    border: 1px solid #ddd;
			cursor: pointer;

			.card-img-top{
				border-top-left-radius: 15px;
				border-top-right-radius: 15px;
			}

			.card-title {
				font-size: 14px;
				line-height: 1.5em;
				height: 3em;
				margin-bottom: 15px;
				color: #333;
			  text-align: left;
			}

			.card-price{
				text-align: left;
				color: #ff5400;
				margin-bottom: 5px;
			}

			.card-disc{
				text-align: left;
				text-decoration: line-through;
				color: #777;
				margin-bottom: 15px;
				font-size: 12px;
			}

			.label-disc{
				position: absolute;
				background: red;
				color: white;
				z-index: 1;
				width: 50px;
				height: 50px;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 100%;
			  right: 10px;
				top: 10px;
			}

			.shippingfree{
				margin-top: 10px;
		    text-align: left;

				img{
					height: 18px;
					width: auto;
				}
			}
		}
	}

	.list-grid{
		grid-template-columns: repeat(1, minmax(170px, 1fr))!important;

		.card{
			flex-direction: row;

			.label-disc{
		    left: 10px;
			}

			.ratio{
		    width: 20%;
			}
		}
	}
}
@media (max-width: 767px){
	.mc-product {

		.card-group {
			grid-template-columns: repeat(2, minmax(170px, 1fr));
		}

		.list-grid{
			.card{
				.ratio{
			    width: 500px;
    			height: 150px;
				}
			}
		}
	}
}
</style>










