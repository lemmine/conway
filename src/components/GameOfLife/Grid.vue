<template>
	<fieldset>
		<legend>Game Grid</legend>

		<table id="grid">
			<tr v-for="(row, rowIndex) in grid" v-bind:key="rowIndex">
				<td
					v-for="(col, colIndex) in row"  v-bind:key="colIndex"
					v-bind:class="{alive: col}"
					v-on:click="toggleCell(rowIndex, colIndex)">
				</td>
			</tr>
		</table>

	</fieldset>
</template>

<script>
export default {
	//Define incoming properties from parent
	props: ["grid"],

	//Define setters for parent
	methods: {

		//Toggle the state of a given cell by its row and column
		toggleCell: function(rowIndex, colIndex) {
			this.$emit("toggleCell", [rowIndex, colIndex]);
		}
	},
}
</script>

<style scoped>
* {
	box-sizing: border-box;
}

fieldset {
	border: 1px solid grey;
	margin-bottom: 1em;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

td {
	width: 1em;
	height: 1em;
	min-width: 1em;
}

.alive {
	background-color: black;
}

table, th, td {
	border: 2px solid grey;
}

</style>
