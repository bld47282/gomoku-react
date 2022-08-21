import style from "./HistorySquare.module.css"
import { SQUARE_STATUS } from "../constants/index"

type HistorySquareProps = {
    id: number
    state: SQUARE_STATUS
    turn: number | null
}

const getClassNames = (status: SQUARE_STATUS) => {
    switch (status) {
        case SQUARE_STATUS.EMPTY:
            return `${style.square} ${style.empty}`
        case SQUARE_STATUS.BLACK:
            return `${style.square} ${style.black}`
        case SQUARE_STATUS.WHITE:
            return `${style.square} ${style.white}`
        default:
            return `${style.square}`
    }
}

export default function Square(props: HistorySquareProps) {
    return (
        <div
            className={getClassNames(props.state)}
            onClick={(e) => (e.preventDefault())}
        >
            {props.turn}
        </div>
    )
}
