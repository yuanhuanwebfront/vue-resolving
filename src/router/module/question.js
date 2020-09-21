const questionArr = [
    {
        name: 'question',
        path: '/question',
        component: () => import('../../views/question/index')
    },
    {
        name: 'questionEmitParams',
        path: '/question/emitParams',
        component: () => import('../../views/question/components/emitParams')
    }
]

export default questionArr