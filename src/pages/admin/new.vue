<template>
  <div>
    新增产品
      <product-form
  @save-product="addProduct"
  :model="model"
  :manufacturers="manufacturers">


  </product-form>
  </div>

</template>

<script>
import ProductForm from '@/components/products/productForm.vue';
export default {
  name: 'New',
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('allManufacturers');
    // this.manufacturers = this.$store.state.manufacturers;
  },
   computed: {
    // a computed getter
    manufacturers() {
      return this.$store.state.manufacturers;
    },
    model(){
      return {}
    }
  },
  
  methods: {
  	addProduct(model){
  		// console.log(model)
      this.$store.dispatch('addProduct', {
        product: model
      });
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
