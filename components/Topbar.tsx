"use client"
import { supabase } from "@/lib/supabaseClient"
import { useRouter } from "next/navigation"

export default function Topbar() {
  const router = useRouter()
  const logout = async () => {
    await supabase.auth.signOut()
    router.push("/login")
  }
  return (
    <div className="bg-white shadow p-4 flex justify-between">
      <span>Dashboard</span>
      <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  )
}
