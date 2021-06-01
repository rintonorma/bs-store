<template>
	<div>
		<Nuxt />
	</div>
</template>

<script>

export default {

  name: 'details-page',

  data () {
		return {

		}
  }
}
</script>

<style lang="scss">
#backpage{
  background: #007f82;
  color: #fff;
  padding: 15px 0;
  position: --webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 3;

  svg{
    width: 28px;
    height: 28px;
  }

  .safety-warning{
    svg{
      width: 18px;
      height: 18px;
    }
  }
}
.checkout-progress {
  background: #efefef;

  .cp-item {
    color: #999;
    width: 50%;
    text-align: center;
    padding: 20px;
    position: relative;

    .icon {
      margin-right: 10px;
    }

    .text{
      vertical-align: middle;
    }

    &:first-child:after {
      content: '';
      width: 15%;
      height: 3px;
      background: #999;
      display: block;
      position: absolute;
      right: 0;
      top: 50%;
    }

    &:last-child:before {
      content: '';
      width: 15%;
      height: 3px;
      background: #999;
      display: block;
      position: absolute;
      left: 0;
      top: 50%;
    }
  }

  .cp-item.active {
    color: #067f82;
  }
}
.checkout-desc-container {
  .card-header {
    font-size: 16px;
    font-weight: 500;
    color: #333;
    background: white;
    border-bottom: 1px solid #f5f5f5;
    padding: 20px;
  }

  .card-body {
    padding: 0px;

    label{
      padding: 15px 20px;
    }

    .listIcon {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .li-title {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        padding: 15px 20px;

        .li-img {
          margin-right: 15px;
          width: 32px;
          text-align: center;

          img {
            width: 32px;
          }
        }
      }

      &:hover {
        background: #f5f5f5;
      }

      &:last-child {
        margin-bottom: 20px;
      }

      .inactive {
        opacity: .5;
        pointer-events: none;
        cursor: default;
        text-decoration: none;
      }
    }
  }

  .address-list{
    ul{
      li{
        a{
          color: #343a40;
          display: flex;
          width: 100%;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #f5f5f5;

          &:hover{
            color: #067f82;
          }
        }
      }
    }
  }
}
.checkout-cta-container {
  padding: 20px;
  border-top: 1px solid #f5f5f5;

  .checkout-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
}
</style>