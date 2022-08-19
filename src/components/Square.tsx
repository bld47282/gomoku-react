import style from "./Square.module.css"
import { SQUARE_STATUS } from "../constants/index"
import { Square as SquareProps } from '../types'

const getClassNames = (status: SQUARE_STATUS) => {
  switch(status) {
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

export default function Square(props: SquareProps) {
  return (
    <div className={getClassNames(props.state)}>{props.turn}</div>
  )
}
