<template>
	<div>
    <button v-if="isAdding" @click="addToCart">加入购物车</button>
    <button v-else @click="removeFromCart(id)">移除</button>
	</div>
</template>

<script>
	export default {
		props: ['id'],
		computed: {
			 product() {
		      let product = this.$store.getters.allProducts.find(product => product._id === this.id)
		      return product;
		    },
			isAdding (){
				let isAdding = true;
				this.cart.map(product => {
					if (product._id == this.product._id) {
						isAdding = false
					}
				})
				return isAdding;
			},
			cart (){
				return this.$store.state.cart;
			}
		},
		methods: {
			addToCart (){
				 this.$store.commit('ADD_TO_CART', {
			        product: this.product
			      });
			},
			removeFromCart (productId) {
				this.$store.commit('REMOVE_FROM_CART', {
					productId
				})
			}
		}
	}
</script>