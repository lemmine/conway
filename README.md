# conway

##Project requirements
* Use your preferred language / framework to build an implementation of Conways Game of Life
* Ensure the code is reitten to a high quality and is maintainable
* State any assumptions you have made about the project

## Assumptions
* To simulate an infinate 2D grid, the edges of the world wrap round to their opposite sides
* The initial game seeds can be specified either by clicking on the grid or by using one of the pre build scenarios
* Evolution of the game takes place using a tick cycle where each game tick represents the next evolution of the game
* To ensure high quality, maintainable code, the following decisions have been made
    * Node JS has been used to supply code linting, testing, and building
    * The Vue.js framework has been used to support organised and structured code
    * All code has been annotated with describtive comments to make it easier to understand
    * The UI has been decoupled from the games logic through the use of Vue.js components
    * Unit tasts have been written to ensure that the codes logic is working as intended

##Deployed instance
* A deployed instance of this game of life implementation is available on [GitHub pages](https://example.com)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
