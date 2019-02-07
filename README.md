# conway

## Project requirements
* Use your preferred language or framework to build an implementation of Conways Game of Life
* Ensure your code is written to a high quality and is maintainable
* State any assumptions you havemade about the problem

## Assumptions
* To emlate an infinate 2D grid, a finite grid with edges that wrap around should be used
* The games seed can be specified by either clicking on the grid to set the cells state or by using one of a pre defined scenario
* To ensure high quality and maintainable code, the following decisions have been made:
	* The code has been written using meaningful variable names and well commented to increase readability
	* The Vue.js framework has been used to enfore a modular, standardised, and organised design
	* The UI has been decoupled from the game logic by using Vue.js components

## Project creation
In the event that this Node or npm is unable to run this project, it can be recreated by running the following commands
```
npm init -y
npm install @vue/cli
#Chose the default preset
#Copy over "src" and "public" directories from the GitHub repository into your local project
npm run serve
npm run build
```

## Build and deployment
* The docs directory contains production build of this project for hosting by [GitHub pages](http://example.com)
* A legacy, no build required veriant of this projects solution can be found within the `/public/legacy` directory of this project

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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
