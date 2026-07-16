"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";

type SidebarItemProps = {
  href: string;
  title: string;
  icon: LucideIcon;
  active?: boolean;
};

export default function SidebarItem({
  href,
  title,
  icon: Icon,
  active = false,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200
      ${
        active
          ? "bg-blue-600 text-white shadow"
          : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
      }`}
    >
      <Icon size={20} />
      <span className="text-sm font-medium">{title}</span>
    </Link>
  );
}