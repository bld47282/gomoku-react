import { useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { Button } from "../components"
import { UserContext } from "../context"
import { useLocalStorage } from "../hooks"
import { Game } from "../types"
import style from './History.module.css'
import { gameStateToString } from "../utils"

export default function History() {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const [savedGames, saveGame] = useLocalStorage<Game[]>("games", [])
  if (!user) return <Navigate to='/login' />

  return (
    <>
      <div className={style.container}>
        <div className={style.cardsContainer}>
          {savedGames.map((x, index) => (
            <div className={style.card}>
              Game #{index + 1}: {gameStateToString(x.gameState)}
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
