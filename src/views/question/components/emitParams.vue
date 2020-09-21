<template>
    <div>

        <a href="https://github.com/vuejs/vue/issues/5735">yyx的回答</a>

        <pre v-highlightjs>
            <code class="javascript">
                //  child组件
                this.$emit('change', 1, 2, 3, 4)
            </code>
        </pre>

        <pre v-highlightjs>
            <code class="html">
                <!--   父组件 -->
                &lt;p&gt;
                    你的参数为 &lt;span v-for=&quot;item in list&quot; :key=&quot;item&quot;&gt;item&amp;nbsp;&amp;nbsp;&lt;/span&gt;
                &lt;/p&gt;

                &lt;Child @change=&quot;recieve(arguments)&quot;&gt;&lt;/Child&gt;
            </code>
        </pre>

        <br>
        <br>
        <br>

        <p>
            你的参数为 <span v-for="item in list" :key="item">{{item}}&nbsp;&nbsp;</span>
        </p>

        <Child @change="recieve(arguments)"></Child>

    </div>
</template>

<script>
import Child from './Child';

export default {
    components: {
        Child
    },
    data(){
        return {
            list: []
        }
    },
    methods: {
        recieve(params){
           this.list = [...params]
        }
    }
}
</script>