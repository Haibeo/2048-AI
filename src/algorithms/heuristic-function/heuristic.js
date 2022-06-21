import { greedy } from "./greedy";
import { monotonicity } from "./monotonicity";
import { smoothness } from "./smoothness";
import { snake } from "./snake";

const maxValue = board => {
    let max = 0;
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            if (board[row][col] > max) {
                max = board[row][col];
            }
        }
    }

    return max;
}

const emptyTiles = board => {
    let emptyTilesNumber = 0;
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            if (board[row][col] === 0) {
                emptyTilesNumber++;
            }
        }
    }

    return emptyTilesNumber;
}

const combinedHeuristic = board => {
    const monoWeight = 2.5;
    const smoothWeight = 0.5;
    const maxWeight = 1.0;
    const emptyWeight = 1.5;

    return monoWeight * monotonicity(board)
        + smoothWeight * smoothness(board)
        + maxWeight * greedy(board)
        + emptyWeight * emptyTiles(board);
}

const heuristicFunctions = {
    greedy: greedy,
    monotonicity: monotonicity,
    smoothness: smoothness,
    combinedHeuristic: combinedHeuristic
};

export const heuristicFunction = heuristicFunctions.combinedHeuristic;