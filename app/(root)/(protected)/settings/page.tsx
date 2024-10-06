import { logout } from "@/actions/login"
import { auth, signOut } from "@/auth"
import { Button } from "@/components/ui/button"
import { Flex } from "@/components/ui/flex"

const Settings = async() => {
  const session  = await auth()
  return (
    <Flex direction="column" className="gap-12">
    <div>{JSON.stringify(session)} SWDSA</div> 
    <form action={logout}>
    <Button type="submit">Signout1</Button>
    </form>
    </Flex>
  )
}

export default Settings