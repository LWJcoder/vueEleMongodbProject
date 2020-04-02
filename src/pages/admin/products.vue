<template>
  <div class="hello">
   Products
  </div>
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
      
    }
  },
  computed: {
    product(){
      return this.$store.getters.allProducts[0]
    }
  },
  mounted (){
    console.log("products")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
