"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"

export default function Dashboard() {
  const router = useRouter()

  useEffect(() => {
    async function redirect() {
      const { data } = await supabase.auth.getUser()
      if (!data.user) return router.push("/login")

      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", data.user.id)
        .single()

      router.push(`/${profile?.role}/dashboard`)
    }
    redirect()
  }, [])

  return <div>Loading...</div>
}
