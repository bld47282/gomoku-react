import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context'
import style from "./Header.module.css"

export default function Header() {
  const navigate = useNavigate()
  const { user, logout } = useContext(UserContext)

  const getActions = () => {
    if (user) {
      return (
        <>
          <button className={style.action} onClick={() => navigate('history')}>
            History
          </button>
          <button className={style.action} onClick={() => {
            logout()
            navigate('home')
          }}>
            Logout
          </button>
        </>
      )
    } else {
      return (
        <button className={style.action} onClick={() => navigate('login')}>Login</button>
      )
    }
  }
  
  return (
    <header className={style.header}>
      <div className={style.container}>
        <Link to="/">Gomoku React</Link>
        <div className={style.actions}>
          {getActions()}
        </div>
      </div>
    </header>

  )
}
