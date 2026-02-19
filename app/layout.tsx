import "./globals.css"

export const metadata = {
  title: "LMS Enterprise",
  description: "Enterprise LMS with Supabase + Vercel"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-gray-100 text-gray-800">{children}</body>
    </html>
  )
}
