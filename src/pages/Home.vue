<template>
  <div class="hello">
   {{msg}}
  <product-list></product-list>
  </div>
</template>

<script>
import ProductList from '@/components/products/ProductList.vue';

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
  	'product-list':ProductList,
 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
