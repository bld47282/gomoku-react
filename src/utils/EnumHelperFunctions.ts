import { GAME_STATUS } from "../constants"

export function gameStateToString(status: GAME_STATUS): string {
    switch (status) {
        case GAME_STATUS.BLACKWIN:
            return "Winner: Black"
        case GAME_STATUS.WHITE:
            return "Winner: White"
        case GAME_STATUS.DRAW:
            return "Draw"
        default:
            return "Undetermined result"
    }
}