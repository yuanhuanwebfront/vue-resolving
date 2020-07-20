<template>
    <!-- 假设高度300px  每个列表项50px -->
    <div class="fix-list-container" ref="container" @scroll="scrollEvent">
        <!-- 虚假的列表 为了根据列表项生成高度和滚动条 -->
        <div class="total-list" :style="{height: totalHeight}"></div>
        <!-- 真正的列表 展示数据用  -->
        <div class="real-list" :style="{transform: `translateY(${start * itemHeight}px)`}">
            <p v-for="item in visibleData" 
                :style="{height: itemHeight + 'px', lineHeight: itemHeight + 'px'}">{{item}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        listData: {
            type: Array,
            default: []
        },
        itemHeight: {
            type: Number,
            default: 50
        }
    },

    computed: {
        totalHeight(){
            return this.listData.length * this.itemHeight + 'px';
        },
        // 可视区域内的数据 将数据用start和end截取
        visibleData(){
            return this.listData.slice(this.start, this.end);
        }
    },

    data(){
        return {
            start: 0,
            end: 0,
            boxHeight: 0,
            visibleCount: 0,
            transformStyle: {}
        }
    },

    mounted(){
        this.boxHeight = this.$refs.container.clientHeight;
        this.visibleCount = Math.ceil(this.boxHeight / this.itemHeight);
        //  计算出end是多少   start + (height / itemHeight)
        this.end = this.start + this.visibleCount;
    },

    methods: {
        // 每次滚动的时候  重新计算start和end
        scrollEvent(){
            let scrollTop = this.$refs.container.scrollTop;

            this.start = Math.floor(scrollTop / this.itemHeight),
            this.end = this.start + this.visibleCount;
            
        }
    }
}
</script>

<style>
    .fix-list-container{
        position: relative;
        width: 600px;
        height: 300px;
        overflow: auto;
        border: 1px solid #333;
    }
    .total-list{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }
    .real-list p{
        box-sizing: border-box;
        text-align: center;
        border-bottom: 1px solid #c1c1c1;
    }
</style>