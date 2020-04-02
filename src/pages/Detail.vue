<template>
	<div>
		
		<product-detail :product="product"> </product-detail>
	</div>
</template>

<script>
	import productDetail from '@/components/products/productDetail.vue';

	export default {
		created (){
			const {name} = this.product;

			if (!name) {
				this.$store.dispatch('productById',
				{
					productId: this.$route.params['id']
				})
			}

		},
		computed :{
			product (){
				 return this.$store.getters.productById(this.$route.params['id']);
			}

		},
		components: {
			'product-detail': productDetail
		},
  mounted (){
    console.log("products")
  }
	}
</script>