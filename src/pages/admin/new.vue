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
    }
  },
   computed: {
    // a computed getter
    manufacturers() {
      return this.$store.state.manufacturers;
    }
  },
  created () {
    this.$store.dispatch('allManufacturers');
    // this.manufacturers = this.$store.state.manufacturers;
  },
  methods: {
  	addProduct(model){
  		// console.log(model)
      this.$store.dispatch('addProduct', model);
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
