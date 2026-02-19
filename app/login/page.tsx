"use client"
import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { useRouter } from "next/navigation"

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (!error) router.push("/dashboard")
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h2 className="text-2xl mb-6">Login</h2>
        <input className="w-full mb-4 p-2 border" placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} />
        <input type="password" className="w-full mb-4 p-2 border"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} />
        <button onClick={login}
          className="w-full bg-indigo-600 text-white p-2 rounded">
          Login
        </button>
      </div>
    </div>
  )
}
