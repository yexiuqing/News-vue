import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/home/Header'
import first from '@/components/home/First'
import focus from '@/components/home/Focus'
import program from '@/components/home/Program'
import footer from '@/components/Footer'
// import boutique from '@/components/edit/Boutique'
import edit from '@/components/edit/Edit'
import person from '@/components/person/Person'
import user from '@/components/person/User'
import newlist from '@/components/home/Newlist'
import set from '@/components/person/Setting'
import reg from '@/components/person/Reg'





Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/footer',
      component:footer
    },
    // {
    //   path: '/boutique',
    //   component:boutique
    // },
    {
      path: '/edit',
      component:edit
    },
    {
      path: '/header',
      redirect:'header/first'
    },
    { 
          path: '/', 
          redirect:'header/first'
    },
    { 
      path: '/header/first', 
      component: first
    },
    {
      path: '/header/focus',
      component: focus
    },
    {
      path: '/header/program',
      component: program
    },
    {
      path:'/person',
      component: person
    }, 
    {
      path: '/user',
      component:user
    },
    {
      name:'newlist', 
      path: "/newlist/:contentId",
      component:newlist
    },
    {
      path:'/set',
      component:set
    },
    {
      path:'/reg',
      component:reg
    }
    // {
    //   path: '/header',
    //   component:header,
    //   children:[
    //     { 
    //       path: '/header/first', 
    //       component: first
    //     },
    //     {
    //       path: '/header/focus',
    //       component: focus
    //     },
    //     {
    //       path: '/header/program',
    //       component: program
    //     }
    //   ]
      
    // } 
  ]
})
