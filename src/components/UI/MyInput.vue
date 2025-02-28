<template>
	<input type="text" class="input" :value='modelValue' @input='updateInput'/>
</template>

<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(e) {
            this.$emit('update:modelValue',e.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>
.input {
	border: 1px solid rgb(0, 133, 102);
	padding: 10px;
}
</style>
