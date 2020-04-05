// index
import Vue from 'vue';
import Vuex from 'vuex';
import {productGetters, manufacturerGetters} from './getters';
import {productMutations, manufacturerMutations} from './mutations';
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