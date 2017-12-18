import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestCompo from '@/components/TestCompo'
import PageBody from '@/components/nest_components/PageBody'
import ParentComponent from '@/components/ParentComponent'
import ParentAuthorizationComponent from '@/components/authorization_components/ParentAuthorizationComponent'
import LoginComponent from '@/components/authorization_components/LoginComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/test',
    	name: 'TestCompo',
    	component: TestCompo
    },
    {
      path: '/samplePage',
      name: 'PageBody',
      component: PageBody
    },
    {
      path: '/ParentComponent',
      name: 'ParentComponent',
      component: ParentComponent
    },
    {
      path: '/Authorizations',
      name: 'ParentAuthorizationComponent',
      component: ParentAuthorizationComponent
    },
    {
      path: '/LoginComponent',
      name: 'LoginComponent',
      component: LoginComponent
    }
  ]
})
