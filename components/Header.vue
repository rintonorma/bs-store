<template>
  <div>

    <div id="mainMenu" class="position-relative">
      <!-- navbar main -->
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">
          <div class="w-100 d-flex align-items-center justify-content-between">
            <div class="col-7 col-lg-3 text-left p-0">
              <a href="#" title="">
                <img src="@/static/img/logo/logo2.png" alt="Baby Shop | Toko Online Susu, Mainan Anak, Baju Bayi, Perlengkapan Bayi" class="logo">
              </a>
            </div>
            <div class="col-2 col-lg-6 d-none d-lg-block">
              <div class="input-group">
                <input type="text" class="search-query form-control" placeholder="Cari Produk, Merek atau Kategori">
                <span class="input-group-append">
                    <button class="btn btn-light search-query" type="button"><search-icon size="1x" class="" ></search-icon></button>
                </span>
              </div>
            </div>
            <div class="col-5 col-lg-3 text-right p-0 d-flex justify-content-end align-items-center">
              <a href="./login.html" title="" class="btn registerBtn"><user-icon size="1x" class="" ></user-icon> Masuk / Daftar</a>
              <span class="position-relative">
                <a data-toggle="collapse" href="#panel-login" id="searchCollapse" aria-expanded="false" class="btn d-inline d-lg-none collapsed">
                    <search-icon size="1.5x" class="text-white" ></search-icon>
                </a>
                <!-- Search Form -->
                <div class="searchForm">
                    <div class="container">
                        <div id="panel-login" class="panel-collapse collapse" aria-expanded="false" style="">
                            <div class="panel-body">
                                <div class="input-group col-md-12">
                                    <input type="text" class="search-query form-control" placeholder="Cari Produk, Merek atau Kategori">
                                    <span class="input-group-append">
                                        <button class="btn btn-light" type="button">
                                            <search-icon size="1x" class="" ></search-icon>
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </span>
              <span class="position-relative">
                <a href="#" title="" class="btn cartBtn" id="cart">
                    <shopping-cart-icon size="1.5x" class=""></shopping-cart-icon><span class="badge bg-danger position-absolute">3</span>
                </a>
                <!-- Shopping Cart -->
                <div class="shopping-cart" style="display: none;">
                  <div class="">
                    <div class="shopping-cart-header">
                      <div class="shopping-cart-total">
                        <span class="lighter-text">Ada <span class="text-danger">3</span> produk di keranjang Anda</span>
                      </div>
                    </div> <!--end shopping-cart-header -->

                    <ul class="shopping-cart-items">
                        <li>
                            <img src="~/static/img/product/product8.jpeg" alt="produk 1" class="img-fluid">
                            <div class="text-left">
                                <span class="item-name">Apple iPhone 11 64GB, (PRODUCT)RED</span>
                                <span class="item-quantity">Qty: 1</span>
                                <span class="item-price">Rp11.999.000</span>
                            </div>
                            <div>
                                <a href="#" class="btn btn-sm"><svg class="svg-inline--fa fa-times fa-w-11" aria-hidden="true" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" data-fa-i2svg=""><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg><!-- <i class="fas fa-times"></i> --></a>
                            </div>
                        </li>
                        <li>
                            <img src="~/static/img/product/product8.jpeg" alt="produk 1" class="img-fluid">
                            <div class="text-left">
                                <span class="item-name">Apple iPhone 11 64GB, (PRODUCT)RED</span>
                                <span class="item-quantity">Qty: 1</span>
                                <span class="item-price">Rp11.999.000</span>
                            </div>
                            <div>
                                <a href="#" class="btn btn-sm"><svg class="svg-inline--fa fa-times fa-w-11" aria-hidden="true" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" data-fa-i2svg=""><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg><!-- <i class="fas fa-times"></i> --></a>
                            </div>
                        </li>
                        <li>
                            <img src="~/static/img/product/product8.jpeg" alt="produk 1" class="img-fluid">
                            <div class="text-left">
                                <span class="item-name">Apple iPhone 11 64GB, (PRODUCT)RED</span>
                                <span class="item-quantity">Qty: 1</span>
                                <span class="item-price">Rp11.999.000</span>
                            </div>
                            <div>
                                <a href="#" class="btn btn-sm"><svg class="svg-inline--fa fa-times fa-w-11" aria-hidden="true" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" data-fa-i2svg=""><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg><!-- <i class="fas fa-times"></i> --></a>
                            </div>
                        </li>
                    </ul>

                    <div class="shopping-cart-subtotal">
                        <div>Subtotal</div>
                        <div>Rp35.000.000</div>
                    </div>

                    <a href="#" class="btn btn-warning btn-block mb-1">Lanjut ke Checkout</a>
                    <a href="./cart.html" class="btn btn-outline-warning btn-block">Lihat Keranjang</a>
                  </div> <!--end shopping-cart -->
                </div> <!--end container -->
            </span>
            </div>
          </div>
        </div>
      </nav>

      <nav class="navbar navbar-expand-lg navbar-light bs-megamenu">
        <button type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler">
                <span class="navbar-toggler-icon"></span>
            </button>
        <div id="navbarContent" class="collapse navbar-collapse">
          <ul class="navbar-nav mx-auto">
            <!-- Megamenu-->
            <li class="nav-item dropdown megamenu"><a id="megamneu" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle fw-bold text-uppercase text-white">Susu</a>
              <div aria-labelledby="megamenu" class="dropdown-menu border-0 p-0 m-0">
                <div class="container">
                  <div class="row bg-white rounded-0 m-0 shadow-sm">
                    <div class="col-lg-7 col-xl-8">
                      <div class="p-4">
                        <div class="row">
                          <div class="col-lg-6 mb-4">
                            <h6 class="fw-bold text-uppercase">MegaMenu heading</h6>
                            <ul class="list-unstyled">
                              <li class="nav-item"><a href="" class="nav-link text-small pb-0">Unique Features</a></li>
                              <li class="nav-item"><a href="" class="nav-link text-small pb-0 ">Image Responsive</a></li>
                              <li class="nav-item"><a href="" class="nav-link text-small pb-0 ">Auto Carousel</a></li>
                              <li class="nav-item"><a href="" class="nav-link text-small pb-0 ">Newsletter Form</a></li>
                            </ul>
                          </div>
                          <div class="col-lg-6 mb-4">
                            <h6 class="fw-bold text-uppercase">MegaMenu heading</h6>
                            <ul class="list-unstyled">
                              <li class="nav-item"><a href="" class="nav-link text-small pb-0 ">Unique Features</a></li>
                              <li class="nav-item"><a href="" class="nav-link text-small pb-0 ">Image Responsive</a></li>
                              <li class="nav-item"><a href="" class="nav-link text-small pb-0 ">Auto Carousel</a></li>
                              <li class="nav-item"><a href="" class="nav-link text-small pb-0 ">Newsletter Form</a></li>
                            </ul>
                          </div>
                          <div class="col-lg-6 mb-4">
                            <h6 class="fw-bold text-uppercase">MegaMenu heading</h6>
                            <ul class="list-unstyled">
                              <li class="nav-item"><a href="" class="nav-link text-small pb-0 ">Unique Features</a></li>
                              <li class="nav-item"><a href="" class="nav-link text-small pb-0 ">Image Responsive</a></li>
                              <li class="nav-item"><a href="" class="nav-link text-small pb-0 ">Auto Carousel</a></li>
                              <li class="nav-item"><a href="" class="nav-link text-small pb-0 ">Newsletter Form</a></li>
                            </ul>
                          </div>
                          <div class="col-lg-6 mb-4">
                            <h6 class="fw-bold text-uppercase">MegaMenu heading</h6>
                            <ul class="list-unstyled">
                              <li class="nav-item"><a href="" class="nav-link text-small pb-0 ">Unique Features</a></li>
                              <li class="nav-item"><a href="" class="nav-link text-small pb-0 ">Image Responsive</a></li>
                              <li class="nav-item"><a href="" class="nav-link text-small pb-0 ">Auto Carousel</a></li>
                              <li class="nav-item"><a href="" class="nav-link text-small pb-0 ">Newsletter Form</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-5 col-xl-4 px-0 d-none d-lg-block" style="background: center center url(https://therichpost.com/wp-content/uploads/2018/01/vuejs.png)no-repeat; background-size: cover;"></div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item"><a href="" class="nav-link fw-bold text-uppercase text-white">Mainan Anak</a></li>
            <li class="nav-item"><a href="" class="nav-link fw-bold text-uppercase text-white">Baju Bayi</a></li>
            <li class="nav-item"><a href="" class="nav-link fw-bold text-uppercase text-white">Perlengkapan Bayi</a></li>
          </ul>
        </div>
      </nav>
    </div>

    

  </header>

  </div>
</template>

<script>
import { SearchIcon, ShoppingCartIcon, MenuIcon, UserIcon } from 'vue-feather-icons'

export default {

  name: 'Header',

  components: {
    SearchIcon,
    ShoppingCartIcon,
    MenuIcon,
    UserIcon
  },

  mounted(){
    $("#cart").on("click", function() {
      $(".shopping-cart").fadeToggle( "fast");
    });
  },

  data () {
    return {

    }
  }

}
</script>

<style lang="scss" scoped>
.searchForm{
  background: #f8f9fa;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  position: absolute;
  width: 100vw;
  z-index: 10;
  top: 45px;
  right: 0;
  transform: translateX(56px);
}
.search-query{
  background: #f8f9fa;
  border: 0;
  border-radius: 50px;
  padding: 0 15px;

  &:focus{
    background: #f8f9fa;
  }
}
.input-group-append{
  .btn{
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    line-height: 40px;
  }
}
.bs-megamenu{
  background: #069699;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);

  &::after{
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:serif='http://www.serif.com/' width='100%25' height='100%25' viewBox='0 0 28 8' version='1.1' xml:space='preserve' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;'%3E%3Cg transform='matrix(1,0,0,1,-2628.6,-1052.12)'%3E%3Cg transform='matrix(0.14669,0,0,0.14669,2247.4,897.788)'%3E%3Cpath d='M2750.24,1052.13C2749.28,1081.79 2724.89,1105.58 2695,1105.58C2665.1,1105.58 2640.72,1081.79 2639.76,1052.13L2750.24,1052.13Z' style='fill:rgb(6,150,153);'/%3E%3C/g%3E%3Cg transform='matrix(0.540232,0,0,0.540232,1208.55,483.732)'%3E%3Cpath d='M2680.43,1052.12L2628.6,1052.12L2628.6,1052.14C2628.75,1052.13 2628.9,1052.13 2629.06,1052.13C2634.35,1052.13 2639,1054.87 2641.68,1059.02L2667.84,1059.02C2670.51,1054.88 2675.15,1052.14 2680.43,1052.13L2680.43,1052.12Z' style='fill:rgb(6,150,153);'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    width: 100%;
    height: 10px;
    content: '';
    position: absolute;
    display: block;
    bottom: -10px;
    z-index: 0;
  }
}
.megamenu {
  position: static!important;
}
.megamenu .dropdown-menu {
  background: none;
  border: none;
  width: 100%;
}
@media (max-width: 767px){
  .bs-megamenu{
    position: absolute;
    top: 0;
    background: transparent;
    height: 100%;
    box-shadow: none;

    &::after{
      display: none;
    }

    .navbar-toggler{
      .navbar-toggler-icon{
        width: 1em;
      }
    }
    .navbar-toggler[aria-expanded="true"]{
      .navbar-toggler-icon{
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' stroke='white' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round' class='css-i6dzq1'%3E%3Cline x1='18' y1='6' x2='6' y2='18'%3E%3C/line%3E%3Cline x1='6' y1='6' x2='18' y2='18'%3E%3C/line%3E%3C/svg%3E");
        transform: translateY(0px); 
        width: 1.5em; 
      }
    }
  }
}
</style>