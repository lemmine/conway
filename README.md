# Conways Game of Life

## Project requirements
* Use your preferred language or framework to build an implementation of [Conways Game of Life] (https://github.com/lemmine/conway/blob/master/public/Game%20of%20Life%20Exercise%20Candidate%20Instructions.pdf)
* Ensure your code is written to a high quality and is maintainable
* State any assumptions you havemade about the problem

## Assumptions
* To emlate an infinate 2D grid, a finite grid with looping edges will be used
* The games seed can be specified by either clicking on the grid to set the cells state or by using one of the pre defined scenarios
* To ensure high quality and maintainable code, the following decisions have been made:
	* The code has been written using meaningful variable names and is well commented to increase readability
	* The Vue.js framework has been used to enfore a modular, standardised, and organised design
	* The UI has been decoupled from the game logic by using Vue.js components

## Project creation
This project was created by running the following commands
```
npm init -y
npm install @vue/cli
# Choose the default preset
# Copy over "src" and "public" directories from the GitHub repository into your local project
npm run serve
# Navigate to the shown address and port in your browser
```

## Cloning, building, and running this project
**Important:** The Vue.js cli tools must be added to this project before `npm run serve` will work 
1. Clone this project to a local directory `git clone https://github.com/lemmine/conway`
2. Change directory into the root of the newly cloned project `cd conway/`
3. Add the vue-cli tools to the project `npm install @vue/cli`
4. Launch a local development server `npm run serve`
5. Navigate to the address and port shown in your terminal with a web browser

## Vue.js cli autogenerated build instructions
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
