<template>
    <div class="container">
        <Nav></Nav>
        <SideBar></SideBar>
        <Content></Content>
    </div>
</template>

<script>
import Nav from './components/nav';
import SideBar from './components/sidebar';
import Content from './components/content';

export default {
    
    components: {
        Nav,
        SideBar,
        Content
    }

}
</script>

<style>
    
</style>