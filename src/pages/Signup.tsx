import { useState } from 'react'
import { Button, Input, Message } from '../components'
import users from "../data/users.json"

import style from './Signup.module.css'

export default function SignUp() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignup = () => {
    if (users.find((u) => u.username === username)) {
      setErrorMessage(`Username ${username} has been taken`)
      return
    }
    
    if (password !== confirmPassword) {
      setErrorMessage(`Passwords do not match`)
      return
    }
  }

  return (
    <form className={style.container} 
      onSubmit={(e) => {
        e.preventDefault()
        handleSignup()
      }}
    >
      {errorMessage && (
        <Message variant="error" message={errorMessage} />
      )}
      <Input
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value)
          setErrorMessage('')
        }}
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
          setErrorMessage('')
        }}
      />
      <Input
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPassword(e.target.value)
          setErrorMessage('')
        }}
      />
      <Button type="submit">Sign Up</Button>
    </form>
  )
}
