"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  employeeSchema,
  EmployeeFormData,
} from "@/features/employees/employee.schema";

export default function EmployeeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmployeeFormData>({
    resolver: zodResolver(employeeSchema),
  });

  const onSubmit = (data: EmployeeFormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
    >
      {/* Header */}

      <div className="mb-8">

        <h2 className="text-2xl font-bold">
          Add New Employee
        </h2>

        <p className="mt-2 text-gray-500">
          Step 1 of 3 — Personal Information
        </p>

      </div>

      {/* Progress */}

      <div className="mb-10 h-2 w-full rounded-full bg-gray-200">

        <div className="h-2 w-1/3 rounded-full bg-blue-600"></div>

      </div>

      {/* Form */}

      <div className="grid gap-6 md:grid-cols-2">

        {/* Employee Code */}

        <div>

          <label className="mb-2 block font-medium">
            Employee Code *
          </label>

          <input
            {...register("employeeCode")}
            placeholder="KP9820"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />

          {errors.employeeCode && (
            <p className="mt-1 text-sm text-red-600">
              {errors.employeeCode.message}
            </p>
          )}

        </div>

        {/* Full Name */}

        <div>

          <label className="mb-2 block font-medium">
            Full Name *
          </label>

          <input
            {...register("fullName")}
            placeholder="Employee Name"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />

          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600">
              {errors.fullName.message}
            </p>
          )}

        </div>

        {/* Phone */}

        <div>

          <label className="mb-2 block font-medium">
            Phone Number *
          </label>

          <input
            {...register("phone")}
            placeholder="01XXXXXXXXX"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />

          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">
              {errors.phone.message}
            </p>
          )}

        </div>

        {/* Email */}

        <div>

          <label className="mb-2 block font-medium">
            Email
          </label>

          <input
            {...register("email")}
            placeholder="Optional"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-600">
              {errors.email.message}
            </p>
          )}

        </div>

        {/* NID */}

        <div>

          <label className="mb-2 block font-medium">
            NID Number
          </label>

          <input
            {...register("nidNumber")}
            placeholder="National ID"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />

        </div>

        {/* Date of Birth */}

        <div>

          <label className="mb-2 block font-medium">
            Date of Birth
          </label>

          <input
            type="date"
            {...register("dateOfBirth")}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
          />

        </div>

      </div>

      {/* Button */}

      <div className="mt-10 flex justify-end">

        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Save & Continue →
        </button>

      </div>

    </form>
  );
}