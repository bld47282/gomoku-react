import { SQUARE_STATUS } from "../constants"

export type Square = {
    id: number
    state: SQUARE_STATUS
    turn: number | null
    onClick: (id: number, state: SQUARE_STATUS) => void
}