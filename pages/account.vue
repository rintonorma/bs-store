<template>
	<div>
		<section id="account-page">
			<div class="container">
				<div class="row">
					<div class="col-12">
						<Breadcrumbs class="mb-3"></Breadcrumbs>
					</div>
				</div>
				<div class="main-wrapper">
	          <div class="sidebar">
	              <div class="card h-100">
	                  <div class="nav-side-menu">
	                      <div class="menu-bar">
	                          <div class="brand">
	                              <div class="section-profile">
	                                  <img src="assets/img/avatar.png" alt="" class="rounded-circle">
	                                  <div>
	                                      <h5>SASHA SANTIKA</h5>
	                                      <small class="text-muted">Member ID 000023841</small>
	                                  </div>
	                              </div>
	                          </div>
	                          <i class="fas fa-bars toggle-btn" data-toggle="collapse" data-target="#menu-content"></i>
	                      </div>
	                      <div class="menu-list">
	                          <ul id="menu-content" class="menu-content collapse out">
	                              <li>
	                                  <a href="./membership.html">
	                                      <div class="section-membership">
	                                          <div class="progress mb-2" style="height: 5px;">
	                                              <div class="progress-bar bg-pink" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
	                                          </div>
	                                          <div class="desc">Next tier: Lifetime Silver Elite </div>
	                                      </div>
	                                  </a>
	                              </li>
	                              <li class="active">
	                                  <a href="./index.html">
	                                      <img src="assets/img/icon/icon-dashboard.png" width="28px" class="mr-3"> Dashboard
	                                  </a>
	                              </li>
	                              <li>
	                                  <a href="./membership.html">
	                                      <img src="assets/img/icon/icon-membership.png" width="28px" class="mr-3"> Membership
	                                  </a>
	                              </li>
	                              <li>
	                                  <a href="./subscription.html">
	                                      <img src="assets/img/icon/icon-marketing.png" width="28px" class="mr-3"> Subscription
	                                  </a>
	                              </li>
	                              <li>
	                                  <a href="./transaction.html">
	                                      <img src="assets/img/icon/icon-receipt.png" width="28px" class="mr-3"> Transaction
	                                  </a>
	                              </li>
	                              <li>
	                                  <a href="./settings.html">
	                                      <img src="assets/img/icon/icon-settings.png" width="28px" class="mr-3"> Settings
	                                  </a>
	                              </li>
	                              <li>
	                                  <a href="#" class="text-danger">
	                                      <img src="assets/img/icon/icon-logout.png" width="28px" class="mr-3"> Logout
	                                  </a>
	                              </li>
	                          </ul>
	                      </div>
	                  </div>
	              </div>
	          </div>
	          <div class="main-content">
	              <div class="banner-slider">
	                  <div><img src="assets/img/banner/banner-1.png"></div>
	                  <div><img src="assets/img/banner/banner-1.png"></div>
	                  <div><img src="assets/img/banner/banner-1.png"></div>
	              </div>
	              <div class="reward-section">
	                  <h5 class="mb-3">Reedem Your Reward</h5>
	                  <div class="reward-slider">
	                      <div>
	                          <a href="./voucher-details.html">
	                              <img src="assets/img/rewards/rewards-1.png" class="mb-2">
	                              <div class="title">Voucher Pulang Pulang Glowing</div>
	                              <div class="desc">Berlaku Maret - April 2020</div>
	                          </a>
	                      </div>
	                      <div>
	                          <a href="./voucher-details.html">
	                              <img src="assets/img/rewards/rewards-2.png" class="mb-2">
	                              <div class="title">Voucher Paket Slimming</div>
	                              <div class="desc">Berlaku Sampai Juni 2020</div>
	                          </a>
	                      </div>
	                      <div>
	                          <a href="./voucher-details.html">
	                              <img src="assets/img/rewards/rewards-3.png" class="mb-2">
	                              <div class="title">Voucher Suntikan Penghancur Lemak Wajah</div>
	                              <div class="desc">Berlaku Sampai Juni 2020</div>
	                          </a>
	                      </div>
	                      <div>
	                          <a href="./voucher-details.html">
	                              <img src="assets/img/rewards/rewards-1.png" class="mb-2">
	                              <div class="title">Voucher Pulang Pulang Glowing</div>
	                              <div class="desc">Berlaku Maret - April 2020</div>
	                          </a>
	                      </div>
	                  </div>
	              </div>
	          </div>
	      </div>
			</div>
		</section>
		<MobileNav></MobileNav>
	</div>
</template>

<script>
export default {

  name: 'account',

  data () {
		return {

		}
  }
}
</script>

<style lang="scss" scoped>
.main-wrapper {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 -15px;

  .sidebar {
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    max-width: 25%;
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
	}

	.main-content {
    -ms-flex: 0 0 75%;
    flex: 0 0 75%;
    max-width: 75%;
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    margin-bottom: 30px;
	}
}
</style>










