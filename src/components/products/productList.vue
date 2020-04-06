<template>
  <div>
    <div class="products">
      <div class="container">
        This is ProductList
      </div>
    <!-- <template v-for="product in products"> -->
      <product-item :products = "products" > </product-item>
    <!-- </template> -->
       
    </div>
  </div>
</template>



<script>

  import productItem from './productItem.vue';

export default {
  name: 'product-list',
  components: {'product-item':productItem},
  created (){
    if (this.products.length == 0) {
      this.$store.dispatch('allProducts')
    }
  },
  computed: {
    // a computed getter
    products() {
      return this.$store.getters.allProducts;
    }
  },
  methods: {
   
  }
}
</script>
