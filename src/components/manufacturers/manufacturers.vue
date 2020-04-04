<template>
	<div>
		 manufacturer
		<div v-for="manufacturer in manufacturers" class="all">
			{{manufacturer.name}}
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {

			}
		},
		props: ['manufacturers'],
		
		
	}
</script>