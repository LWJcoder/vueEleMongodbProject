<template>
  <div class="hello">
   {{product.name}}
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
      return this.$store.state.products[0]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
