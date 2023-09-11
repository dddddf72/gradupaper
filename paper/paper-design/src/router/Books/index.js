var Books = {
    path: '/books',
name: 'books',
redirect:'/books/classify01',
component: () => import('../../views/Books/Books.vue'),
    children: [
        {
            path: 'detail',
            name: 'detail',
            component: () => import( '../../views/Books/Detail.vue')
        },
        {
            path: 'change',
            name: 'change',
            component: () => import( '../../views/Books/Change.vue')
        },
        {
            path: 'classify22',
            name: 'classify22',
            component: () => import( '../../views/Books/Classify22.vue')
        },
        {
            path: 'classify21',
            name: 'classify21',
            component: () => import( '../../views/Books/Classify21.vue')
        },
        {
            path: 'classify20',
            name: 'classify20',
            component: () => import( '../../views/Books/Classify20.vue')
        },
        {
            path: 'classify19',
            name: 'classify19',
            component: () => import( '../../views/Books/Classify19.vue')
        },
        {
            path: 'classify18',
            name: 'classify18',
            component: () => import( '../../views/Books/Classify18.vue')
        },
        {
            path: 'classify17',
            name: 'classify17',
            component: () => import( '../../views/Books/Classify17.vue')
        },
        {
            path: 'classify16',
            name: 'classify16',
            component: () => import( '../../views/Books/Classify16.vue')
        },
        {
            path: 'classify15',
            name: 'classify15',
            component: () => import( '../../views/Books/Classify15.vue')
        },
        {
            path: 'classify14',
            name: 'classify14',
            component: () => import( '../../views/Books/Classify14.vue')
        },
        {
            path: 'classify13',
            name: 'classify13',
            component: () => import( '../../views/Books/Classify13.vue')
        },
        {
            path: 'classify12',
            name: 'classify12',
            component: () => import( '../../views/Books/Classify12.vue')
        },
        {
            path: 'classify11',
            name: 'classify11',
            component: () => import( '../../views/Books/Classify11.vue')
        },
        {
            path: 'classify10',
            name: 'classify10',
            component: () => import( '../../views/Books/Classify10.vue')
        },{
            path: 'classify09',
            name: 'classify09',
            component: () => import( '../../views/Books/Classify09.vue')
        },
        {
            path: 'classify08',
            name: 'classify08',
            component: () => import( '../../views/Books/Classify08.vue')
        },
        {
            path: 'classify07',
            name: 'classify07',
            component: () => import( '../../views/Books/Classify07.vue')
        },
        {
            path: 'classify06',
            name: 'classify06',
            component: () => import( '../../views/Books/Classify06.vue')
        },
        {
            path: 'classify05',
            name: 'classify05',
            component: () => import( '../../views/Books/Classify05.vue')
        },
        {
            path: 'classify04',
            name: 'classify04',
            component: () => import( '../../views/Books/Classify04.vue')
        },
        {
            path: 'classify03',
            name: 'classify03',
            component: () => import( '../../views/Books/Classify03.vue')
        },
        {
            path: 'classify02',
            name: 'classify02',
            component: () => import( '../../views/Books/Classify02.vue')
        },
        {
            path: 'classify01',
            name: 'classify01',
            component: () => import( '../../views/Books/Classify01.vue')
        },
    ]
}
// var Film = { 详情页
// path: '/film/:id',
// name: 'film',
// component:()=>import('../../views/Films/Detail.vue')
// }
export {Books}