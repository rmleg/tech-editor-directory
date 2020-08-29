<script>
  import { filters } from "../stores";

  const handleChange = (e) => {
    if (e.target.checked) {
      // if checked, add to filter.crafts
      $filters[e.target.dataset.key].push(e.target.name);
    } else {
      // if not checked, remove from filter.crafts
      let index = $filters[e.target.dataset.key].indexOf(e.target.name);
      if (index > -1) {
        $filters[e.target.dataset.key].splice(index, 1);
      }
    }
    console.log($filters);
  };

  const options = {
    crafts: ["Knitting", "Crochet"],
    languages: ["Dutch", "English", "German", "French", "Italian"],
    additionalServices: [
      "charts",
      "charts from written instructions",
      "expedited tech editing",
      "grading",
      "instruction writing",
      "pattern development",
      "pattern layout",
      "pattern support",
      "pattern testing",
      "pattern writing",
      "romance text",
      "schematics",
      "style sheet creation",
      "symbol diagrams",
      "technical writing",
      "test knitting management",
      "written instructions from charts",
    ],
    typesOfProjects: ["accessories", "garments", "toys"],
    specialties: [
      "accessories",
      "knitCompanion",
      "socks",
      "working with non-native English speakers",
    ],
  };
</script>

<style>

</style>

<div id="filters">

  <div class="filter-group">
    <fieldset>
      <legend>Craft(s)</legend>
      {#each options.crafts as craft}
        <input
          data-key="crafts"
          type="checkbox"
          id={craft}
          name={craft}
          on:change={(e) => handleChange(e)} />
        <label for={craft}>{craft}</label>
      {/each}

    </fieldset>

  </div>

  <div class="filter-group">
    <fieldset>
      <legend>Language(s)</legend>
      {#each options.languages as language}
        <input
          data-key="languages"
          type="checkbox"
          id={language}
          name={language}
          on:change={(e) => handleChange(e)} />
        <label for={language}>{language}</label>
      {/each}
    </fieldset>
  </div>

  <div class="filter-group">
    <fieldset>
      <legend>Additional Services</legend>
      {#each options.additionalServices as service}
        <input
          data-key="additionalServices"
          type="checkbox"
          id={service}
          name={service}
          on:change={(e) => handleChange(e)} />
        <label for={service}>{service}</label>
      {/each}
    </fieldset>
  </div>

  <div class="filter-group">
    <fieldset>
      <legend>Specialties</legend>
      {#each options.specialties as specialty}
        <input
          data-key="specialties"
          type="checkbox"
          id={specialty}
          name={specialty}
          on:change={(e) => handleChange(e)} />
        <label for={specialty}>{specialty}</label>
      {/each}
    </fieldset>
  </div>

  <div class="filter-group">
    <fieldset>
      <legend>Types of Projects</legend>
      {#each options.typesOfProjects as type}
        <input
          data-key="typesOfProjects"
          type="checkbox"
          id={type}
          name={type}
          on:change={(e) => handleChange(e)} />
        <label for={type}>{type}</label>
      {/each}
    </fieldset>
  </div>

</div>
