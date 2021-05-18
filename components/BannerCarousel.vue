<template>
	<div>
		<div id="banner-carousel">
			<VCarousel v-bind="BCSettings">
				<div v-for="thumb in images.thumb">
					<a href="#"><h3><img :src="thumb" alt=""></h3></a>
				</div>
			</VCarousel>
		</div>
	</div>
</template>

<script>
	import VCarousel from 'vue-slick-carousel'

export default {

  name: 'BannerCarousel',

  components: { 
		VCarousel, 
  },

  data () {
	return {
		images: {
			thumb: [
				'/img/banner/banner-1.jpg',
				'/img/banner/banner-2.jpg',
				'/img/banner/banner-3.jpg',
				'/img/banner/banner-4.jpg',
				'/img/banner/banner-1.jpg',
				'/img/banner/banner-2.jpg',
				'/img/banner/banner-3.jpg',
				'/img/banner/banner-4.jpg',
			],
		},
		BCSettings: {
			"autoplay": true,
			"autoplaySpeed": 10000,
	  	"dots": true,
		  "infinite": true,
		  "speed": 500,
		  "slidesToShow": 4,
		  "slidesToScroll": 1,
		  "responsive": [
			{
			  "breakpoint": 1024,
			  "settings": {
				"slidesToShow": 4,
				"slidesToScroll": 1,
				"infinite": true,
				"dots": true
			  }
			},
			{
			  "breakpoint": 600,
			  "settings": {
				"slidesToShow": 2,
				"slidesToScroll": 1,
				"initialSlide": 1
			  }
			},
			{
			  "breakpoint": 480,
			  "settings": {
				"slidesToShow": 2,
				"slidesToScroll": 1,
				"dots": true,
				"arrow": false,
				"centerMode": true,
				"centerPadding": "10px",
			  }
			}
		  ]
		},
	}
  }
}
</script>

<style lang="scss" scoped>
#banner-carousel{
  h3{
	margin: 5px;
	border-radius: 15px;
	overflow: hidden;
  }
}
@media (max-width: 767px){
	#banner-carousel{
	  h3{
		margin: 5px;
	  }
	  .container{
		padding: 0;
	  }
	}
}
</style>















