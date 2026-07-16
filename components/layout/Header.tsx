"use client";

import { Bell, Search, UserCircle2 } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-white px-6">

      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h1>

        <p className="text-sm text-slate-500">
          Welcome to Khan Pharmacy Staff Management System
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Search */}

        <div className="relative hidden md:block">

          <Search
            size={18}
            className="absolute left-3 top-3 text-slate-400"
          />

          <input
            placeholder="Search..."
            className="w-64 rounded-xl border border-slate-300 py-2 pl-10 pr-4 outline-none transition focus:border-blue-600"
          />

        </div>

        {/* Notification */}

        <button className="rounded-xl border p-2 hover:bg-slate-100">
          <Bell size={20} />
        </button>

        {/* User */}

        <div className="flex items-center gap-2">

          <UserCircle2
            size={34}
            className="text-blue-600"
          />

          <div className="hidden md:block">

            <p className="text-sm font-semibold">
              Administrator
            </p>

            <p className="text-xs text-slate-500">
              Khan Pharmacy
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}