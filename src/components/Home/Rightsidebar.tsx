"use client"

import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bug, UserPlus, User } from "lucide-react"
import { Button } from "../ui/button"

type SidebarData = {
  notifications: { icon: "Bug" | "UserPlus" | "User"; title: string; time: string }[];
  activities: { avatar?: string; avatarFallback: string; title: string; time: string }[];
  contacts: { avatar: string; avatarFallback: string; name: string }[];
}

const iconMap = {
  Bug,
  UserPlus,
  User,
}

export function Rightsidebar() {
  const [data, setData] = useState<SidebarData | null>(null)

  useEffect(() => {
    fetch("/rightsidebar.json")
      .then((res) => res.json())
      .then((json) => setData(json))
  }, [])

  if (!data) return <div className="p-4">Loading...</div>

  return (
    <div className="space-y-8 p-4 border-r">
      {/* Notifications */}
      <div>
        <div className="text-left">
          <h2 className="text-base font-semibold mb-4">Notifications</h2>
        </div>
        <div className="space-y-4">
          {data.notifications.map((n, idx) => {
            const Icon = iconMap[n.icon]
            return (
              <div key={idx} className="flex items-start gap-3">
                <Button variant="ghost" size="icon" className="size-7 -ml-1">
                  <Icon className="w-5 h-5 text-muted-foreground" />
                </Button>
                <div>
                  <p className="text-sm font-medium">{n.title}</p>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">{n.time}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Activities */}
      <div>
        <div className="text-left">
          <h2 className="text-base font-semibold mb-4">Activities</h2>
        </div>
        <div className="space-y-4">
          {data.activities.map((a, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <Avatar className="w-6 h-6">
                {a.avatar ? <AvatarImage src={a.avatar} /> : null}
                <AvatarFallback>{a.avatarFallback}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{a.title}</p>
                <div className="text-left">
                <p className="text-xs text-muted-foreground">{a.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contacts */}
      <div>
        <div className="text-left">
          <h2 className="text-base font-semibold mb-4">Contacts</h2>
        </div>
        <div className="space-y-4">
          {data.contacts.map((c, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={c.avatar} />
                <AvatarFallback>{c.avatarFallback}</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
