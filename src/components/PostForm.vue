<template>
	<form class="form" @submit.prevent>
		<h4 class='form__title'>Создание</h4>
		<my-input v-focus v-model="post.title" type="text" class='form__input'/>
		<my-input v-model="post.body" type="text" class='form__input'/>
		<my-button @click="createPost" class='form__button'>Создать</my-button >
	</form>
</template>

<script>


export default {

	data() {
		return {
			post: {
				title: '',
				body: '',
			},
		}
	},

	methods: {
		createPost() {
            this.post.id = Date.now()
			this.$emit('create', this.post)
			this.post = {
                title: '',
                body: ''
            }
		},
	},
}
</script>

<style lang="scss" scoped>
    .form {
        display: flex;
        flex-direction: column;
        gap: 15px;

        &__title {
            font-size: 23px;
        }

        &__button {
            align-self: flex-end;
        }
    }
</style>
