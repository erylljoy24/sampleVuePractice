import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestCompo from '@/components/TestCompo'
import PageBody from '@/components/PageBody'

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
    }
  ]
})
