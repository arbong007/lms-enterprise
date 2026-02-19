import Sidebar from "@/components/Sidebar"
import Topbar from "@/components/Topbar"

export default function DosenDashboard() {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1">
                <Topbar />
                <div className="p-8">Dashboard Dosen</div>
            </div>
        </div>
    )
}
