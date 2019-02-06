<template>
    <fieldset>
        <legend>Controls</legend>

        <label for="row-count">Grid rows:</label>
        <input id="row-count" type="number" min="3">

        <label for="col-count">Grid columns:</label>
        <input id="col-count" type="number" min="3">

        <label for="tick-rate">Tick rate:</label>
        <input v-bind:value="tickRate" v-on:input="setTickRate" id="tick-rate" type="number" min="1">

        <label for="run">Run game:</label>
        <input id="run" type="checkbox">

        <label for="tick-now">Current tick:</label>
        <span id="tick-now"></span>
    </fieldset>
</template>

<script>
export default {
    //Define incoming properties from parent
    props: ["tickRate"],

    methods: {
        setTickRate: function(e) {
            this.$emit("tickRate", parseInt(e.target.value));
        }
    },
}
</script>

<style scoped>
label {
    margin-left: 1em;
}

fieldset {
    border: 1px solid grey;
    margin-bottom: 1em;
}

input[type="number"] {
    width: 4em;
    margin-left: .5em;
}
</style>
