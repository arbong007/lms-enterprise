import Link from "next/link"

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <h1 className="text-4xl font-bold mb-4">LMS Enterprise</h1>
      <Link href="/login" className="bg-indigo-600 text-white px-6 py-3 rounded-lg">
        Login
      </Link>
    </div>
  )
}
