<template>
   <div>
    <div class="title">
      <h1>This is Admin/Edit</h1>
    </div>
    <product-form 
    @save-product="updateProduct"
    :model="model"
    :manufacturers="manufacturers"
    :isEditing = "true"></product-form>
  </div>
</template>

<script>
  import productForm from '@/components/products/productForm.vue';

export default {
  name: 'Eidt',
  
  created (){
    const {name = "" }= this.model || {};
    if (!name) {
      this.$store.dispatch('productById',{
        productId: this.$route.params["id"]
      })
    }

    // if (this.manufacturers.length == 0) {
      this.$store.dispatch('allManufacturers')
    // }
  },
  computed: {
    manufacturers (){
      return this.$store.getters.allManufacturers;
    },
    model (){
      const product = this.$store.getters.productById(this.$route.params['id'])
 // 这里返回 product 的拷贝，是为了在修改 product 的拷贝之后，在保存之前不修改本地 Vuex store 的 product 属性
      return {...product, manufacturers: {...product.manufacturer}}
    }
  },
  components: {
    'product-form': productForm
  },
  methods: {
    updateProduct(product){
      this.$store.dispatch('updateProduct', {
        product
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
