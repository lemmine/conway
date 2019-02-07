<template>
	<fieldset>
		<legend>Scenarios</legend>

		<button class="button" v-for="(preset, presetIndex) in presets" v-bind:key="presetIndex" v-on:click="setGrid(presetIndex)">
			<span>{{preset.name}}</span>
		</button>

	</fieldset>
</template>

<script>
export default {

	//Define the components data
	data: function() {
		return {

			//Define the preset scenarios
			presets: [
				{
					name: "Reset grid",
					url: "/grids/default.json",
					grid: []
				},
				{
					name: "Still life",
					url: "/grids/still.json",
					grid: []
				},
				{
					name: "Repeating life",
					url: "/grids/repeating.json",
					grid: []
				},
				{
					name: "Gliders",
					url: "/grids/gliders.json",
					grid: []
				}
			]
		}
	},

	//Called on component creation
	created: function() {

		//Fetch the grid data for each preset
		this.presets.forEach(preset => {
			fetch(preset.url)

				//Convert the response to JSON
				.then(response => response.json())

				//Set the presets JSON to the reponse JSON
				.then(json => {
					preset.grid = json;
				})
		})
	},

	//Define setters for parent
	methods: {

		//Replace the current grid with a given preset by its index
		setGrid: function(presetIndex) {
			this.$emit("newGrid", this.presets[presetIndex].grid);
		}
	}
}
</script>

<style scoped>

fieldset {
	border: 1px solid grey;
	margin-bottom: 1em;
}

.button {
	margin-right: 1em;
}
</style>
