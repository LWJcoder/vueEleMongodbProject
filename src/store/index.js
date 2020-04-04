// index
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const API = 'http://localhost:3000/api/v1';

Vue.use(Vuex);

export default new Vuex.Store({
	strict: true,
	state: {
		cart: [],
		showLoader: false,
		product: {},
		products: [ ],
     	manufacturers: []
	},
	mutations: {
		ADD_TO_CART(state, payload){
			const {product} = payload;
			state.cart.push(product)
		},
		REMOVE_FROM_CART(state, payload){
			const {productId} = payload;
			state.cart = state.cart.filter(product => product._id !== productId)
		}	,
		ALL_PRODUCTS(state){
			state.showLoader = true;
		},
		ALL_PRODUCTS_SUCCESS (state, payload){
			const {products } = payload;

			state.showLoader =false;
			state.products = products;
		},
		SHOW_LOAD (state){
			state.showLoader = true;
		},
		PRODUCT_BY_ID_SUCCESS (state, payload) {
			state.showLoader = false;

			const {product } = payload;
			state.product = product;
		},
		ADD_PRODUCT_SUCCESS (state, payload){
			state.showLoader = false;


		},
		ALL_MANUFACTURERS_SUCCESS (state, payload){
			const {manufacturers} = payload;

			state.showLoader = false;
			state.manufacturers = manufacturers;
		},
		REMOVE_MANUFACTURERS_SUCCESS (state, payload){
			const { manufacturerId } = payload;

			state.showLoader = false;
			state.manufacturers = state.manufacturers.filter(manufacturer => manufacturer._id !== manufacturerId);
		}
	},
	getters: {
		allProducts (state){
			return state.products;
		},
		productById: (state, getters) =>id => {
			if (getters.allProducts.length > 0) {
				return getters.allProducts.filter(p => p._id == id)[0];
			}else{
				return state.product;
			}
		},
		allManufacturers(state){
			return state.manufacturers;
		},
		allManufacturers(state){
			return state.manufacturers;
		}
	},
	actions: {
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
			console.log('product', product)
			 axios.post(`${API}/products`, product).then(function(res){
		        // alert(JSON.stringify(res));
		        commit('ADD_PRODUCT_SUCCESS')
		    }).catch(function (error) {
		    console.log(error);
		  });


		},
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
				commit('REMOVE_MANUFACTURERS_SUCCESS', {
					manufacturerId
				})
			})
		}
	}
	
})