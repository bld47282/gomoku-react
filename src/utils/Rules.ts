import { Game, Square } from "../types"
import { GAME_STATUS } from "../constants"

export function hasWon(lastMove: Square, game: Game): boolean {
    var victory: boolean = false

    // Condition one - up/down
    var c1: number = 1
    for (let i = 1; i < game.gameSize; i++) {
        if (game.board[lastMove.id + (game.gameSize * i)]?.state === lastMove.state) {
            c1++
        } else {
            break
        }
    }

    for (let i = 1; i < game.gameSize; i++) {
        if (game.board[lastMove.id - (game.gameSize * i)]?.state === lastMove.state) {
            c1++
        } else {
            break
        }
    }

    if (c1 === 5) victory = true

    // Condition two - left-right
    var c2: number = 1
    for (let i = 1; i < game.gameSize; i++) {
        if (game.board[lastMove.id + i]?.state === lastMove.state) {
            c2++
        } else {
            break
        }
    }

    for (let i = 1; i < game.gameSize; i++) {
        if (game.board[lastMove.id - i]?.state === lastMove.state) {
            c2++
        } else {
            break
        }
    }

    if (c2 === 5) victory = true

    // Condition three - tr-bl
    var c3: number = 1
    for (let i = 1; i < game.gameSize; i++) {
        if (game.board[lastMove.id + (game.gameSize * i) + i]?.state === lastMove.state) {
            c3++
        } else {
            break
        }
    }

    for (let i = 1; i < game.gameSize; i++) {
        if (game.board[lastMove.id - (game.gameSize * i) - i]?.state === lastMove.state) {
            c3++
        } else {
            break
        }
    }

    if (c3 === 5) victory = true

    // Condition four bl-tr
    var c4: number = 1
    for (let i = 1; i < game.gameSize; i++) {
        if (game.board[lastMove.id + (game.gameSize * i) + i]?.state === lastMove.state) {
            c4++
        } else {
            break
        }
    }

    for (let i = 1; i < game.gameSize; i++) {
        if (game.board[lastMove.id - (game.gameSize * i) - i]?.state === lastMove.state) {
            c4++
        } else {
            break
        }
    }

    if (c4 === 5) victory = true

    return victory
}

export function isDraw(lastMove: Square, game: Game): boolean {
    return (game.turn === (game.gameSize * game.gameSize)) && ((game.gameState === GAME_STATUS.BLACK) || (game.gameState === GAME_STATUS.WHITE)) ? true : false
}