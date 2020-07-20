<template>
    <div class="content-container">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .content-container{
        margin-left: 200px;
        margin-top: 20px;
        width: calc(100vw - 220px);
        height: calc(100vh - 90px);
    }
</style>