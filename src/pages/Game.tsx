import { useContext, useState } from "react"
import style from './Game.module.css'
import { SQUARE_STATUS } from "../constants"
import { UserContext } from "../context"
import { Square as SquareType } from "../types"
import { Square } from "../components"

export default function Game() {  
  const user = useContext(UserContext)
  const [board, setBoard] = useState<SquareType[] | null>(null)

  if (!user.gameSize) {
    user.gameSize = 19
  }

  if (!board) {
    const newBoard: SquareType[] = []
    for (let i = 0; i < (user.gameSize * user.gameSize); i++) {
      const newSquare: SquareType = {
        state: SQUARE_STATUS.BLACK, 
        turn: null
      }
      newBoard.push(newSquare) 
    }
    setBoard(newBoard)
  }

  console.log(board)
  return (
    <div className={style.container}>
      <div 
        className={style.grid}
        style={{ gridTemplateColumns: `repeat(${user.gameSize}, 1fr)`}}
      >
        {board?.map((x, index) => (
          <Square state={x.state} turn={x.turn} key={index}></Square>
        ))}
      </div>
    </div>
  )
}
