import { Button, NumberDropdown } from '../components'

import style from './Home.module.css'

export default function Home() {
  return (
    <div className={style.container}>
      <NumberDropdown start={5} end={19}></NumberDropdown>
      <Button>Start</Button>
    </div>
  )
}
