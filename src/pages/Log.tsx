import { useContext } from "react"
import { Navigate, useParams } from "react-router-dom"
import { UserContext } from "../context"
import style from './Log.module.css'
import { HistorySquare } from "../components"
import { useLocalStorage } from "../hooks"
import { Game, Square as SquareType } from "../types"

export default function Log() {
  const { user } = useContext(UserContext)
  const { id } = useParams()
  const parsedId = id ? parseInt(id) : 0
  const [savedGames, saveGame] = useLocalStorage<Game[]>("games", [])
  if (!user) return <Navigate to='/login' />

  return (
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
  )
}
