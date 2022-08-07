import { useState } from 'react'
import { Button, Input } from '../components'
import users from "../data/users.json"

import style from './Login.module.css'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    )
    if (!user) {
      console.log('invalid password or username')
    } else {
      console.log('logged in')
    }
  }

  return (
    <form className={style.container} 
      onSubmit={(e) => {
        e.preventDefault()
        handleLogin()
      }}
    >
      <Input
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit">Login</Button>
    </form>
  )
}
