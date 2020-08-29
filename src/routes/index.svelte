<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(editors => {
			return { editors };
		});
	}
</script>

<script>
	import Filters from '../components/Filters.svelte'
	import Editor from '../components/Editor.svelte';
import { filters } from '../stores';
import Index from './blog/index.svelte';
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

<Filters />

<div class="editor-container">
	{#each editors as editor}

	{#if $filters.willGradeChecked && editor.willGrade}
		<Editor {...editor} />
	
	{:else if !$filters.willGradeChecked}
		<Editor {...editor} />
	
	{/if}
	
	{/each}
</div>
