import { Button, Input} from '../components'

export default function Login() {
  return (
      <form>
        <Input name="username" placeholder="Username" value="" />
        <Input name="password" type="password" placeholder="Password" value="" />
        <Button type="submit">Login</Button>
      </form>
  )
}
