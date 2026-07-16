export type Gender =
  | "MALE"
  | "FEMALE"
  | "OTHER";

export type EmploymentType =
  | "FULL_TIME"
  | "PART_TIME"
  | "CONTRACT"
  | "TEMPORARY";

export type EmployeeStatus =
  | "ACTIVE"
  | "INACTIVE"
  | "ON_LEAVE"
  | "SUSPENDED"
  | "TERMINATED";

export type BloodGroup =
  | "A+"
  | "A-"
  | "B+"
  | "B-"
  | "AB+"
  | "AB-"
  | "O+"
  | "O-";

export interface Employee {
  id: string;

  employeeCode: string;

  fullName: string;

  phone: string;

  email?: string;

  nidNumber?: string;

  dateOfBirth?: string;

  gender?: Gender;

  bloodGroup?: BloodGroup;

  fatherName?: string;

  motherName?: string;

  education?: string;

  permanentAddress?: string;

  presentAddress?: string;

  emergencyContactName?: string;

  emergencyContactRelation?: string;

  emergencyContactPhone?: string;

  departmentId: string;

  roleId: string;

  joiningDate: string;

  confirmationDate?: string;

  resignationDate?: string;

  terminationDate?: string;

  basicSalary: number;

  hourlyRate?: number;

  dailyRate?: number;

  employmentType: EmploymentType;

  status: EmployeeStatus;

  loginEnabled: boolean;

  profilePhotoUrl?: string;

  remarks?: string;

  createdAt: string;

  updatedAt: string;
}