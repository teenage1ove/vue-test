<template>
	<div class="post">
		<div>
			<div><strong>Название </strong>{{ post.title }}</div>
			<div><strong>Пост </strong>{{ post.body }}</div>
		</div>

		<div class="post__btns">
			<my-button @click='removePost'>Удалить</my-button>
		</div>
	</div>
</template>

<script>


export default {

	props: {
		post: {
			type: Object,
			required: true,
		},
	},

	methods: {
		removePost() {
			this.$emit('remove', this.post)
		}
	}
}
</script>

<style lang="scss" scoped>
.post {
	border: 2px solid rgb(0, 133, 102);
	padding: 15px;
	margin: 15px 0;

	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
