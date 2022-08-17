import { Button, NumberDropdown } from '../components'
import { useNavigate } from 'react-router-dom'


import style from './Home.module.css'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className={style.container}>
      <NumberDropdown start={5} end={19}></NumberDropdown>
      <Button onClick={() => navigate("/game")}>Start</Button>
    </div>
  )
}
