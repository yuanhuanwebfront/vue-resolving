const optimizationRouteArr = [
    {
        name: 'optimization',
        path: '/optimization',
        component: () => import('../../views/optimization/index.vue')
    },
    {
        name: 'optimizationLongList',
        path: '/optimization/longList',
        component: () => import('../../views/optimization/longList.vue')
    }
]

export default optimizationRouteArr;