import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, Calendar, Plus, Filter, ArrowUpDown } from "lucide-react"
import { useState } from "react"

type Order = {
  id: string
  user: {
    name: string
    avatar: string
  }
  project: string
  address: string
  date: string
  status: "In Progress" | "Complete" | "Pending" | "Approved" | "Rejected"
}

const statusColors: Record<Order["status"], string> = {
  "In Progress": "text-blue-500",
  "Complete": "text-green-500",
  "Pending": "text-sky-400",
  "Approved": "text-yellow-500",
  "Rejected": "text-gray-500",
}

const data: Order[] = [
  {
    id: "#CM9801",
    user: { name: "Natali Craig", avatar: "https://i.pravatar.cc/32?img=1" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: { name: "Kate Morrison", avatar: "https://i.pravatar.cc/32?img=2" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "https://i.pravatar.cc/32?img=3" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: { name: "Orlando Diggs", avatar: "https://i.pravatar.cc/32?img=4" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805757",
    user: { name: "Andi Lane", avatar: "https://i.pravatar.cc/32?img=5" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9805hid",
    user: { name: "Andi Lane", avatar: "https://i.pravatar.cc/32?img=5" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9805658",
    user: { name: "Andi Lane", avatar: "https://i.pravatar.cc/32?img=5" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  {
    id: "#CM980ut8",
    user: { name: "Andi Lane", avatar: "https://i.pravatar.cc/32?img=5" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  {
    id: "#CM980ft",
    user: { name: "Andi Lane", avatar: "https://i.pravatar.cc/32?img=5" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  {
    id: "#CM980580",
    user: { name: "Andi Lane", avatar: "https://i.pravatar.cc/32?img=5" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
]

export default function OrderTable() {
  const [search, setSearch] = useState("")
  const [showMoreId, setShowMoreId] = useState("");

  const filtered = data.filter((order) =>
    order.user.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="w-full ml-1 mr-1">
      {/* Header Section */}
      <div className="flex flex-col">
        <div className="mb-4 text-left">
          <h2 className="text-lg font-semibold">Order List</h2>
        </div>
        <div className="flex items-center flex-row justify-between bg-secondary p-2 rounded mb-2">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon"><Plus className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon"><Filter className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon"><ArrowUpDown className="h-4 w-4" /></Button>
          </div>
          <div>
            <Input
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-40"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead><Checkbox /></TableHead>
            <TableHead>Order ID</TableHead>
            <TableHead>User</TableHead>
            <TableHead>Project</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filtered.map((order) => (
            <TableRow onMouseEnter={() => setShowMoreId(order.id)} onMouseLeave={() => setShowMoreId("")} key={order.id}>
              <TableCell className="text-left"><Checkbox /></TableCell>
              <TableCell className="text-left">{order.id}</TableCell>
              <TableCell className="text-left">
                <div className="flex items-center gap-2 text-left">
                  <img src={order.user.avatar} className="w-8 h-8 rounded-full" />
                  <span>{order.user.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-left">{order.project}</TableCell>
              <TableCell className="text-left">{order.address}</TableCell>
              <TableCell className="flex items-center gap-1 text-left">
                <Calendar className="w-4 h-4" /> {order.date}
              </TableCell>
              <TableCell className="text-left">
                <span className={`font-medium ${statusColors[order.status]}`}>
                  {order.status}
                </span>
              </TableCell>
                <TableCell className="text-left">
                { showMoreId === order.id 
                  ?
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                  :
                  <Button variant="ghost" size="icon">
                  </Button>
                }
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex justify-end items-center gap-2 mt-4">
        <Button variant="ghost" size="icon">{"<"}</Button>
        {[1, 2, 3, 4, 5].map((page) => (
          <Button key={page} variant={page === 1 ? "default" : "ghost"} size="sm">
            {page}
          </Button>
        ))}
        <Button variant="ghost" size="icon">{">"}</Button>
      </div>
    </div>
  )
}
