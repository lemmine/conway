<template>
	<fieldset>
		<legend>Controls</legend>

		<label for="row-count">Grid rows:</label>
		<input v-bind:value="gridRows" v-on:input="setGridRows" id="row-count" type="number" min="3">

		<label for="col-count">Grid columns:</label>
		<input v-bind:value="gridCols" v-on:input="setGridCols" id="col-count" type="number" min="3">

		<label for="tick-rate">Tick rate:</label>
		<input v-bind:value="tickRate" v-on:input="setTickRate" id="tick-rate" type="number" min="1">

		<label for="run">Run game:</label>
		<input v-bind:value="running" v-on:input="setRunning" id="run" type="checkbox">

		<label for="tick-now">Current tick:</label>
		<span id="tick-now">{{tickNum}}</span>
	</fieldset>
</template>

<script>
export default {
	//Define incoming properties from parent
	props: ["gridRows", "gridCols", "tickRate", "running", "tickNum"],

	//Define setters for parent
	methods: {

		//Set the number of rows in the grid
		setGridRows: function(e) {
			let rows = parseInt(e.target.value)
			if (rows >= 3) {
				this.$emit("gridRows", rows);
			}
		},

		//Set the number of columns in the grid
		setGridCols: function(e) {
			let cols = parseInt(e.target.value)
			if (cols >= 3) {
				this.$emit("gridCols", cols);
			}
		},

		//Set the games tick rate
		setTickRate: function(e) {
			let tickRate = parseInt(e.target.value)
			if (tickRate >= 1) {
				this.$emit("tickRate", tickRate);
			}
		},

		//Toggle the run loop
		setRunning: function(e) {
			this.$emit("running", e.target.checked);
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

span {
	margin-left: .5em;
}
</style>
