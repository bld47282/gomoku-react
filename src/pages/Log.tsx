import { useContext } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { UserContext } from "../context"
import style from './Log.module.css'
import { HistorySquare } from "../components"
import { useLocalStorage } from "../hooks"
import { Game, Square as SquareType } from "../types"
import { gameStateToString } from "../utils"
import { Button } from "../components"

export default function Log() {
  const { user } = useContext(UserContext)
  const { id } = useParams()
  const navigate = useNavigate()
  const parsedId = id ? parseInt(id) : 0
  const [savedGames, saveGame] = useLocalStorage<Game[]>("games", [])
  if (!user) return <Navigate to='/login' />

  return (
    <>
      <div className={style.container}>
        <div
          className={style.grid}
          style={{ gridTemplateColumns: `repeat(${savedGames[parsedId].gameSize}, 1fr)` }}
        >
          {savedGames[parsedId].board.map((x: SquareType) => (
            <HistorySquare state={x.state} turn={x.turn} key={x.id} id={x.id}></HistorySquare>
          ))}
        </div>
      </div>
      <div className={style.container}>{gameStateToString(savedGames[parsedId].gameState)}</div>
      <div className={style.container}>
        <Button onClick={() => {
          navigate(-1)
        }}>Back</Button>
      </div>
    </>
  )
}
