<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import Editor from '../../components/Editor.svelte';
/* import Index from '../index.svelte';
import Error from '../_error.svelte';
import Layout from '../_layout.svelte'; */
	export let posts;
</script>

<style>
	.editor-container {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		justify-content: flex-start;
		align-items: flex-start;
	}
</style>

<svelte:head>
	<title>Directory</title>
</svelte:head>

<div class="editor-container">
	{#each posts as post}

		<Editor {...post} />
	
	{/each}
</div>
