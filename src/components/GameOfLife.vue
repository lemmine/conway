<template>
    <div id="game-of-life">
        <Controls />
        <scenarios />
        <Grid />
    </div>
</template>

<script>
import Controls from "./GameOfLife/Controls.vue"
import Scenarios from "./GameOfLife/Scenarios.vue"
import Grid from "./GameOfLife/Grid.vue"

export default {
    components: {
        Controls,
        Scenarios,
        Grid
    }
}
</script>

<style scoped>

</style>
