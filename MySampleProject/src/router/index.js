import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestCompo from '@/components/TestCompo'
import PageBody from '@/components/nest_components/PageBody'
import ParentComponent from '@/components/ParentComponent'

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
    }
  ]
})
