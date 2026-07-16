"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import Label from "@/components/ui/label";
import Logo from "@/components/ui/logo";

export default function LoginPage() {
  const [employeeCode, setEmployeeCode] = useState("");
  const [pin, setPin] = useState("");

  const [loading, setLoading] = useState(false);

  const [employeeCodeError, setEmployeeCodeError] = useState("");
  const [pinError, setPinError] = useState("");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setEmployeeCodeError("");
    setPinError("");

    let valid = true;

    if (!employeeCode.trim()) {
      setEmployeeCodeError("Employee Code is required.");
      valid = false;
    }

    if (!pin.trim()) {
      setPinError("PIN is required.");
      valid = false;
    } else if (!/^\d{4}$/.test(pin)) {
      setPinError("PIN must be exactly 4 digits.");
      valid = false;
    }

    if (!valid) return;

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);

    alert("Validation Successful");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <Card>
        <Logo />

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <Label htmlFor="employeeCode">
              Employee Code
            </Label>

            <Input
              id="employeeCode"
              value={employeeCode}
              onChange={(e) =>
                setEmployeeCode(e.target.value)
              }
              placeholder="KP9820"
              autoComplete="username"
            />

            {employeeCodeError && (
              <p className="mt-1 text-sm text-red-600">
                {employeeCodeError}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="pin">
              4-Digit PIN
            </Label>

            <Input
              id="pin"
              type="password"
              value={pin}
              onChange={(e) =>
                setPin(e.target.value)
              }
              maxLength={4}
              placeholder="9820"
              autoComplete="current-password"
            />

            {pinError && (
              <p className="mt-1 text-sm text-red-600">
                {pinError}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full"
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </Card>
    </div>
  );
}