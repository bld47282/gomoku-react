import { Button, NumberDropdown } from '../components'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'


import style from './Home.module.css'
import { UserContext } from '../context'

export default function Home() {
  const navigate = useNavigate()
  const user = useContext(UserContext)

  return (
    <div className={style.container}>
      <NumberDropdown start={5} end={19}></NumberDropdown>
      <Button onClick={() => {
        navigate("/game")
        user.gameSize = 19
      }}>Start</Button>
    </div>
  )
}
