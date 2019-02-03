<template>
  <div id="app">
    <h1>Conways game of life</h1>
    <GameOfLife />
    <footer>
      <h3>About</h3>
      <p>This game was built by <a href="https://github.com/lemmine/">Adam Precious</a> for a job application. The source code is available from <a href="">this GitHub repo</a> and a live instance of the application is hosted on <a href="">GitHub pages</a></p>

      <p>Documentation for the project, including the specification, design and build instructions, and a list of assumptions is available in the <a href="">project readme</a>.</p>
    </footer>
  </div>
</template>

<script>
import GameOfLife from "./components/GameOfLife.vue"

export default {
  components: {
    GameOfLife
  }
}
</script>

<style scoped>

</style>
