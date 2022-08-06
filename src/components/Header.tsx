import style from "./Header.module.css"

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.heading}>Gomoku React</div>
      <button className={style.button}>Login</button>
    </header>

  )
}
