<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(editors => {
			return { editors };
		});
	}
</script>

<script>
	import Editor from '../../components/Editor.svelte';
	export let editors;
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
	{#each editors as editor}

		<Editor {...editor} />
	
	{/each}
</div>
