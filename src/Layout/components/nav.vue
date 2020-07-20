<template>
    <div class="flex nav-container">
        <div class="left logo">
            <a href="/">
                <img src="../../assets/img/logo.jpg">
            </a>
        </div>
        <div class="right">
            <i class="user"></i>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .nav-container{
        width: 100%;
        height: 50px;
        justify-content: space-between;
        border-bottom: 1px solid #dcdcdc;
    }
    .nav-container .logo img{
        height: 50px;
        padding-left: 30px;

    }
    .nav-container .user{
        display: block;
        height: 30px;
        width: 30px;
        border-radius: 15px;
        margin-right: 70px;
        background-image: url(../../assets/img/user.png);
        background-size: cover;
    }
</style>