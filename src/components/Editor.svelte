<script>
export let name;
export let website;
export let crafts;
export let specialties;
export let additionalServices;
export let typesOfProjects;
</script>

<style>
    .editor-card {
        width: 30%;
        box-sizing: border-box;
        padding: 2rem 2.5rem 2.5rem 2.5rem;
        border: 1px solid #eee;
        border-radius: 10px;
        margin: 1rem;
    }

    @media (max-width: 1024px) {
		.editor-card {
			width: 45%;
		}
	}

    @media (max-width: 800px) {
        .editor-card {
            width: 100%;
        }
    }

    a {
        padding: .5rem 1rem;
        margin-top: 2rem;
        border: 1px solid #00838F;
        border-radius: 5px;
        text-decoration: none;
        background-color: #00838F;
        color: #fff;
        font-weight: bold;
        transition: all .3s ease;
        display: block;
        text-align: center;
    }

    a:hover {
        background-color: #006D77;
        border-color: #006D77;
    }

    a:active {
        outline: medium;
    }

    a:focus {
        box-shadow: 0 0 0 0.2rem rgb(146 174 187 / 50%);
        outline: 0;
    }
</style>

<div class="editor-card">
    <h2>{name}</h2>

    <p><strong>Crafts:</strong> {crafts}</p>

    {#if specialties}
    <p><strong>Specialties:</strong> {specialties}</p>
    {/if}

    {#if additionalServices}
    <p><strong>Additional Services:</strong> {additionalServices}</p>
    {/if}

    {#if typesOfProjects}
    <p><strong>Types of Projects:</strong> {typesOfProjects}</p>
    {/if}

    <a href="{website}">Website</a>
</div>