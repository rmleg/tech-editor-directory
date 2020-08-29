<script>
import { filters } from '../stores'
</script>

<style>

</style>

<input type="checkbox" id="will-grade" name="will-grade" bind:checked={$filters.willGradeChecked} />
<label for="will-grade">Offers Grading</label>