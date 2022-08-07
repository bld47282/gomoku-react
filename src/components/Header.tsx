import { Link } from "react-router-dom"
import style from "./Header.module.css"

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div>Gomoku React</div>
        <div>Login</div>
      </div>
    </header>

  )
}
