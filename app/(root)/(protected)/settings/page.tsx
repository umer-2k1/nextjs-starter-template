import { auth } from "@/auth"

const Settings = async() => {
  const session  = await auth()
  return (
    <div>{JSON.stringify(session)} SWDSA</div> 
  )
}

export default Settings