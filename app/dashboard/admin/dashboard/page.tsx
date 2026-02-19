import Sidebar from "@/components/Sidebar"
import Topbar from "@/components/Topbar"

export default function AdminDashboard() {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1">
                <Topbar />
                <div className="p-8 grid grid-cols-3 gap-6">
                    <Card title="Total Users" value="0" />
                    <Card title="Total Courses" value="0" />
                    <Card title="Active Tenants" value="0" />
                </div>
            </div>
        </div>
    )
}

function Card({ title, value }: any) {
    return (
        <div className="bg-white p-6 rounded-xl shadow">
            <h3>{title}</h3>
            <p className="text-3xl font-bold">{value}</p>
        </div>
    )
}
