<template>
	<select @change='changeOption'>
		<option disabled value='' selected>Выберите из списка</option>
		<option v-for="option in options" :value="option.value" :key="option.value">
			{{ option.name }}
		</option>
	</select>
</template>

<script>
export default {
	name: 'my-select',
	props: {
		modelValue: {
			type: String,
		},
		options: {
			type: Array,
			default: () => [],
		},
	},
    methods: {
        changeOption(e) {
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>

<style lang="scss" scoped></style>
