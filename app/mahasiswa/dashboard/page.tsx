import Sidebar from "@/components/Sidebar"
import Topbar from "@/components/Topbar"

export default function MahasiswaDashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <div className="p-8">Mahasiswa Dashboard</div>
      </div>
    </div>
  )
}
