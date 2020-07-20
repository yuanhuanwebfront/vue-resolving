<template>
    <div class="optimization-container">
        <router-link to="/optimization/longList">长列表优化</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .optimization-container a{
        position: relative;
        padding-left: 20px;
    }
    .optimization-container a::before{
        content: "";
        position: absolute;
        left: 10px;
        top: 50%;
        width: 4px;
        height: 4px;
        background: #007fff;
        border-radius: 2px;
        transform: translateY(-50%);
        
    }
</style>