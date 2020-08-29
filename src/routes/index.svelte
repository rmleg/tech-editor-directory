<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((editors) => {
        return { editors };
      });
  }
</script>

<script>
  import Filters from "../components/Filters.svelte";
  import Editor from "../components/Editor.svelte";
  import { filters } from "../stores";
  import Index from "./blog/index.svelte";
  export let editors;

  let filteredEditors = editors;

  const checkIfEditorDoesThis = (editor, filterName, filterOption) => {
    // so far this is working for a single seleciton. haven't tested multiple selectinos.
    // for each item in filter array, see if this is in the editor's details
    // if all of them are there, return true
    // else return false if any of them is not here
    if (!editor[filterName]) {
      // console.log(`${editor.name} doesn't do ${filterName}: ${filterOption}`);
      // if they don't have anything listed for this filter, return false
      return false;
    } else {
      // see if the option exists in their list of things for that filter
      // if it doesn't, return false
      const index = editor[filterName].indexOf(filterOption);
      if (index < 0) {
        // console.log(`${editor.name} doesn't do ${filterName}: ${filterOption}`);
        return false;
      }
    }
    return true;
  };

  const filterEditor = (editor) => {
    // display the editor until they DON'T match a filter
    let show = true;
    for (let filter in $filters) {
      if (show == false) {
        return false;
      }
      // iterate through each possible filter group
      if ($filters[filter].length > 0) {
        // if there are filters in that group, not an empty array
        // check if that editor has those things
        // only display the editor if they match ALL filters

        $filters[filter].forEach((option) => {
          // for each element in that filter's array, see if the editor does that thing
          if (show == false) {
            return false;
          }
          let doesThis = checkIfEditorDoesThis(editor, filter, option);

          if (!doesThis) {
            show = false;
          }
        });
      }
    }
    return true;
  };

  const getFilteredEditors = () => {
    filteredEditors = editors.filter((editor) => filterEditor(editor));
  };
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

<Filters on:filtersChanged={getFilteredEditors} />

<div class="editor-container">
  {#each filteredEditors as editor}
    <Editor {...editor} />
  {/each}
</div>
