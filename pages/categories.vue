<template>
	<div>
		<section id="categories">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<Breadcrumbs class="mb-3"></Breadcrumbs>
					</div>
					<div class="col-12 col-lg-3">
						<aside id="sidebar-widget" class="sidebar_widget pr-3">
                <div class="title">
                    <h4 class="text-muted p-3">Filter</h4>
                    <a href="#" class="btn btn-lg text-muted" id="closeFilter"><i class="fas fa-times"></i></a> 
                </div>
                <div class="widget_inner">
                    <div class="widget_list">
                        <h3 data-toggle="collapse" data-target="#group-1">
                            Filter Harga
                            <chevron-down-icon size="1.5x" class="parent-collapsed text-muted"></chevron-down-icon>
                            <chevron-up-icon size="1.5x" class="parent-expanded text-muted"></chevron-up-icon>
                        </h3>
                        <div id="group-1" class="list-group mb-3 collapse in show">
                            <RangeSlider v-model="example2.value" v-bind="example2"></RangeSlider>
                        </div>
                    </div>
                    <div class="widget_list">
                        <h3 data-toggle="collapse" data-target="#group-2">
                            BRAND
                            <chevron-down-icon size="1.5x" class="parent-collapsed text-muted"></chevron-down-icon>
                            <chevron-up-icon size="1.5x" class="parent-expanded text-muted"></chevron-up-icon>
                        </h3>
                        <div id="group-2" class="list-group mb-3 collapse in show">
                            <ul>
                                <li>
                                    <a href="#">Black  <span>(6)</span></a> 
                                </li>
                                <li>
                                    <a href="#"> Blue <span>(8)</span></a> 
                                </li>
                                <li>
                                    <a href="#">Brown <span>(10)</span></a> 
                                </li>
                                <li>
                                    <a href="#"> Green <span>(6)</span></a> 
                                </li>
                                <li>
                                    <a href="#">Pink <span>(4)</span></a> 
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="widget_list">
                        <h3 data-toggle="collapse" data-target="#group-3">
                            SISTEM OPERASI
                            <chevron-down-icon size="1.5x" class="parent-collapsed text-muted"></chevron-down-icon>
                            <chevron-up-icon size="1.5x" class="parent-expanded text-muted"></chevron-up-icon>
                        </h3>
                        <div id="group-3" class="list-group mb-3 collapse in show">
                            <ul>
                                <li>
                                    <a href="#">Black  <span>(6)</span></a> 
                                </li>
                                <li>
                                    <a href="#"> Blue <span>(8)</span></a> 
                                </li>
                                <li>
                                    <a href="#">Brown <span>(10)</span></a> 
                                </li>
                                <li>
                                    <a href="#"> Green <span>(6)</span></a> 
                                </li>
                                <li>
                                    <a href="#">Pink <span>(4)</span></a> 
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="widget_list">
                        <h3 data-toggle="collapse" data-target="#group-4">
                            UKURAN LAYAR
                            <chevron-down-icon size="1.5x" class="parent-collapsed text-muted"></chevron-down-icon>
                            <chevron-up-icon size="1.5x" class="parent-expanded text-muted"></chevron-up-icon>
                        </h3>
                        <div id="group-4" class="list-group mb-3 collapse in show">
                            <ul>
                                <li>
                                    <a href="#">Black  <span>(6)</span></a> 
                                </li>
                                <li>
                                    <a href="#"> Blue <span>(8)</span></a> 
                                </li>
                                <li>
                                    <a href="#">Brown <span>(10)</span></a> 
                                </li>
                                <li>
                                    <a href="#"> Green <span>(6)</span></a> 
                                </li>
                                <li>
                                    <a href="#">Pink <span>(4)</span></a> 
                                </li>
                            </ul>
                        </div>
                    </div> 
                    <div class="widget_list">
                        <h3 data-toggle="collapse" data-target="#group-5">
                            LAYAR
                            <chevron-down-icon size="1.5x" class="parent-collapsed text-muted"></chevron-down-icon>
                            <chevron-up-icon size="1.5x" class="parent-expanded text-muted"></chevron-up-icon>
                        </h3>
                        <div id="group-5" class="list-group mb-3 collapse in show">
                            <ul>
                                <li>
                                    <a href="#">Black  <span>(6)</span></a> 
                                </li>
                                <li>
                                    <a href="#"> Blue <span>(8)</span></a> 
                                </li>
                                <li>
                                    <a href="#">Brown <span>(10)</span></a> 
                                </li>
                                <li>
                                    <a href="#"> Green <span>(6)</span></a> 
                                </li>
                                <li>
                                    <a href="#">Pink <span>(4)</span></a> 
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
					</div>
					<div class="col-12 col-lg-9">
						<h1 class="mb-3">Mainan Anak</h1>
						<BannerCarousel></BannerCarousel>
						<div class="product-list">
							<div class="mc-toolbar">
								<div class="display">
									<a href="#" class="active"><grid-icon size="2x" class=""></grid-icon></a>
									<a href="#"><list-icon size="2x" class=""></list-icon></a>
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
	</div>
</template>

<script>
	import BannerCarousel from '../components/BannerCarousel.vue'
	import RangeSlider from '@vueform/slider'
	import { GridIcon, ListIcon, StarIcon, ChevronDownIcon, ChevronUpIcon } from 'vue-feather-icons'

export default {

  name: 'categories',

  components:{
  	BannerCarousel,
  	GridIcon, 
  	ListIcon,
  	StarIcon,
  	ChevronDownIcon, 
  	ChevronUpIcon,
  	RangeSlider
  },

  data () {
	return {
		example2: {
      value: [20, 40]
    },
	}
  }
}
</script>

<style lang="scss" scoped>
.mc-product {

	.card-group {
    display: grid;
    grid-template-columns: repeat(5, minmax(170px, 1fr));
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
}
</style>










