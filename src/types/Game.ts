import { GAME_STATUS } from "../constants"

export type Game = {
    gameSize: number
    gameState: GAME_STATUS
    turn: number
}