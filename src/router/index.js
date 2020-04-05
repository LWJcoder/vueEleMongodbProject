import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home';
// import Admin from '@/pages/Admin';
import Cart from '@/pages/Cart';
import ProductDetail from '@/pages/Detail';

// admin component
import Index from '@/pages/admin/Index';
import New from '@/pages/admin/New';
import Products from '@/pages/admin/Products';
import Edit from '@/pages/admin/Edit';

import Manufacturer from '@/pages/admin/manufacturers';
import EditManufacturers from '@/pages/admin/editManufacturers';
import NewManufacturers from '@/pages/admin/NewManufacturers';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
     {
      path: '/admin',
      name: 'Admin',
      component: Index,
      children: [
        {
        	path: 'new',
        	name: 'New',
        	component: New
        },
        {
        	path: '',
        	name: 'Products',
        	component: Products,
          
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit,
        },

        {
          path: 'manufacturers',
          name: 'manufacturer',
          component: Manufacturer,
          
        },
        {
          path: 'manufacturers/new',
          name: 'NewManufacturers',
          component: NewManufacturers,
        },
        {
          path: 'manufacturers/edit/:id',
          name: 'EditManufacturers',
          component: EditManufacturers,
        },

    ]
    },
     {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: ProductDetail
    }
  ]
})
