<template>
	<Navbar />
	<div class="app">
		<RouterView></RouterView>
	</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
	components: {
		Navbar,
	},
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
