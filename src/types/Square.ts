import { SQUARE_STATUS } from "../constants"

export type Square = {
    state: SQUARE_STATUS
    turn: number | null
}