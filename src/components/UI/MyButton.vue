<template>
    <button class='btn'>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'my-button'
    }
</script>

<style lang="scss" scoped>
    .btn {
        padding: 10px 15px;
        color: teal;
        background: none;
        border: 1px solid teal;
        cursor: pointer;
    }
</style>