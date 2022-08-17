import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../context"
import { Square } from "../components"
import { SQUARE_STATUS } from "../constants"

export default function History() {
  const { user } = useContext(UserContext)
  if (!user) return <Navigate to='/login' />
  
  return (
    <>
      <div>History</div>
      <Square state={SQUARE_STATUS.BLACK} turn={4}></Square>
      <Square state={SQUARE_STATUS.WHITE} turn={4}></Square>
      <Square state={SQUARE_STATUS.BLACK} turn={4}></Square>
      <Square state={SQUARE_STATUS.WHITE} turn={4}></Square>
    </>
  )
}
