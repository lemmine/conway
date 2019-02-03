<template>
    <div id="game-of-life">
        <Controls />
        <Grid />
    <h3>How to use</h3>
    <ul>
      <li>The game of life takes place on an infinate 2D grid of cells</li>
      <li>The cells can be alive (black), or dead (white)</li>
      <li>Rules are applied to the grid that dictate what conditions cells can become dead or alive</li>
      <li>Checking the box labeled "Run game" will being the game</li>
    </ul>
    </div>
</template>

<script>
import Controls from "./GameOfLife/Controls.vue"
import Grid from "./GameOfLife/Grid.vue"

export default {
    components: {
        Controls,
        Grid
    }
}
</script>

<style scoped>

</style>
