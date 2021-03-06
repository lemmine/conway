/*
 * Javascript for Conways Game of Life
 */

//Initial logout
console.log("script.js loaded");



//Load in pre defined boards



//Create vue intance
const app = new Vue({



	//Specify the vue components root element
	el: 'main',



	//Data
	data: {
		grid: [],
		tickNum: 0,
		tickRate: 4,
		ticking: false
	},



	//Initial app setup
	created() {

		//Create a new grid
		this.importGrid(this.genNewGrid(32,32));
	},



	//App methods
	methods: {
		//Get the state of a given cell
		getCell: function(row, col) {
			return this.grid[row][col];
		},


		//Toggle the alive/dead of a given cell
		toggleCell: function(row, col) {
			//NOTE: JS limitation prevents reactive state update detection then modifying sub arrays using square brackets
			//https://codingexplained.com/coding/front-end/vue-js/array-change-detection
			//https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats
			Vue.set(this.grid[row], col, !this.grid[row][col])
		},


		//Fetch a given neighbour relative to a given cell
		getNeighbour: function(gridRow, gridCol, offsetRow, offsetCol) {

			//Define neighbour row and column position
			let rowPos = getAxisPos(gridRow, offsetRow, this.gridRows);
			let colPos = getAxisPos(gridCol, offsetCol, this.gridCols);

			//Return the value of the neighbour
			return this.getCell(rowPos, colPos);

			//Helper function to calculate the position of a cell on a single axis
			function getAxisPos(cell, offset, length) {

				//Calculate axis position, wrapping around grid if necesarry
				let axisPos = (cell + offset) % length;

				//Correct negative position by offsetting by axis length
				while (axisPos < 0) {
					axisPos = axisPos + length
				}

				//Return neighbour axis position
				return axisPos;
			}
		},


		//For a given cell, return the number of alive neighbours
		countAliveNeighbours: function(gridRow, gridCol) {

			//Define neightbours list
			let aliveNeighbours = 0;

			//Identify neighbours
			//From the above to below rows..
			for (let row=-1; row<=1; row++) {

				//From the left to right columns..
				for (let col=-1; col<=1; col++) {

					//Skip centre cell
					if (row==0 && col==0) {
						continue;
					}

					//Fetch the neighbour, ensure it is alive then increment the count
					if (this.getNeighbour(gridRow, gridCol, row, col)) {
						aliveNeighbours++;
					}
				}
			}

			//Return count
			return aliveNeighbours;
		},


		//Advance the game state
		gameTick: function() {

			//Abort current tick
			if (!this.ticking) {
				return;
			}

			//Increment the tick
			this.tickNum++;

			//Push the new grid state to the DOM
			this.grid = this.advanceGrid()

			//Post next tick
			setTimeout(this.gameTick, 1000/this.tickRate);
		},


		//Calculate the next state of the grid
		advanceGrid: function() {

			//Define new grid state
			let newGrid = this.genNewGrid(this.gridRows, this.gridCols);

			//Process each cell
			//For each row..
			for (let row=0; row<this.gridRows; row++) {
				//For each column..
				for (let col=0; col<this.gridCols; col++) {

					//Get cell properties
					let aliveNeighbours = this.countAliveNeighbours(row,col);
					let cellAlive = this.getCell(row, col);

					if (cellAlive) {
						//Cell is alive, check if it has 2 or 3 alive neighbours to stay alive
						if (aliveNeighbours>1 && aliveNeighbours<4) {
							newGrid[row][col] = true;
						} else {
							newGrid[row][col] = false;
						}
					} else {
						//Cell is dead, check if it has three alive neighbours to become alive
						if (aliveNeighbours==3) {
							newGrid[row][col] = true;
						} else {
							newGrid[row][col] = false;
						}
					}
				}
			}

			//Return the new grid state
			return newGrid;

		},


		//Import a new grid
		importGrid: function(grid) {

			//Determine if the grid is an array of atleast 1
			if (!Array.isArray(grid) || grid.length < 1) {
				return false;
			}

			//Determine if each grid row is also an array
			if (!grid.every(Array.isArray)) {
				return false;
			}

			//Ensure the length of the grids first column is at least 1
			let firstRow = grid[0];
			if (firstRow.length < 1) {
				return false;
			}

			//For each row in the grid..
			grid.forEach(row => {

				//Determine if the arrays length matches the first rows
				if (row.length != firstRow.length) {
					return false;
				}

				//For each cell in the row..
				row.forEach(cell => {

					//Ensure each cell is a boolean
					if (!typeof cell === "boolean") {
						return false;
					}
				});
			});

			//Import the grid
			this.grid = grid;
			return true;
		},


		//Generate a new blank grid
		genNewGrid: function(rows, cols, data) {

			//Define mew grid
			let newGrid = [];

			//For each new row..
			for (let row=0; row<rows; row++) {

				//Add the new row
				newGrid.push([]);

				//For each new column..
				for (let col=0; col<cols; col++) {

					//Define the columns value
					let cellValue = false;

					//Attempt to import the previous grids value
					if (data !== undefined
						&& data[row] !== undefined
						&& data[row][col] !== undefined) {
							cellValue = data[row][col];
					}

					//Add the new column to the new grid
					newGrid[row].push(cellValue);
				}
			}

			//Return the new grid
			return newGrid;
		}
	},



	//Computed variables
	computed: {

		gridRows: {

			get: function() {
				return this.grid.length;
			},

			set: function(newRowCount) {
				let newGrid = this.genNewGrid(newRowCount, this.gridCols, this.grid);
				this.grid = newGrid;
			}
		},

		gridCols: {

			get: function() {
				//NOTE: This function requires that all grid rows have the same number of columns
				//For this reason, error checking is used when importing grids
				return this.grid[0].length;
			},

			set: function(newColCount) {
				let newGrid = this.genNewGrid(this.gridRows, newColCount, this.grid);
				this.grid = newGrid;
			}
		}
		
		/*
		runGame: {
			
			get: function() {
				return this.ticking;
			},
			
			set: function(run) {
				//NOTE: A computed setter is required to update the variable and trigger the game loop in the right order to prevent a race condition
				this.ticking = run;
				
				if (run) {
					this.gameTick();
				}
			}
		} */
	},



	watch: {
		
		//Detect an update to the ticking data variable and attempt to perform a game tick
		ticking: function() {
			this.gameTick();
		}
	}
});
