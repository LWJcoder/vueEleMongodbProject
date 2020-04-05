<template>
	<manufacturer-form	
	@save-manufacturer="addManufacturer"
	:model="model"
	>
	</manufacturer-form>
</template>


<script>
	import manufacturerForm from '@/components/manufacturers/manufacturerForm.vue';
	export default {
		components: {
			"manufacturer-form": manufacturerForm
		},
		computed: {
			model(){
				return {}
			},

		},
		methods:{
			addManufacturer (model){
				this.$store.dispatch('addManufacturer', {
					manufacturer: model
				})
			}
		}
	}
</script>