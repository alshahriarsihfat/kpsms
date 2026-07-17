export type EmploymentStatus =
  | "ACTIVE"
  | "PROBATION"
  | "RESIGNED"
  | "TERMINATED";

export type EmploymentType =
  | "FULL_TIME"
  | "PART_TIME"
  | "CONTRACT"
  | "TEMPORARY";

export type UserRole =
  | "ADMINISTRATOR"
  | "MANAGER"
  | "SUPERVISOR"
  | "STAFF";

export interface EmployeeFormData {
  // Personal
  employeeCode: string;
  fullName: string;
  phone: string;
  email: string;
  nidNumber: string;
  dateOfBirth: string;

  // Employment
  departmentId: string;
  designationId: string;
  role: UserRole;

  employmentType: EmploymentType;
  employmentStatus: EmploymentStatus;

  joiningDate: string;

  branchId: string;

  pin: string;

  // Salary
  basicSalary: number;

  salaryType: "MONTHLY" | "DAILY";

  emergencyContact: string;

  emergencyRelation: string;

  presentAddress: string;

  permanentAddress: string;

  bloodGroup: string;

  photo?: string;
}