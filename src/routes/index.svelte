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
    // for each item in filter array, see if this is in the editor's details
    // if all of them are there, return true
    // else return false if any of them is not here
    if (!editor[filterName]) {
      // if they don't have anything listed for this filter, return false
      return false;
    } else {
      // see if the option exists in their list of things for that filter
      // if it doesn't, return false
      const index = editor[filterName].indexOf(filterOption);
      if (index < 0) {
        return false;
      }
    }
    return true;
  };

  const filterEditor = (editor) => {
    // display the editor until they DON'T match a filter
    let show = true;
    for (let filter in $filters) {
      // iterate through each filter, e.g. specialties, crafts
      if (show == false) {
        return false;
      }

      if ($filters[filter].length > 0) {
        // if this editor has items in this filter array
        // check if the item is in that array
        // only display the editor if they match ALL filters

        $filters[filter].forEach((option) => {
          // for each element in that filter's array, see if the editor does that thing
          if (show == false) {
            return false;
          }
          let doesThis = checkIfEditorDoesThis(editor, filter, option);
          console.log(doesThis);
          if (!doesThis) {
            show = false;
            return false;
          }
        });
      }
    }
    return show;
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
