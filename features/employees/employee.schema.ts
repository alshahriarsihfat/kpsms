import { z } from "zod";

export const employeeSchema = z.object({
  employeeCode: z
    .string()
    .min(6, "Employee Code is required")
    .max(10),

  fullName: z
    .string()
    .min(3, "Full Name is required"),

  phone: z
    .string()
    .regex(/^01[3-9]\d{8}$/, "Invalid phone number"),

  email: z
    .email("Invalid email")
    .optional()
    .or(z.literal("")),

  nidNumber: z
    .string()
    .optional(),

  dateOfBirth: z
    .string()
    .optional(),
});

export type EmployeeFormData =
  z.infer<typeof employeeSchema>;