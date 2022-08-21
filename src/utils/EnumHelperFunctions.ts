import { GAME_STATUS } from "../constants"

export function gameStateToString(status: GAME_STATUS): string {
    switch (status) {
        case GAME_STATUS.BLACKWIN:
            return "Winner: Black"
        case GAME_STATUS.WHITEWIN:
            return "Winner: White"
        case GAME_STATUS.DRAW:
            return "Draw"
        case GAME_STATUS.BLACK:
            return "Black's turn"
        case GAME_STATUS.WHITE:
            return "White's turn"
        default:
            return "Undermined"
    }
}