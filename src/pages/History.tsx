import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../context"

export default function History() {
  const user = useContext(UserContext)
  if (!user.user) return <Navigate to='/login' />
  
  return (
    <>
      <div>History</div>
    </>
  )
}
