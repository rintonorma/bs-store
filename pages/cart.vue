<template>
	<div>
		<section class="cart-container">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<Breadcrumbs class="mb-3"></Breadcrumbs>
					</div>
					<div class="col-12 col-lg-8">
						<div class="cart-product">
							<div class="shopping-cart-total py-4">
								<h5 class="text-dark">Keranjang Belanja</h5>
								<span class="lighter-text">Ada <span class="text-danger">3</span> produk di keranjang Anda</span>
							</div>
							<div class="table_desc">
								<div class="cart_page">
									<table>
										<thead>
											<tr>
												<th class="product_thumb"></th>
												<th class="product_name">Product</th>
												<th class="product-price">Price</th>
												<th class="product_quantity">Quantity</th>
												<th class="product_total">Total</th>
												<th class="product_remove"></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td class="product_thumb"><a href="#"><img src="@/static/img/product/baground-skip-hop-250x250.jpeg" alt=""></a></td>
												<td class="product_name"><a href="#">Apple iPhone 11 64GB, (PRODUCT)RED</a></td>
												<td class="product-price">Rp11.999.000</td>
												<td class="product_quantity"><input min="1" max="100" value="1" type="number"></td>
												<td class="product_total">Rp11.999.000</td>
												<td class="product_remove"><a href="#"><trash-2-icon size="1.5x" class=""></trash-2-icon></a></td>

											</tr>

											<tr>
												<td class="product_thumb"><a href="#"><img src="@/static/img/product/baground-skip-hop-250x250.jpeg" alt=""></a></td>
												<td class="product_name"><a href="#">Apple iPhone 11 64GB, (PRODUCT)RED</a></td>
												<td class="product-price">Rp11.999.000</td>
												<td class="product_quantity"><input min="1" max="100" value="1" type="number"></td>
												<td class="product_total">Rp11.999.000</td>
												<td class="product_remove"><a href="#"><trash-2-icon size="1.5x" class=""></trash-2-icon></a></td>

											</tr>
											<tr>
												<td class="product_thumb"><a href="#"><img src="@/static/img/product/baground-skip-hop-250x250.jpeg" alt=""></a></td>
												<td class="product_name"><a href="#">Apple iPhone 11 64GB, (PRODUCT)RED</a></td>
												<td class="product-price">Rp11.999.000</td>
												<td class="product_quantity"><input min="1" max="100" value="1" type="number"></td>
												<td class="product_total">Rp11.999.000</td>
												<td class="product_remove"><a href="#"><trash-2-icon size="1.5x" class=""></trash-2-icon></a></td>

											</tr>

										</tbody>
									</table>   
								</div>  
								<div class="cart_submit">
									<button type="submit" class="btn btn-outline-success">update cart</button>
								</div>      
							</div>
						</div>
					</div>
					<div class="col-12 col-lg-4">
						<div class="coupon-code">
							<h5 class="text-dark mb-3">Kode Kupon</h5>
							<div class="input-group mb-2">
								<input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter coupon code">
								<button type="submit" class="btn btn-success"><chevron-right-icon size="1.5x" class=""></chevron-right-icon></button>
							</div>
							<small class="form-text text-muted">Enter your coupon code if you have one.</small>
						</div>

						<div class="cart-summary">
							<h5 class="text-dark mb-3">Ringkasan</h5>
							<div class="cs-value">
								<div class="cs-value-row">
									<span>Subtotal</span>
									<span>Rp35.000.000</span>
								</div>
								<div class="cs-value-row">
									<span>Diskon</span>
									<span>-Rp0</span>
								</div>
							</div>
							<hr>
							<div class="cs-value font-weight-bold">
								<h5 class="cs-value-row text-dark">
									<span>Total Tagihan</span>
									<span>Rp35.000.000</span>
								</h5>
							</div>
							<div class="d-grid gap-2">
								<a href="./shipping.html" class="btn btn-warning btn-block">Lanjut ke Checkout</a>
								<a href="./login.html" class="btn btn-light btn-block">Login atau Registrasi</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
	import { ChevronRightIcon, Trash2Icon } from 'vue-feather-icons'
export default {

  name: 'cart',

  components:{
		ChevronRightIcon,
		Trash2Icon
	},

  data () {
	return {
		
	}
  }
}
</script>

<style lang="css" scoped>
</style>