<template>
    <div>
        <input v-model="form.data1" placeholder="数据1" />
        <input v-model="form.data2" placeholder="数据2" />
        <input v-model="form.data3" placeholder="数据3" />
        <button @click="pass">传递子组件属性</button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            form: {
                data1: '',
                data2: '',
                data3: ''
            }
        }
    },
    methods: {
        pass(){
            this.$emit('change', this.form.data1, this.form.data2, this.form.data3)
        }
    }
}
</script>