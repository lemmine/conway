<template>
  <div id="app">
    <h1>Conways Game of Life</h1>
    <GameOfLife />
    <footer>
      <h3>About</h3>
      <p>This project is a vue.js implementation of <a href="/Game of Life Exercise Candidate Instructions.pdf">Conways Game of Life</a> built by <a href="https://github.com/lemmine/">Adam Precious</a> for a job application. The source code is available from <a href="https://github.com/lemmine/conway">this GitHub repo</a></p>

      <p>Documentation for the project, including the specification, run and build instructions, and a list of assumptions is available in the <a href="https://github.com/lemmine/conway/blob/master/README.md">project readme</a>.</p>

      <p>A older, no build required veriant of this project is included under the <a href="/legacy/">legacy</a> directory, it does not use components and is missing the preset scenarios.</p>
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

h1, h3, p {
  font-family: Arial, Helvetica, sans-serif;
}

</style>
