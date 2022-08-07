import style from "./Header.module.css"

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.heading}>Gomoku React</div>
      <div className={style.button}>Login</div>
    </header>

  )
}
