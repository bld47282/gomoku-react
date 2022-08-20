import { GAME_STATUS } from "../constants"
import { Square } from "./Square"

export type Game = {
    gameSize: number
    gameState: GAME_STATUS
    turn: number
    board: Square[]
}