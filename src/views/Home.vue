<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<mt-button type="default">default</mt-button>
		<mt-button type="primary">primary</mt-button>
		<mt-button type="danger">danger</mt-button>
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from '@/components/HelloWorld.vue'
	



	export default {
		name: 'home',
		components: {
			HelloWorld,
			// Button
		}
	}
</script>
