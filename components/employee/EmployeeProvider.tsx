"use client";

import { createContext } from "react";

const EmployeeContext =
  createContext(null);

export default function EmployeeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}