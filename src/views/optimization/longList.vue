<template>
    <div class="longlist-container">
        <h3>长列表的性能问题解决方案</h3>
        <br>    
        <hr>
        <p>固定高度列表项Demo</p>
        <fix-list :listData="list"></fix-list>
    </div>
</template>

<script>
import FixList from './components/fix-list';

function renderList(total = 100){
    let list = [];
    for(let i = 0; i < total; i++){
        list.push(i);
    }
    return list;
}

export default {
    data(){
        return {
            list: renderList()
        }
    },
    components: {
        FixList
    }
}
</script>

<style>
    .longlist-container{

    }
</style>