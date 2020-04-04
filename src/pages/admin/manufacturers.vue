<!-- mana -->
<template>
	<div>
		 <table class="table">
      <thead>
        <tr>
          <th>制造商</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="manufacturer in manufacturers" :key="manufacturer._id">
          <td>{{manufacturer.name}}</td>
          <td class="modify"><router-link :to="'/admin/manufacturers/edit/' + manufacturer._id">修改</router-link></td>
          <td class="remove"><a @click="removeManufacturer(manufacturer._id)" href="#">删除</a></td>
        </tr>
      </tbody>
    </table>


  <!--  <manufacturer-list :manufacturers="manufacturers"> </manufacturer-list> -->
		<!-- <div ></div> -->
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
import manufacturerList from '@/components/manufacturers/manufacturers.vue';
export default {
	created (){
		if (this.manufacturers.length == 0) {
			this.$store.dispatch('allManufacturers');

		}
	},
	components: {
		'manufacturer-list': manufacturerList
	},
	computed :{
		manufacturers (){
			// return this.$store.state.manufacturers;

			return this.$store.getters.allManufacturers;
		}
	},
	methods :{
		removeManufacturer(manufacturerId){
			const res = confirm('是否删除生产商?')
			console.log(manufacturerId)
			if(res){
				this.$store.dispatch('removeManufacturer', {
					manufacturerId,
				})
			}
		}
	}
	
}
</script>