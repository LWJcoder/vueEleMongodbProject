<!-- mana -->
<template>
	<div class="manufacturers">
    <el-table
    class="table"
    :data="manufacturers">
      <el-table-column
        prop="name"
        label="制造商"
        width="180">
      </el-table-column>
      <el-table-column
        label="操作"
        width="200">
        <template slot-scope="scope">
          <el-button class="modify" type="text" size="small"><router-link :to="'/admin/manufacturers/edit/' + scope.row._id">修改</router-link></el-button>
          <el-button class="remove" @click="removeManufacturer(scope.row._id), deleteRow(scope.$index, products)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
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
		// if (this.manufacturers.length == 0) {
			this.$store.dispatch('allManufacturers');

		// }
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