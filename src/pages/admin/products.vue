<template>
  <div class="hello">
    <table class="table">
      <thead>
        <tr>
          <th>名称</th>
          <th>价格</th>
          <th>制造商</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product._id">
          <td>{{product.name}}</td>
          <td>{{product.price}}</td>
          <td>{{product.manufacturer.name}}</td>
          <td class="modify"><router-link :to="'/admin/edit/' + product._id">修改</router-link></td>
          <td class="remove"><a @click="removeProduct(product._id)" href="#">删除</a></td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<style>
table {
  margin: 0 auto;
}

.modify {
  color: blue;
}

.remove a {
  color: red;
}
</style>
<script>
export default {
  name: 'Products',
  created (){
    // if (this.products.length ==0) {
      this.$store.dispatch('allProducts');
    // }
  },
  data () {
    return {
      
    }
  },
  computed: {
    products(){
      return this.$store.getters.allProducts
    }
  },
 methods: {
  removeProduct (productId){
    const res = confirm('是否删除此商品?');

    if (res) {
      this.$store.dispatch('removeProduct', {
        productId
      })
    }
  }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
