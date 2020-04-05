// actins
import axios from 'axios';
const API = 'http://localhost:3000/api/v1';

export const productActions = {
	allProducts({commit }){
		axios.get(`${API}/products`).then(response => {
			console.log(response);
			commit('ALL_PRODUCTS_SUCCESS', {
				products: response.data,
			})
		})
	},
	productById({commit}, payload ){
		commit('SHOW_LOAD');

		const {productId} = payload;
		axios.get(`${API}/products/${productId}`).then(response => {
			commit('PRODUCT_BY_ID_SUCCESS', {
				product: response.data
			})
		})

	},
	addProduct ({commit}, payload){
		commit('SHOW_LOAD');

		const product = payload;
		// console.log('product', product)
		 axios.post(`${API}/products`, product).then(function(response){
	        // alert(JSON.stringify(res));
	        commit('ADD_PRODUCT_SUCCESS', {
	        	product: response.data
	        })
	        console.log('product', response)
	        alert(' 恭喜你，商品添加成功！')
	    }).catch(function (error) {
	    console.log(error);
	    alert('不好意思，商品添加失败！')
	  });


	},
	removeProduct ({commit}, payload){
		commit('SHOW_LOAD');

		const {productId} = payload;

		axios.delete(`${API}/product/${productId}`).then(res => {
			commit('REMOVE_PRODUCT_SUCCESS', {
				productId
			})
		})
	},
	updateProduct({commit}, payload){
		commit('SHOW_LOAD');

		const {product }= payload;

		axios.put(`${API}/products/${product._id}`, product).then(()=> {
			commit('UPDATE_PRODUCT_SUCCESS', {
				product
			})
		})
	}
		
}

export const manufacturerActions = {
	allManufacturers ({commit}, payload){
		commit('SHOW_LOAD');

		axios.get(`${API}/manufacturers`).then(response => {
			console.log(response);
			commit('ALL_MANUFACTURERS_SUCCESS', {
				manufacturers: response.data,
			})
		})
	},
	removeManufacturer ({commit}, payload){
		commit('SHOW_LOAD');

		var {manufacturerId} = payload;

		axios.delete(`${API}/manufacturers/${manufacturerId}`).then(() => {
			commit('REMOVE_MANUFACTURER_SUCCESS', {
				manufacturerId
			})
		})
	},
	addManufacturer ({commit}, payload){
		commit('SHOW_LOAD');


		const {manufacturer} =  payload;

		axios.post(`${API}/manufacturers`, manufacturer).then((response) =>{
			commit('ADD_MANUFACTURER_SUCCESS',{
				manufacturer: response.data
			})
			alert('恭喜你，制造商添加成功！')
		}).catch(err=>{
			console.error(err)
			alert('制造商添加失败！')

		})
	},
	manufacturerById({commit} , payload){
		commit('SHOW_LOAD');

		const {manufacturerId} =  payload;
		axios.get(`${API}/manufacturers/${manufacturerId}`).then(res =>{
			commit('MANUFACTURER_BY_ID_SUCCESS', {
				manufacturer: res.data
			})
		})
	},
	updateManufacturer({commit}, payload){
		commit('SHOW_LOAD');

		const {manufacturer} = payload;
		axios.put(`${API}/manufacturers/${manufacturer._id}`, manufacturer).then(res =>{
			commit('UPDATE_MANUFACTURER_SUCCESS', {
				manufacturer: res.data
			})
			alert('恭喜你，制造商更新成功！')
		}).catch(()=>{
			alert('不好意思，制造商更新失败！')
		})
	}
}