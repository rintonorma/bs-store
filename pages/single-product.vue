<template>
	<div>
		<section id="single-product">
			<div class="container">
				<div class="row">
					<div class="col-12 col-lg-5 mb-3">
						<ProductSlider ref="c1" :asNavFor="$refs.c2" :slidesToShow="1" :slidesToScroll="1" :arrows="false" @init="onInitCarousel">
							<div v-for="large in images.large">
								<a href="#" title="">
									<img :src="large" alt="">
								</a>
							</div>
						</ProductSlider>
						<ProductSlider v-if="largeShow" ref="c2" :asNavFor="$refs.c1" :slidesToShow="5" :slidesToScroll="1" :arrow="false" :focusOnSelect="true">
							<div v-for="thumb in images.thumb">
								<img :src="thumb" alt="">
							</div>
						</ProductSlider>
					</div>
					<div class="col-12 col-lg-7">
						<Breadcrumbs class="mb-3"></Breadcrumbs>
						<h1>Skip Hop Zoo Insulated Stainless Steel Bottle Termos Minum Anak 360 ml - Tersedia Pilihan Motif</h1>
						<div class="sp-status mb-2">
								<div class="rating">
										<a href="#" class="d-flex">
												<div class="value">4.7</div>
												<div class="stars">
													<star-icon size="1.5x" class="star-fill"></star-icon>
			                    <star-icon size="1.5x" class="star-fill"></star-icon>
			                    <star-icon size="1.5x" class="star-fill"></star-icon>
			                    <star-icon size="1.5x" class="star-fill"></star-icon>
			                    <star-icon size="1.5x" class="star-empty"></star-icon>
												</div>
												<span class="review-no d-none d-lg-block">41 ulasan</span>
										</a>
								</div>
								<div class="d-flex">
									<div class="sales">
											<span class="me-2">111</span>
											<span class="text-muted">Terjual</span>
									</div>
									<div class="share">
											<div class="d-block d-lg-none">
													<a href="" class="btn btn-sm btn-social btn-share">
															<share-2-icon size="1.5x" class=""></share-2-icon>
													</a>
											</div>
											<span class="text-muted me-2 d-none d-lg-block">Bagikan: </span>
											<div class="d-none d-lg-block">
													<a class="btn btn-sm btn-social btn-facebook" href="https://www.facebook.com/sharer/sharer.php?u=PAGE_URL" target="_blank" title="Share this post on Facebook">
															<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:serif="http://www.serif.com/" width="18px" height="18px" viewBox="0 0 50 50" version="1.1" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
															    <g transform="matrix(1,0,0,1,-2184.74,-1899.41)">
															        <g transform="matrix(0.111607,0,0,0.111607,2181.17,1895.69)">
															            <path d="M480,257.35C480,133.65 379.7,33.35 256,33.35C132.3,33.35 32,133.65 32,257.35C32,369.15 113.9,461.82 221,478.64L221,322.12L164.11,322.12L164.11,257.35L221,257.35L221,208C221,151.87 254.45,120.84 305.61,120.84C330.12,120.84 355.76,125.22 355.76,125.22L355.76,180.35L327.5,180.35C299.69,180.35 290.99,197.61 290.99,215.35L290.99,257.35L353.11,257.35L343.19,322.12L291,322.12L291,478.66C398.1,461.85 480,369.18 480,257.35Z" style="fill:rgb(255 255 255);"/>
															        </g>
															    </g>
															</svg>
													</a>
													<a class="btn btn-sm btn-social btn-twitter" href="https://twitter.com/intent/tweet?text=PAGE_TITLE&amp;url=PAGE_URL" target="_blank" title="Share this post on Twitter">
															<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:serif="http://www.serif.com/" width="18px" height="18px" viewBox="0 0 50 41" version="1.1" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
															    <g transform="matrix(1,0,0,1,-2295.55,-1906.74)">
															        <g transform="matrix(0.104167,0,0,0.104167,2293.88,1900.08)">
															            <path d="M496,109.5C477.995,117.323 458.944,122.478 439.45,124.8C459.931,112.807 475.345,93.74 482.78,71.2C463.411,82.526 442.255,90.473 420.22,94.7C401.476,75.056 375.462,63.95 348.31,64C293.89,64 249.85,107.4 249.85,160.9C249.811,168.342 250.664,175.761 252.39,183C173.522,179.303 99.764,142.496 49.39,81.7C40.646,96.44 36.021,113.262 36,130.4C36,164 53.53,193.7 80,211.1C64.318,210.728 48.955,206.577 35.22,199L35.22,200.2C35.22,247.2 69.22,286.3 114.22,295.2C105.758,297.456 97.038,298.599 88.28,298.6C82.066,298.611 75.866,298.008 69.77,296.8C82.28,335.3 118.69,363.3 161.82,364.1C126.78,391.104 83.738,405.707 39.5,405.6C31.646,405.588 23.8,405.121 16,404.2C61.007,432.939 113.34,448.145 166.74,448C348.1,448 447.18,300.3 447.18,172.2C447.18,168 447.07,163.8 446.87,159.7C466.101,146.021 482.738,129.021 496,109.5Z" style="fill:rgb(255 255 255);fill-rule:nonzero;"/>
															        </g>
															    </g>
															</svg>
													</a>
													<a class="btn btn-sm btn-social btn-whatsapp" href="https://wa.me/whatsappphonenumber/?text=urlencodedtext" target="_blank" title="Share this post on Whatsapp">
														<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:serif="http://www.serif.com/" width="18px" height="18px" viewBox="0 0 50 51" version="1.1" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
														    <g transform="matrix(1,0,0,1,-2509.34,-1766.66)">
														        <g transform="matrix(0.111607,0,0,0.111607,2505.77,1763.08)">
														            <path d="M414.73,97.1C372.918,55.268 316.084,31.82 256.94,32C134,32 33.92,131.58 33.87,254C33.816,292.978 44.092,331.283 63.65,365L32,480L150.25,449.13C182.98,466.861 219.625,476.143 256.85,476.13L256.94,476.13C379.87,476.13 479.94,376.54 480,254.13C480.15,195.181 456.621,138.574 414.73,97.1ZM256.94,438.66L256.86,438.66C223.676,438.67 191.089,429.787 162.5,412.94L155.73,408.94L85.56,427.26L104.29,359.17L99.88,352.17C81.326,322.795 71.492,288.744 71.53,254C71.53,152.27 154.74,69.5 257.01,69.5C358.487,69.319 442.143,152.663 442.34,254.14C442.3,355.88 359.13,438.66 256.94,438.66ZM358.63,300.47C353.06,297.69 325.63,284.27 320.55,282.42C315.47,280.57 311.72,279.64 308.01,285.2C304.3,290.76 293.61,303.2 290.36,306.95C287.11,310.7 283.86,311.11 278.29,308.33C272.72,305.55 254.75,299.7 233.46,280.8C216.89,266.09 205.71,247.93 202.46,242.38C199.21,236.83 202.11,233.82 204.9,231.06C207.41,228.57 210.47,224.58 213.26,221.34C216.05,218.1 216.98,215.78 218.83,212.08C220.68,208.38 219.76,205.14 218.37,202.37C216.98,199.6 205.83,172.29 201.19,161.18C196.66,150.36 192.07,151.83 188.65,151.66C185.4,151.5 181.65,151.46 177.96,151.46C172.26,151.608 166.872,154.125 163.1,158.4C157.99,163.96 143.59,177.4 143.59,204.68C143.59,231.96 163.59,258.36 166.35,262.06C169.11,265.76 205.65,321.79 261.56,345.82C271.942,350.266 282.55,354.165 293.34,357.5C306.69,361.72 318.84,361.13 328.44,359.7C339.15,358.11 361.44,346.28 366.07,333.32C370.7,320.36 370.71,309.26 369.32,306.95C367.93,304.64 364.21,303.24 358.63,300.47Z" style="fill:rgb(255 255 255);"/>
														        </g>
														    </g>
														</svg>
													</a>
											</div>
									</div>
								</div>
						</div>
						<div class="sp-pricing mb-3">
                <h2>Rp11.999.000</h2>
                <span class="discount">Rp13.499.000</span>
                <span class="disc-value">Hemat 26%</span>
            </div>
            <div class="sp-spec mb-3">
                <ul class="list-unstyled">
                    <li>
                        <map-pin-icon size="1x" class="me-1"></map-pin-icon>
                        <span>Dikirim dari</span>
                        <span class="text-dark fw-bold">Jakarta Timur</span>
                    </li>
                    <li>
                        <feather-icon size="1x" class="me-1"></feather-icon>
                        <span>Berat</span>
                        <span class="text-dark fw-bold">1.000gr</span>
                    </li>
                    <li>
                        <umbrella-icon size="1x" class="me-1"></umbrella-icon>
                        <span>Asuransi Pengiriman:</span>
                        <span class="text-dark fw-bold">Opsional</span>
                    </li>
                </ul>
            </div>
            <div class="sp-cart">
              <form>
              	<div class="row mb-3">
              		<div class="col-12 col-lg-12">
              			<div class="form-group mb-2">
                      <div class="d-flex justify-content-between align-items-center">
                          <label class="text-secondary mb-1">Warna</label>
                          <span class="text-muted" style="font-size: 11px;">5 pilihan</span>
                      </div>
                      <select class="form-control" id="selectColor">
                        <option>Black</option>
                        <option>Silver</option>
                        <option>Gold</option>
                        <option>Red</option>
                        <option>White</option>
                      </select>
                  	</div>
              		</div>
              		<div class="col-12 col-lg-6">
              			<div class="form-group mb-2">
                      <label class="text-secondary mb-1">Qty</label>
                      <div class="d-flex align-items-center">
                          <div class="input-group sp-qty">
                            <button type="button" class="quantity-left-minus btn bg-light border"  data-type="minus" data-field="">
                                <minus-icon size="1.5x" class=""></minus-icon>
                            </button>
                            <input type="text" id="quantity" name="quantity" class="form-control input-number" value="1" min="1" max="100">
                            <button type="button" class="quantity-right-plus btn bg-success text-white border" data-type="plus" data-field="">
                                <plus-icon size="1.5x" class=""></plus-icon>
                            </button>
                          </div>
                          <div class="ms-3 text-success">
                              <check-icon size="1.5x" class=""></check-icon> Stok tersedia
                          </div>
                      </div>
                  	</div>
              		</div>
              	</div>
                <div class="cta">
                  <a href="./cart.html" class="btn btn-warning p-3 mb-2"><i class="fas fa-shopping-cart"></i> Tambah ke Keranjang</a>
                  <a href="#" class="btn btn-outline-secondary p-3 mb-2"><heart-icon size="1.5x" class=""></heart-icon> <span class="d-none d-lg-inline-block">Favoritkan</span></a>
                </div>
              </form>
            </div>
            <div class="sp-info">
                <div><rotate-cw-icon size="1.5x" class="text-success me-1"></rotate-cw-icon> 7 Hr Pengembalian</div>
                <div><shield-icon size="1.5x" class="text-success me-1"></shield-icon> 100% ori</div>
                <div><truck-icon size="1.5x" class="text-success me-1"></truck-icon> Gratis Ongkir</div>
            </div>
					</div>
					<div class="col-12 col-lg-12">
            <div class="info-product">
                <div class="nav nav-tabs sticky-top toolbar tabbar">
                    <div class="toolbar-inner">
                      <a href="#tab-1" class="tab-link tab-link-active">Spesifikasi</a>
                      <a href="#tab-2" class="tab-link">Deskripsi</a>
                      <a href="#tab-3" class="tab-link">Ulasan</a>
                    </div>
                </div>
                <div class="tabs-swipeable-wrap">
                    <div class="tabs">
                      <div id="tab-1" class="page-content tab tab-active">
                        <div class="block">
                            <h5 class="title text-dark mb-3">Spesifikasi Produk</h5>
                            <div class="spec-content">
                                <div class="sc-item">
                                    <label>Kategori</label>
                                    <div class="d-flex align-items-center flex-wrap">
                                        <a href="#">Gadget2</a>
                                        <chevron-right-icon size="1.5x" class="mx-1"></chevron-right-icon>
                                        <a href="#">Mobile Phones</a>
                                        <chevron-right-icon size="1.5x" class="mx-1"></chevron-right-icon>
                                        <a href="#">iPhone</a>
                                        <chevron-right-icon size="1.5x" class="mx-1"></chevron-right-icon>
                                        <a href="#">iPhone 11</a>
                                    </div>
                                </div>
                                <div class="sc-item">
                                    <label>Merek</label>
                                    <a href="#">Apple</a>
                                </div>
                                <div class="sc-item">
                                    <label>Model HP</label>
                                    <div>iPhone 11</div>
                                </div>
                                <div class="sc-item">
                                    <label>Kapasitas</label>
                                    <div>64GB</div>
                                </div>
                                <div class="sc-item">
                                    <label>Tipe Kartu SIM</label>
                                    <div>Nano</div>
                                </div>
                                <div class="sc-item">
                                    <label>Kamera Depan</label>
                                    <div>12MP</div>
                                </div>
                                <div class="sc-item">
                                    <label>Kamera Belakang</label>
                                    <div>12MP</div>
                                </div>
                                <div class="sc-item">
                                    <label>RAM</label>
                                    <div>4GB</div>
                                </div>
                                <div class="sc-item">
                                    <label>Ukuran Layar</label>
                                    <div>6.1</div>
                                </div>
                                <div class="sc-item">
                                    <label>Tipe Garansi</label>
                                    <div>Garansi Resmi</div>
                                </div>
                                <div class="sc-item">
                                    <label>Warna</label>
                                    <div>Red</div>
                                </div>
                                <div class="sc-item">
                                    <label>Dimensi</label>
                                    <div>16.8 x 9.3 x 5.2</div>
                                </div>
                                <div class="sc-item">
                                    <label>Stok</label>
                                    <div>23</div>
                                </div>
                                <div class="sc-item">
                                    <label>Dikirim Dari</label>
                                    <div>KOTA JAKARTA TIMUR - KAMP. MAKASAR, DKI JAKARTA, ID</div>
                                </div>
                            </div>
                        </div>
                      </div>
                      <div id="tab-2" class="page-content tab">
                        <div class="block">
                            <h5 class="title text-dark mb-3">Deskripsi Produk</h5>
                            <p>Rekam video 4K, potret yang indah, dan lanskap yang lebih luas dengan sistem kamera ganda yang sepenuhnya baru. Ambil foto berpencahayaan rendah terbaik dengan mode Malam. Lihat warna yang begitu nyata dalam foto, video, dan game di layar Liquid Retina 6,1 inci. (3) Nikmati performa tak tertandingi dengan A13 Bionic untuk game, augmented reality (AR), dan fotografi. Lakukan lebih banyak hal tanpa perlu sering mengisi daya dengan kekuatan baterai sepanjang hari. (2) Dan nikmati ketenangan dengan ketahanan air hingga 2 meter selama 30 menit.(1)</p>
                            <p>Poin-poin fitur</p>
                            <ul>
                                <li><p>• Layar Liquid Retina HD LCD 6,1 inci(3)</p></li>
                                <li><p>• Tahan air dan debu (2 meter hingga selama 30 menit, IP68)(1)</p></li>
                                <li><p>• Sistem kamera ganda dengan kamera Ultra Wide dan Wide 12 MP; mode Malam, mode Potret, dan video  4K hingga 60 fps</p></li>
                                <li><p><p>• Kamera depan TrueDepth 12 MP dengan mode Potret, video 4K, dan video gerakan lambat</p></li>
                                <li><p>• Face ID untuk autentikasi aman</p></li>
                                <li><p>• Chip A13 Bionic dengan Neural Engine generasi ketiga</p></li>
                                <li><p>• Kemampuan isi daya cepat(4)</p></li>
                                <li><p>• Pengisian daya nirkabel(4)</p></li>
                                <li><p>• iOS 13 dengan Mode Gelap, alat baru untuk pengeditan foto dan video, dan fitur privasi baru</p></li>
                            </ul>
                        </div>
                      </div>
                      <div id="tab-3" class="page-content tab">
                        <div class="block">
                            <h5 class="title text-dark mb-3">Ulasan Produk</h5>
                            <div class="row">
                                <div class="col-12 col-lg-3">
                                    <div class="rating-block">
                                        <h2 class="text-dark">4.7 <small>/ 5</small></h2>
                                        <div class="stars">
                                            <star-icon size="1.5x" class="star-fill"></star-icon>
												                    <star-icon size="1.5x" class="star-fill"></star-icon>
												                    <star-icon size="1.5x" class="star-fill"></star-icon>
												                    <star-icon size="1.5x" class="star-fill"></star-icon>
												                    <star-icon size="1.5x" class="star-empty"></star-icon>
                                        </div>
                                        <div class="text-muted mt-2">41 ulasan</div>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                      <div class="d-flex">
                                        <span class="me-2">5</span>
                                        <star-icon size="1.5x" class="star-fill"></star-icon>
                                      </div>
                                      <div class="progress rounded-pill w-75" style="height: 10px;">
                                        <div class="progress-bar rounded-pill bg-warning" role="progressbar" style="width: 100%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                      </div>
                                      <div>1</div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                      <div class="d-flex">
                                        <span class="me-2">4</span>
                                        <star-icon size="1.5x" class="star-fill"></star-icon>
                                      </div>
                                      <div class="progress rounded-pill w-75" style="height: 10px;">
                                        <div class="progress-bar rounded-pill bg-warning" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                      </div>
                                      <div>1</div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                      <div class="d-flex">
                                        <span class="me-2">3</span>
                                        <star-icon size="1.5x" class="star-fill"></star-icon>
                                      </div>
                                      <div class="progress rounded-pill w-75" style="height: 10px;">
                                        <div class="progress-bar rounded-pill bg-warning" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                      </div>
                                      <div>0</div>
                                    </div>
                                </div>
                                <div class="col-12 col-lg-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                      <div class="d-flex">
                                        <span class="me-2">2</span>
                                        <star-icon size="1.5x" class="star-fill"></star-icon>
                                      </div>
                                      <div class="progress rounded-pill w-75" style="height: 10px;">
                                        <div class="progress-bar rounded-pill bg-warning" role="progressbar" style="width: 100%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                      </div>
                                      <div>1</div>
                                    </div>
                                    <div class="d-flex justify-content-between align-items-center">
                                      <div class="d-flex">
                                        <span class="me-2">1</span>
                                        <star-icon size="1.5x" class="star-fill"></star-icon>
                                      </div>
                                      <div class="progress rounded-pill w-75" style="height: 10px;">
                                        <div class="progress-bar rounded-pill bg-warning" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                      </div>
                                      <div>1</div>
                                    </div>
                                </div>          
                            </div>  
                            <hr> 
                            <div class="row align-items-center">
                                <div class="col-12 col-lg-6">
                                    <h5 class="review-title">Skip Hop Zoo Insulated Stainless Steel Bottle Termos Minum Anak 360 ml - Tersedia Pilihan Motif</h5>
                                </div>
                                <div class="col-12 col-lg-6">
                                    <div class="input-group review-sort ms-auto">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text">Filter Ulasan</label>
                                        </div>
                                        <select class="form-control">
                                            <option>Semua Bintang</option>
                                            <option>Bintang 5</option>
                                            <option>Bintang 4</option>
                                            <option>Bintang 3</option>
                                            <option>Bintang 2</option>
                                            <option>Bintang 1</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="review-list">
                                        <div class="review-item">
                                            <div class="review-item-header">
                                                <div class="stars mb-2">
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
                                                </div>
                                                <div class="username mb-2">r*****_</div>
                                                <small class="text-muted">13 November 2020, 15:58</small>
                                            </div>
                                            <div class="review-item-content">
                                                <p class="m-0">Terimakasih gadget2, semoga awet dah pokoknya. Cucok 😇🤗🥰👍🏻👍🏻</p>
                                                <small class="text-muted">Warna: <span>Black</span></small>
                                            </div>
                                        </div>
                                        <div class="review-item">
                                            <div class="review-item-header">
                                                <div class="stars mb-2">
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                </div>
                                                <div class="username mb-2">eminadhif</div>
                                                <small class="text-muted">13 November 2020, 15:58</small>
                                            </div>
                                            <div class="review-item-content">
                                                <p class="m-0">Alhamdulillah barang nyampe dg selamat🤭,packingnyaa mantap,pengemasan dan pengiriman cepat,barang ori thanks seller n shopee</p>
                                                <small class="text-muted">Warna: <span>Black</span></small>
                                            </div>
                                        </div>
                                        <div class="review-item">
                                            <div class="review-item-header">
                                                <div class="stars mb-2">
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
                                                </div>
                                                <div class="username mb-2">Jo*****</div>
                                                <small class="text-muted">13 November 2020, 15:58</small>
                                            </div>
                                            <div class="review-item-content">
                                                <p class="m-0">Mantab bos!</p>
                                                <small class="text-muted">Warna: <span>Black</span></small>
                                            </div>
                                        </div>
                                        <div class="review-item">
                                            <div class="review-item-header">
                                                <div class="stars mb-2">
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
                                                </div>
                                                <div class="username mb-2">Jo*****</div>
                                                <small class="text-muted">13 November 2020, 15:58</small>
                                            </div>
                                            <div class="review-item-content">
                                                <p class="m-0">Mantab bos!</p>
                                                <small class="text-muted">Warna: <span>Black</span></small>
                                            </div>
                                        </div>
                                        <div class="review-item">
                                            <div class="review-item-header">
                                                <div class="stars mb-2">
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
                                                </div>
                                                <div class="username mb-2">Jo*****</div>
                                                <small class="text-muted">13 November 2020, 15:58</small>
                                            </div>
                                            <div class="review-item-content">
                                                <p class="m-0">Mantab bos!</p>
                                                <small class="text-muted">Warna: <span>Black</span></small>
                                            </div>
                                        </div>
                                        <div class="review-item">
                                            <div class="review-item-header">
                                                <div class="stars mb-2">
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star checked"></span>
                                                    <span class="fa fa-star"></span>
                                                    <span class="fa fa-star"></span>
                                                </div>
                                                <div class="username mb-2">Jo*****</div>
                                                <small class="text-muted">13 November 2020, 15:58</small>
                                            </div>
                                            <div class="review-item-content">
                                                <p class="m-0">Mantab bos!</p>
                                                <small class="text-muted">Warna: <span>Black</span></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
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
                </div>
            </div>
        	</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import Breadcrumbs from '../components/Breadcrumbs.vue'
	import ProductSlider from 'vue-slick-carousel'
	import { StarIcon, MapPinIcon, FeatherIcon, UmbrellaIcon, MinusIcon, PlusIcon, CheckIcon, HeartIcon, RotateCwIcon, ShieldIcon, TruckIcon, ChevronRightIcon, Share2Icon } from 'vue-feather-icons'

export default {

	name: 'single-product',

	components: {
		Breadcrumbs,
		ProductSlider,
		StarIcon,
		MapPinIcon,
		FeatherIcon,
		UmbrellaIcon,
		MinusIcon,
		PlusIcon,
		CheckIcon,
		HeartIcon,
		RotateCwIcon,
		ShieldIcon,
		TruckIcon,
		ChevronRightIcon,
    Share2Icon
	},

	data () {
		return {
			largeShow: false,
			images: {
				thumb: [
					'/img/product/baground-skip-hop-250x250.jpeg',
					'/img/product/252385_2-1000x1000-250x250.jpeg',
				],
				large: [
					'/img/product/baground-skip-hop-250x250.jpeg',
					'/img/product/252385_2-1000x1000-250x250.jpeg',
				]
			}
		}
	},

	methods: {
		onInitCarousel () {
			this.largeShow = true
		}
	}
}
</script>

<style lang="scss" scoped>
#single-product{
	h1{
		font-size: 28px;
		line-height: 1.4;
	}
}
.sp-status {
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;

  .rating {
    font-size: 16px;
    display: flex;
    color: #999;

    .value {
	    margin-right: 5px;
	    color: #f1300e;
		}

		.stars {
	    margin-right: 5px;
	    color: #999;

	    .star-fill{
	    	width: 15px;
	    }

	    .star-empty{
	    	width: 15px;
	    }
		}
	}

	.sales {
    margin-left: 15px;
    display: flex;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    align-items: center;
	}

	.share {
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    align-items: center;
    margin-left: 15px;

    &:before {
	    content: '';
	    width: 1px;
	    height: 20px;
	    background: #999;
	    margin-right: 15px;
		}
	}
}
.sp-pricing{
  display: flex;
  align-items: center;
  background: #fff;

  h2{
    margin-right: 15px;
    color: #f13010;
	}

	.discount{
    font-size: 16px;
    text-decoration: line-through;
    color: #999;
	}

	.disc-value {
    background: #f1300e;
    font-size: 12px;
    padding: 5px 10px;
    color: #fff;
    margin: 0 15px;
    border-radius: 10px;
	}
}
.sp-spec {
  font-size: 14px;
  color: #555;

  li {
    padding: 5px 0;
	}
}
.sp-cart {
	margin-bottom: 15px;

  .sp-qty {
    width: 150px;
	}

  .cta{
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 15px;
    align-items: center;
  }
}
.sp-info {
  background: #fff;
  color: #555;
  font-size: 12px;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  border-top: 1px solid #f5f5f5;
}
.info-product {
  background: #fff;
  padding: 20px 0;
  margin: 20px 0;

  .sticky-top {
    top: 120px;
    background: #fff;
    z-index: 4;
	}

	.nav-tabs {
    margin: 0 0 15px 0;
    border: 0;

    .tab-link-active {
	    color: #069699;
	    -webkit-box-shadow: inset 0px -3px 0px 0px #069699;
	    -moz-box-shadow: inset 0px -3px 0px 0px #069699;
	    box-shadow: inset 0px -3px 0px 0px #069699;
	    padding: 15px;
		}

		.tab-link {
	    padding: 15px;
      font-size: 18px;
		}
	}

	.toolbar-inner {
    padding: 15px 0;
    margin: 0 auto;
	}

	.title {
    background: #f5f5f5;
    padding: 10px 15px;
	}

	.spec-content {
    font-size: 14px;

    .sc-item {
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: -moz-box;
	    display: -ms-flexbox;
	    display: flex;
	    margin-bottom: 1.125rem;

	    label {
		    color: rgba(0,0,0,.4);
		    font-size: .875rem;
		    width: 7.25rem;
		    margin-right: 2.5rem;
		    display: table;
			}
		}
	}
}
.review-title{
  color: #555;
}

.review-sort{
  width: 300px;

  .input-group-text{
    background: transparent;
    border: none;
  }
}

.review-list{
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  padding: 20px 0;

  .review-item{
    display: flex;
    align-items: baseline;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
    position: relative;
    width: 100%;
    min-height: 1px;
    padding: 15px;
    overflow: hidden;

    &:after {
      content: '';
      bottom: 0;
      width: 95%;
      height: 2px;
      position: absolute;
      border-bottom: 1px solid #dee2e6;
    }

    .review-item-header{
      margin-right: 15px;
      font-size: 14px;
      width: 30%;

      .username{
        font-weight: 700;
      }
    }

    .review-item-content{
      width: 70%;
    }
  }
}

@media screen and (max-width: 480px){
  .info-product{
    .sticky-top{
      top: 70px;
    }
  }
  .sp-pricing{
    flex-direction: column;
    align-items: flex-start;

    .discount{
      margin-bottom: 10px;
    }

    .disc-value{
      margin: 0;
    }
  }
  .sp-cart {
    .cta{
      display: grid;
      grid-template-columns: 1fr auto;
    }
  }
  .review-title{
    margin-bottom: 10px;
  }
  .review-list{
    margin: 0;

    .review-item{
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
      max-width: 100%;
      display: block;
      padding-left: 0;
      padding-right: 0;

      &:after{
        width: 100%;
      }

      .review-item-header {
        margin-right: 0;
        margin-bottom: 15px;
        font-size: 14px;
        width: 100%;
      }

      .review-item-content{
        width: 100%;
      }
    }
  }
}

</style>












