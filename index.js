// Importing prompt-sync for user input
// Importing prompt-sync for user input

/**import chalk from "chalk";
import promptSync from "prompt-sync";

// Tic-Tac-Toe Game
class TicTacToe {
    constructor() {
        this.board = [
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-']
        ];
        this.currentPlayer = 'X'; // Player 1 starts
    }

    // Display the current board
    displayBoard() {
      
      console.log("\nCurrent Board:");
        this.board.forEach(row => console.log(row.join(' ')));
        console.log();
    }

    // Switch to the next player
    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }

    // Check if the move is valid
    isValidMove(row, col) {
        // Log to check if we're getting correct row and col values
        console.log(`Checking move for row: ${row}, col: ${col}`);
        
        if (row >= 0 && row < 3 && col >= 0 && col < 3) {
            if (this.board[row][col] === '-') {
                return true;
            } else {
                console.log("Cell is already occupied!");
            }
        } else {
            console.log("Move out of bounds!");
        }
        return false;
    }

    // Place the current player's marker on the board
    makeMove(row, col) {
        if (this.isValidMove(row, col)) {
            this.board[row][col] = this.currentPlayer;
            return true;
        } else {
            console.log("Invalid move, try again.");
            return false;
        }
    }

    // Check for a winning condition
    checkWin() {
        const b = this.board;

        // Check rows, columns, and diagonals
        for (let i = 0; i < 3; i++) {
            if (b[i][0] === this.currentPlayer && b[i][1] === this.currentPlayer && b[i][2] === this.currentPlayer) return true;
            if (b[0][i] === this.currentPlayer && b[1][i] === this.currentPlayer && b[2][i] === this.currentPlayer) return true;
        }

        if (b[0][0] === this.currentPlayer && b[1][1] === this.currentPlayer && b[2][2] === this.currentPlayer) return true;
        if (b[0][2] === this.currentPlayer && b[1][1] === this.currentPlayer && b[2][0] === this.currentPlayer) return true;

        return false;
    }

    // Check if the game is a draw
    checkDraw() {
        return this.board.flat().every(cell => cell !== '-');
    }

    // Reset the board for a new game
    resetBoard() {
        this.board = [
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-']
        ];
        this.currentPlayer = 'X'; // Player 1 starts
    }

    // Play the game
    playGame() {
        console.log(chalk.red("Welcome to Tic-Tac-Toe!"));

        while (true) {
            this.displayBoard();
            console.log(`Player ${this.currentPlayer}, it's your turn.`);
            
            // Debug log to ensure we're getting the input
            const prompt = promptSync();
            const input = prompt(chalk.green("Enter your move (row column): "));
            console.log(`User entered: ${input}`);

            // Split and parse user input
            const [row, col] = input.split(' ').map(Number);
            console.log(`Parsed row: ${row}, col: ${col}`);

            // Validate move input and play the turn
            if (this.makeMove(row - 1, col - 1)) {
                if (this.checkWin()) {
                    this.displayBoard();
                    console.log(`Player ${this.currentPlayer} wins!`);
                    break;
                }

                if (this.checkDraw()) {
                    this.displayBoard();
                    console.log(chalk.purple("The game is a draw!"));
                    break;
                }

                // Switch player turn after valid move
                this.switchPlayer();
            }
        }

        // Ask to play again
        const prompt = promptSync();
        const playAgain = prompt("Do you want to play again? (yes/no): ").toLowerCase();
        if (playAgain === 'yes') {
            this.resetBoard();
            this.playGame();
        } else {
            console.log(chalk.blue("Thanks for playing!"));
        }
    }
}

// Initialize and start the game
const game = new TicTacToe();
game.playGame();**/


import chalk from "chalk";
import promptSync from "prompt-sync";

// Tic-Tac-Toe Game
class TicTacToe {
    constructor() {
        this.board = [
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-']
        ];
        this.currentPlayer = 'X'; // Player 1 starts
    }

    // Display the current board
    displayBoard() {
        console.log(chalk.yellow("\nCurrent Board:"));
        this.board.forEach(row => console.log(chalk.cyan(row.join(' '))));
        console.log();
    }

    // Switch to the next player
    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }

    // Check if the move is valid
    isValidMove(row, col) {
        console.log(chalk.magenta(`Checking move for row: ${row + 1}, col: ${col + 1}`));

        if (row >= 0 && row < 3 && col >= 0 && col < 3) {
            if (this.board[row][col] === '-') {
                return true;
            } else {
                console.log(chalk.red("Cell is already occupied!"));
            }
        } else {
            console.log(chalk.red("Move out of bounds!"));
        }
        return false;
    }

    // Place the current player's marker on the board
    makeMove(row, col) {
        if (this.isValidMove(row, col)) {
            this.board[row][col] = this.currentPlayer;
            return true;
        } else {
            console.log(chalk.red("Invalid move, try again."));
            return false;
        }
    }

    // Check for a winning condition
    checkWin() {
        const b = this.board;

        // Check rows, columns, and diagonals
        for (let i = 0; i < 3; i++) {
            if (b[i][0] === this.currentPlayer && b[i][1] === this.currentPlayer && b[i][2] === this.currentPlayer) return true;
            if (b[0][i] === this.currentPlayer && b[1][i] === this.currentPlayer && b[2][i] === this.currentPlayer) return true;
        }

        if (b[0][0] === this.currentPlayer && b[1][1] === this.currentPlayer && b[2][2] === this.currentPlayer) return true;
        if (b[0][2] === this.currentPlayer && b[1][1] === this.currentPlayer && b[2][0] === this.currentPlayer) return true;

        return false;
    }

    // Check if the game is a draw
    checkDraw() {
        return this.board.flat().every(cell => cell !== '-');
    }

    // Reset the board for a new game
    resetBoard() {
        this.board = [
            ['-', '-', '-'],
            ['-', '-', '-'],
            ['-', '-', '-']
        ];
        this.currentPlayer = 'X'; // Player 1 starts
    }

    // Play the game
    playGame() {
        console.log(chalk.red.bold("Welcome to Tic-Tac-Toe!"));

        while (true) {
            this.displayBoard();
            console.log(chalk.blueBright(`Player ${chalk.underline(this.currentPlayer)}, it's your turn.`));
            
            // Prompt for input
            const prompt = promptSync();
            const input = prompt(chalk.green("Enter your move (row column): "));
            console.log(chalk.yellowBright(`User entered: ${input}`));

            // Split and parse user input
            const [row, col] = input.split(' ').map(Number);
            console.log(chalk.magenta(`Parsed row: ${row}, col: ${col}`));

            // Validate move input and play the turn
            if (this.makeMove(row - 1, col - 1)) {
                if (this.checkWin()) {
                    this.displayBoard();
                    console.log(chalk.green.bold(`Player ${this.currentPlayer} wins!`));
                    break;
                }

                if (this.checkDraw()) {
                    this.displayBoard();
                    console.log(chalk.purple.bold("The game is a draw!"));
                    break;
                }

                // Switch player turn after valid move
                this.switchPlayer();
            }
        }

        // Ask to play again
        const prompt = promptSync();
        const playAgain = prompt(chalk.blue("Do you want to play again? (yes/no): ")).toLowerCase();
        if (playAgain === 'yes') {
            this.resetBoard();
            this.playGame();
        } else {
            console.log(chalk.red.bold("Thanks for playing!"));
        }
    }
}

// Initialize and start the game
const game = new TicTacToe();
game.playGame();