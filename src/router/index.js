import Vue from 'vue'
import Router from 'vue-router'
import follow from '@/views/follow'
import hot from '@/views/hot'
import search from '@/views/search'
import lives from '@/views/lives'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: '首页',
            redirect: '/hot'
        },
        {
            path: '/hot',
            name: '热点',
            component: hot
        },
        {
            path: '/follow',
            name: '跟踪',
            component: follow
        },
        {
            path: '/search',
            name: '查找',
            component: search
        },
        {
            path: '/lives',
            name: '新闻',
            component: lives
        },
    ]
})
