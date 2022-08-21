import { useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { Button } from "../components"
import { GAME_STATUS } from "../constants"
import { UserContext } from "../context"
import { useLocalStorage } from "../hooks"
import { Game } from "../types"
import style from './History.module.css'

export default function History() {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const [savedGames, saveGame] = useLocalStorage<Game[]>("games", [])
  if (!user) return <Navigate to='/login' />

  function gameStateToString(status: GAME_STATUS): string {
    switch(status) {
      case GAME_STATUS.BLACKWIN:
        return "Winner: Black"
      case GAME_STATUS.WHITE:
        return "Winner: White"
      case GAME_STATUS.DRAW:
        return "Draw"
      default:
        return "Undetermined result"
    }
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.cardsContainer}>
          {savedGames.map((x, index) => (
            <div className={style.card}>
              Game #{index}: {gameStateToString(x.gameState)}
              <Button key={index} onClick={() => (
                navigate("/log" + index)
              )}>View</Button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
