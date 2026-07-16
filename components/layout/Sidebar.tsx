"use client";

import {
  LayoutDashboard,
  Users,
  Building2,
  BadgeCheck,
  Clock3,
  CalendarDays,
  Wallet,
  BarChart3,
  Settings,
} from "lucide-react";

import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <aside className="w-72 border-r bg-white min-h-screen">

      <div className="border-b px-6 py-6">
        <h1 className="text-2xl font-bold text-blue-700">
          Khan Pharmacy
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Staff Management System
        </p>
      </div>

      <nav className="space-y-2 p-4">

        <SidebarItem
          href="/"
          title="Dashboard"
          icon={LayoutDashboard}
          active
        />

        <SidebarItem
          href="/employees"
          title="Employees"
          icon={Users}
        />

        <SidebarItem
          href="/departments"
          title="Departments"
          icon={Building2}
        />

        <SidebarItem
          href="/designations"
          title="Designations"
          icon={BadgeCheck}
        />

        <SidebarItem
          href="/attendance"
          title="Attendance"
          icon={Clock3}
        />

        <SidebarItem
          href="/leave"
          title="Leave"
          icon={CalendarDays}
        />

        <SidebarItem
          href="/payroll"
          title="Payroll"
          icon={Wallet}
        />

        <SidebarItem
          href="/reports"
          title="Reports"
          icon={BarChart3}
        />

        <SidebarItem
          href="/settings"
          title="Settings"
          icon={Settings}
        />

      </nav>
    </aside>
  );
}