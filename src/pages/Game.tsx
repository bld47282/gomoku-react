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

  const updateBoard = (id: number) => {
    const updatedSquare: SquareType = {
      id: id,
      state: (game.gameState === GAME_STATUS.BLACK) ? SQUARE_STATUS.BLACK : SQUARE_STATUS.WHITE,
      turn: game.turn,
      onClick: updateBoard
    }

    setGame( {
      gameSize: game.gameSize,
      gameState: (game.gameState === GAME_STATUS.BLACK) ? GAME_STATUS.WHITE : GAME_STATUS.BLACK,
      turn: game.turn + 1,
      board: game.board.map((x) => ((x.id === id) ? updatedSquare : x))
    } )
  }

  const newBoard: SquareType[] = []
  
  for (let i = 0; i < (parsedSize * parsedSize); i++) {
    const newSquare: SquareType = {
      id: i,
      state: SQUARE_STATUS.EMPTY,
      turn: null,
      onClick: updateBoard
    }
    newBoard.push(newSquare)
  }

  const [game, setGame] = useState<GameType>( {
    gameSize: parsedSize, 
    gameState: GAME_STATUS.BLACK, 
    turn: 1, 
    board: newBoard
  } )

  if (!user) return <Navigate to='/login' />

  return (
    <div className={style.container}>
      <div
        className={style.grid}
        style={{ gridTemplateColumns: `repeat(${game.gameSize}, 1fr)` }}
      >
        {game.board.map((x) => (
          <Square state={x.state} turn={x.turn} key={x.id} id={x.id} onClick={updateBoard}></Square>
        ))}
      </div>
    </div>
  )
}
