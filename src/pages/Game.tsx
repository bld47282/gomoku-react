import { useContext, useState } from "react"
import style from './Game.module.css'
import { GAME_STATUS, SQUARE_STATUS } from "../constants"
import { UserContext } from "../context"
import { Square as SquareType } from "../types"
import { Square } from "../components"
import { Navigate } from "react-router-dom"

export default function Game() {
  const user = useContext(UserContext)
  const [board, setBoard] = useState<SquareType[] | null>(null)

  if (!user.user) return <Navigate to='/login' />
  if (!user.gameSize) user.gameSize = 19
  if (!user.turn) user.turn = 1
  if (!user.gameState) user.gameState = GAME_STATUS.BLACK

  const updateBoard = (id: number, state: SQUARE_STATUS) => {
    if (!board || state !== SQUARE_STATUS.EMPTY) return
    console.log(id)
    const updatedSquare: SquareType = {
      id: id,
      state: (user.gameState === GAME_STATUS.BLACK) ? SQUARE_STATUS.BLACK : SQUARE_STATUS.WHITE,
      turn: (user.turn ? user.turn : 0),
      onClick: updateBoard
    }

    const updatedBoard = board?.map((x) => ((x.id === id) ? updatedSquare : x))
    user.turn = (user.turn ? (user.turn + 1) : 1)
    user.gameState = ((user.gameState === GAME_STATUS.BLACK) ? GAME_STATUS.WHITE : GAME_STATUS.BLACK)
    setBoard(updatedBoard)
  }

  if (!board) {
    const newBoard: SquareType[] = []
    for (let i = 0; i < (user.gameSize * user.gameSize); i++) {
      const newSquare: SquareType = {
        id: i,
        state: SQUARE_STATUS.EMPTY,
        turn: null,
        onClick: updateBoard
      }
      newBoard.push(newSquare)
    }
    setBoard(newBoard)
  }

  return (
    <div className={style.container}>
      <div
        className={style.grid}
        style={{ gridTemplateColumns: `repeat(${user.gameSize}, 1fr)` }}
      >
        {board?.map((x) => (
          <Square state={x.state} turn={x.turn} key={x.id} id={x.id} onClick={updateBoard}></Square>
        ))}
      </div>
    </div>
  )
}
