<template>
    <div class="sidebar-container">
        <div v-for="route in routeList" @click="toPath(route.path)"
             :key="route.path" class="sidebar-item">{{route.name}}</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            routeList: [{
                name: '优化方案',
                path: '/optimization'
            },{
                name: '常见问题',
                path: '/question'
            }]
        }
    },
    methods: {
        toPath(path){
            this.$router.push(path);
        }
    }
}
</script>

<style>
    .sidebar-container{
        width: 180px;
        float: left;
    }
    .sidebar-item{
        height: 50px;
        line-height: 50px;
        text-align: center;
        cursor: pointer;
        border: 1px solid #d1d1d1;
        border-top: none;
    }
    .sidebar-item:hover{
        background-color: #dcdcdc;
    }
</style>