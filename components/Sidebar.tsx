"use client"
import Link from "next/link"
export default function Sidebar() {
  return (
    <aside className="w-64 bg-indigo-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-6">LMS</h2>
      <nav className="space-y-4">
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </aside>
  )
}
