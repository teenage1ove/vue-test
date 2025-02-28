<template>
	<div class="app">
		<h1 style="margin: 10px 0">Страница с постами</h1>
		<my-input v-model="searchQuery" placeholder="Поиск..." />
		<div class="app__btns">
			<my-button @click="showDialog" style="margin: 15px 0"
				>Создать пост</my-button
			>

			<my-select v-model="selectedSort" :options="sortOptions"></my-select>
		</div>

		<my-dialog v-model:show="dialogVisible">
			<post-form @create="createPost" />
		</my-dialog>

		<post-list
			:posts="sortedAndSearchPosts"
			@remove="removePost"
			v-if="!isPostsLoading"
		/>
		<div v-else>Загрузка...</div>
	</div>
</template>

<script>
import axios from 'axios'
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'

export default {
	components: {
		PostForm,
		PostList,
	},
	data() {
		return {
			posts: [],
			dialogVisible: false,
			isPostsLoading: false,
			selectedSort: '',
			searchQuery: '',
			totalPages: 0,
			page: 1,
			limit: 10,
			sortOptions: [
				{
					value: 'title',
					name: 'По названию',
				},
				{
					value: 'body',
					name: 'По содержанию',
				},
			],
		}
	},

	methods: {
		createPost(post) {
			this.posts.push(post)
			this.dialogVisible = false
		},

		removePost(post) {
			this.posts = this.posts.filter(p => p.id !== post.id)
		},

		showDialog() {
			this.dialogVisible = true
		},

		async fetchPosts() {
			try {
				this.isPostsLoading = true
				setTimeout(async () => {
					const response = await axios.get(
						'https://jsonplaceholder.typicode.com/posts', {
							params:{
								_page: this.page,
								_limit: this.limit
							}
						}
					)

					this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)

					this.posts = response.data
					this.isPostsLoading = false
				}, 1000)
			} catch (e) {
				alert('Ошибка', e)
			} finally {
			}
		},
	},
	mounted() {
		this.fetchPosts()
	},

	computed: {
		sortedPosts() {
			return [...this.posts].sort((post1, post2) => {
				return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
			})
		},

		sortedAndSearchPosts() {
			return this.sortedPosts.filter(post =>
				post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
			)
		},
	},

	// watch: {
	// 	selectedSort(newValue) {
	// 		this.posts.sort((post1, post2) => {
	// 			return post1[newValue]?.localeCompare(post2[newValue])
	// 		})
	// 	},
	// }
}
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.app {
	padding: 10px;
	display: flex;
	flex-direction: column;

	&__btns {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}
</style>
