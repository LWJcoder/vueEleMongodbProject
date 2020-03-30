<template>
	<product-form
	@save-product="addProduct"
	:model="model"
	:manufacturers="manufacturers">


	</product-form>
</template>

<script>
import ProductForm from '@/components/products/productForm.vue';
export default {
  name: 'New',
  data () {
    return {
    	model: {},
      	manufacturers: [{
      		_id: 'sam',
      		name:'Samsung'
      	},
      	{
      		_id: 'apple',
      		name:'Apple'
      	}]
    }
  },
  methods: {
  	addProduct(model){
  		console.log(model)
  	}
  },
  components: {
  	'product-form': ProductForm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
