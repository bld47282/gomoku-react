import { createContext } from 'react'
import { GAME_STATUS } from '../constants'
import { User } from '../types'

type UserContextType = {
    user?: User
    gameSize?: number
    turn?: number
    gameState?: GAME_STATUS
    login: (username: string) => void
    logout: () => void
}

const UserContext = createContext<UserContextType>({} as UserContextType )
export default UserContext