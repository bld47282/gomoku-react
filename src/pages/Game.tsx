import { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import style from './Game.module.css'
import { GAME_STATUS, SQUARE_STATUS } from "../constants"
import { UserContext } from "../context"
import { Game as GameType, Square as SquareType } from "../types"
import { Square } from "../components"
import { Navigate } from "react-router-dom"

export default function Game() {
  const { user } = useContext(UserContext)
  const { size } = useParams()
  const parsedSize = size? parseInt(size) : 19
  const [game, setGame] = useState<GameType>( {gameSize: parsedSize, gameState: GAME_STATUS.BLACK, turn: 1} )
  const [board, setBoard] = useState<SquareType[] | null>(null)

  if (!user) return <Navigate to='/login' />

  const updateBoard = (id: number, state: SQUARE_STATUS) => {
    if (!board || state !== SQUARE_STATUS.EMPTY) return
    const updatedSquare: SquareType = {
      id: id,
      state: (game.gameState === GAME_STATUS.BLACK) ? SQUARE_STATUS.BLACK : SQUARE_STATUS.WHITE,
      turn: game.turn,
      onClick: updateBoard
    }

    setGame({
      gameSize: game.gameSize,
      gameState: (game.gameState === GAME_STATUS.BLACK) ? GAME_STATUS.WHITE : GAME_STATUS.BLACK,
      turn: game.turn + 1
    })
    setBoard(board?.map((x) => ((x.id === id) ? updatedSquare : x)))
  }

  if (!board) {
    const newBoard: SquareType[] = []
    for (let i = 0; i < (game.gameSize * game.gameSize); i++) {
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
        style={{ gridTemplateColumns: `repeat(${game.gameSize}, 1fr)` }}
      >
        {board?.map((x) => (
          <Square state={x.state} turn={x.turn} key={x.id} id={x.id} onClick={updateBoard}></Square>
        ))}
      </div>
    </div>
  )
}
