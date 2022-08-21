import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import style from './Game.module.css'
import { GAME_STATUS, SQUARE_STATUS } from "../constants"
import { UserContext } from "../context"
import { Game as GameType, Square as SquareType } from "../types"
import { Button, Square } from "../components"
import { Navigate } from "react-router-dom"
import { gameStateToString, hasWon, isDraw } from "../utils"
import { useLocalStorage } from "../hooks"

export default function Game() {
  const { user } = useContext(UserContext)
  const { size } = useParams()
  const navigate = useNavigate()
  const [savedGames, saveGame] = useLocalStorage<GameType[]>("games", [])
  const parsedSize = size ? parseInt(size) : 19

  const updateBoard = (id: number) => {
    // If the game is finished, do nothing
    if (game.gameState !== GAME_STATUS.WHITE && game.gameState !== GAME_STATUS.BLACK) return

    // Calculate the new state of the last square
    const updatedSquare: SquareType = {
      id: id,
      state: (game.gameState === GAME_STATUS.BLACK) ? SQUARE_STATUS.BLACK : SQUARE_STATUS.WHITE,
      turn: game.turn
    }

    // TODO: Rewrite this triple-nested ternery operator which determines the new game state
    const newGameState: GAME_STATUS = hasWon(updatedSquare, game) ? (updatedSquare.state === SQUARE_STATUS.BLACK) ? GAME_STATUS.BLACKWIN : GAME_STATUS.WHITEWIN : isDraw(updatedSquare, game) ? GAME_STATUS.DRAW : (game.gameState === GAME_STATUS.BLACK) ? GAME_STATUS.WHITE : GAME_STATUS.BLACK

    setGame({
      gameSize: game.gameSize,
      gameState: newGameState,
      turn: game.turn + 1,
      board: game.board.map((x) => ((x.id === id) ? updatedSquare : x))
    })
  }

  // A new blank board
  const newBoard: SquareType[] = []
  for (let i = 0; i < (parsedSize * parsedSize); i++) {
    const newSquare: SquareType = {
      id: i,
      state: SQUARE_STATUS.EMPTY,
      turn: null
    }
    newBoard.push(newSquare)
  }

  const [game, setGame] = useState<GameType>({
    gameSize: parsedSize,
    gameState: GAME_STATUS.BLACK,
    turn: 1,
    board: newBoard
  })

  if (!user) return <Navigate to='/login' />

  return (
    <>
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
      <div className={style.container}>{gameStateToString(game.gameState)}</div>
      <div className={style.container}>
        <Button onClick={() => {
          setGame({
            gameSize: parsedSize,
            gameState: GAME_STATUS.BLACK,
            turn: 1,
            board: newBoard
          })
        }}>Restart</Button>
        <Button onClick={() => {
          saveGame([...savedGames, game])
          navigate("/home")
        }}>Leave</Button>
      </div>
    </>
  )
}
