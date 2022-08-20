import { Button, NumberDropdown } from '../components'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


import style from './Home.module.css'

export default function Home() {
  const navigate = useNavigate()
  const [gameSize, setGameSize] = useState<number>(19)
  const handleChange = (e: any) => {
    setGameSize(e.target.value)
  }

  return (
    <div className={style.container}>
      <NumberDropdown start={5} end={19} onChange={handleChange}></NumberDropdown>
      <Button onClick={() => {
        navigate("/game"+gameSize)
      }}>Start</Button>
    </div>
  )
}
