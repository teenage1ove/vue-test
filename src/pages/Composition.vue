<template>
	<div>
		<h1>Composition API Todos</h1>
		<div v-if="error" class="error">
			{{ error }}
		</div>
		<div v-else-if="isLoading">Loading...</div>
		<ul v-else class="todo-list">
			<li
				v-for="todo in todos"
				:key="todo.id"
				:class="{ completed: todo.completed }"
			>
				{{ todo.title }}
			</li>
		</ul>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const todos = ref([])
const isLoading = ref(true)
const error = ref(null)

async function fetchTodos() {
	try {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/todos?_limit=5'
		)
		if (!response.ok) {
			throw new Error('Ошибка запроса')
		}
		const data = await response.json()
		todos.value = data
	} catch (err) {
		error.value = err.message
	} finally {
		isLoading.value = false
	}
}

fetchTodos()
</script>

<style scoped>
.todo-list {
	list-style: none;
	padding: 0;
}

.todo-list li {
	padding: 10px;
	margin: 5px 0;
	background-color: #f5f5f5;
	border-radius: 4px;
}

.completed {
	text-decoration: line-through;
	color: #888;
}

.error {
	color: red;
	padding: 10px;
	background-color: #ffe6e6;
	border-radius: 4px;
}
</style>
