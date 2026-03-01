import { useParams } from "react-router-dom"
import { AuthView } from "@daveyplate/better-auth-ui"

export default function AuthPage() {
  const { pathname } = useParams()

  return (
    <main className="flex flex-col p-6 items-center justify-center h-[80dvh]">
      <AuthView pathname={pathname} classNames={{base: 'bg-black/10 ring ring-indigo-900'}} />
    </main>
  )
}