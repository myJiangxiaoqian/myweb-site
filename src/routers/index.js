import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '../components/content'
import AITrain from '../pages/01-AI-train'
import AIRecommend from '../pages/01-AI-recommend'
import AIMO1 from '../pages/01-AIMO-1'
import AIMO2 from '../pages/01-AIMO-2'
import AIMO3 from '../pages/01-AIMO-3'
import Product1 from '../pages/02-Product-1'
import Product2 from '../pages/02-Product-2'
import Product3 from '../pages/02-Product-3'
import Product4 from '../pages/02-Product-4'
import Product5 from '../pages/02-Product-5'
import Product6 from '../pages/02-Product-6'
import Product7 from '../pages/02-Product-7'
import Product8 from '../pages/02-Product-8'
import Bank from '../pages/03-bank'
import Security from '../pages/03-security'
import Insurance from '../pages/03-insurance'
import Finance from '../pages/03-finance'
import Marketing from '../pages/03-marketing'
import Operative from '../pages/03-operative'
import VIPMember from '../pages/04-vipMember'
import Banks from '../pages/05-banks'
import Securities from '../pages/05-securities'
import About from '../pages/06-about'
import ServiceAgreement from '../pages/serviceAgreement'
import PrivacyPolicy from '../pages/privacyPolicy'
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
         {
             path:'/',
             component:Content
        },  
        {
            path:'/training',
            component:AITrain
        },  
         {
             path:'/recommend',
             component:AIRecommend
        },  
        {
            path:'/AIMO_1',
            component:AIMO1
        },  
        {
            path:'/AIMO_2',
            component:AIMO2
        },  
        {
            path:'/AIMO_3',
            component:AIMO3
        }, 
        {
            path:'/product_1',
            component:Product1
        }, 
        {
            path:'/product_2',
            component:Product2
        }, 
        {
            path:'/product_3',
            component:Product3
        },  
        {
            path:'/product_4',
            component:Product4
        }, 
        {
            path:'/product_5',
            component:Product5
        }, 
        {
            path:'/product_6',
            component:Product6
        }, 
        {
            path:'/product_7',
            component:Product7
        }, 
        {
            path:'/product_8',
            component:Product8
        }, 
        {
            path:'/bank',
            component:Bank
        }, 
        {
            path:'/security',
            component:Security
        }, 
        {
            path:'/insurance',
            component:Insurance
        },
        {
            path:'/finance',
            component:Finance
        }, 
        {
            path:'/marketing',
            component:Marketing
        }, 
        {
            path:'/operative',
            component:Operative
        },
        {
            path:'/vipMember',
            component:VIPMember
        },
        {
            path:'/banks',
            component:Banks
        },
        {
            path:'/securities',
            component:Securities
        },
        {
            path:'/about',
            component:About
        },
        {
            path:'/serviceAgreement',
            component:ServiceAgreement
        },
        {
            path:'/privacyPolicy',
            component:PrivacyPolicy
        }
        
    ]
})