<template>
    <fieldset>
        <legend>Controls</legend>

        <label for="row-count">Grid rows:</label>
        <input id="row-count" type="number" nim="3">

        <label for="col-count">Grid columns:</label>
        <input id="col-count" type="number" nim="3">

        <label for="tick-rate">Tick rate:</label>
        <input id="tick-rate" type="number" nim="1">

        <label for="run">Run game:</label>
        <input id="run" type="checkbox">

        <label for="tick-now">Current tick:</label>
        <span id="tick-now"></span>
    </fieldset>
</template>

<script>
export default {
    
}
</script>

<style scoped>
label {
    padding-left: 1rem;
}

fieldset {
    border: 1px solid grey;
    margin-bottom: 1rem;
}
</style>
