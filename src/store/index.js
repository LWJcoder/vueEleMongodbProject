// index
import Vue from 'vue';
import Vuex from 'vuex';
import {productGetters, manufacturerGetters} from './getters';
import {productMutations, manufacturerMutations, cartMutations} from './mutations';
import { productActions, manufacturerActions } from './actions';



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
		...productMutations,
	    ...manufacturerMutations,
	    ...cartMutations
	},
	getters: {
		...productGetters,
	    ...manufacturerGetters,
	},
	actions: {
		...productActions,
    	...manufacturerActions,
	}
	
})