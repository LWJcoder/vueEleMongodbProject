<template>
  <div class="hello">
  	 <template v-for="product in cart">
     	<product-item :product="product" :key="product._id"></product-item>
 
    </template>

  </div>
</template>

<script>
	import ProductItem from '@/components/products/productItem.vue';
export default {
  name: 'Cart',
  data () {
    return {
      msg: 'Welcome to Cart'
    }
  },
  components:{'product-item': ProductItem},
   computed: {
      cart() {
        return this.$store.state.cart;
      }
    },
  methods : {
  	removeFromCart (productId){
  		this.$store.commit('REMOVE_FROM_CART',{productId} )
  	}

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product {
  border-bottom: 1px solid black;
}

.product__image {
  width: 100px;
  height: 100px;
}
</style>
