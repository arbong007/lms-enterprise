import Sidebar from "@/components/Sidebar"
import Topbar from "@/components/Topbar"

export default function AdminDashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <div className="p-8">Admin Dashboard</div>
      </div>
    </div>
  )
}
