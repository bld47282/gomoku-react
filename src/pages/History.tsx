import { useContext } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { Button } from "../components"
import { UserContext } from "../context"
import { useLocalStorage } from "../hooks"
import { Game } from "../types"
import style from './History.module.css'

export default function History() {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const [savedGames, saveGame] = useLocalStorage<Game[]>("games", [])
  if (!user) return <Navigate to='/login' />

  console.log(savedGames)

  return (
    <>
      <div className={style.container}>
        <p>History</p>
        {savedGames.map((x, index) => (
          <Button key={index} onClick={() => (
            navigate("/log" + index)
          )}>{index}</Button>
        ))}
      </div>
    </>
  )
}
