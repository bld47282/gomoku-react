import { SQUARE_STATUS } from "../constants"

export type Square = {
    x: number
    y: number
    state: SQUARE_STATUS
    turn: number | null
}