<script>
  import { filters } from "../stores";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const handleChange = (e) => {
    if (e.target.checked) {
      // if checked, add to filter.crafts
      $filters[e.target.dataset.key].push(e.target.name);
      console.log($filters);
    } else {
      // if not checked, remove from filter.crafts
      let index = $filters[e.target.dataset.key].indexOf(e.target.name);
      if (index > -1) {
        $filters[e.target.dataset.key].splice(index, 1);
      }
    }
    dispatch("filtersChanged");
  };

  const options = {
    crafts: ["knitting", "crochet"],
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
    specialties: [
      "knitCompanion",
      "socks",
      "working with non-native English speakers",
    ],
    typesOfProjects: ["accessories", "garments", "toys"],
  };
</script>

<style>
  #filters {
    display: flex;
    flex-wrap: wrap;
  }

  .filter-group {
    width: 20%;
  }

  fieldset {
    border: none;
    background: #edf6f9;
    padding: 1rem;
    margin: 0.5rem;
  }

  summary {
    font-weight: bold;
    font-size: 0.85rem;
    text-transform: uppercase;
  }

  summary:hover {
    cursor: pointer;
  }

  .inputs {
    padding-top: 0.75rem;
    border-top: 2px solid #006d77;
    margin-top: 0.75rem;
  }

  @media (max-width: 920px) {
    .filter-group {
      width: 33%;
    }
  }

  @media (max-width: 730px) {
    .filter-group {
      width: 50%;
    }
  }

  @media (max-width: 500px) {
    .filter-group {
      width: 100%;
    }
  }
</style>

<p>Filter tech editors:</p>

<div id="filters">

  <div class="filter-group">
    <fieldset>
      <details>
        <summary>Craft(s)</summary>
        <div class="inputs">
          {#each options.crafts as craft}
            <input
              data-key="crafts"
              type="checkbox"
              id={craft}
              name={craft}
              on:change={(e) => handleChange(e)} />
            <label for={craft}>{craft}</label>
            <br />
          {/each}
        </div>

      </details>
    </fieldset>
  </div>

  <div class="filter-group">
    <fieldset>
      <details>
        <summary>Language(s)</summary>
        <div class="inputs">
          {#each options.languages as language}
            <input
              data-key="languages"
              type="checkbox"
              id={language}
              name={language}
              on:change={(e) => handleChange(e)} />
            <label for={language}>{language}</label>
            <br />
          {/each}
        </div>

      </details>
    </fieldset>
  </div>

  <div class="filter-group">
    <fieldset>
      <details>
        <summary>Additional Services</summary>
        <div class="inputs">
          {#each options.additionalServices as service}
            <input
              data-key="additionalServices"
              type="checkbox"
              id={service}
              name={service}
              on:change={(e) => handleChange(e)} />
            <label for={service}>{service}</label>
            <br />
          {/each}
        </div>

      </details>

    </fieldset>
  </div>

  <div class="filter-group">
    <fieldset>
      <details>
        <summary>Specialties</summary>
        <div class="inputs">
          {#each options.specialties as specialty}
            <input
              data-key="specialties"
              type="checkbox"
              id={specialty}
              name={specialty}
              on:change={(e) => handleChange(e)} />
            <label for={specialty}>{specialty}</label>
            <br />
          {/each}
        </div>

      </details>

    </fieldset>
  </div>

  <div class="filter-group">
    <fieldset>
      <details>
        <summary>Types of Projects</summary>
        <div class="inputs">
          {#each options.typesOfProjects as type}
            <input
              data-key="typesOfProjects"
              type="checkbox"
              id={type}
              name={type}
              on:change={(e) => handleChange(e)} />
            <label for={type}>{type}</label>
            <br />
          {/each}
        </div>

      </details>
    </fieldset>
  </div>

</div>
