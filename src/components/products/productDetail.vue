<!-- productDetail -->
<template>
	<div class="product-details">
		<div class="product-details__image">
			<img :src="product.image" class="image" alt="">
		</div>
		 <div class="product-details__info">
      <div class="product-details__description">
        <small>{{product.manufacturer.name}}</small>
        <h3>{{product.name}}</h3>
        <p>
          {{product.description}}
        </p>
      </div>
      <div class="product-details__price-cart">
        <p>{{product.price}}</p>
		<product-button :product = 'product' ></product-button>
		 </div>
    </div>
	</div>
</template>
<style>
	
</style>

<script>
	import productButton from './productButton';
	export default {
		props: ['product'],
		components: {
			'product-button': productButton
		}
	}

</script>