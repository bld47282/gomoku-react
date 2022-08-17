import style from "./Square.module.css"
import { SQUARE_STATUS } from "../constants/index"

type SquareProps = {
    state: SQUARE_STATUS
    turn: number | null
}

export default function Square(props: SquareProps) {
  return (
    <div className={`${style.square} ${style.black}`}></div>
  )
}
