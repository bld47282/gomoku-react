import style from "./Square.module.css"
import { SQUARE_STATUS } from "../constants/index"
import { Square as SquareProps } from '../types'

export default function Square(props: SquareProps) {
  return (
    <div className={`${style.square} ${style.black}`}></div>
  )
}
