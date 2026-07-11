# Database Design

## Overview

The Khan Pharmacy Staff Management & Payroll System (KPSMS) uses PostgreSQL (Supabase) as its primary relational database.

The database is designed to be:

- Scalable
- Secure
- Normalized
- Role-Based
- Multi-Branch Ready
- Audit Friendly

---

# Core Modules

1. Authentication
2. Employee Management
3. Attendance
4. Shift Management
5. Counter Management
6. Leave Management
7. Task Management
8. Notice Board
9. Payroll
10. Reports

---

# Database Tables

| Table | Purpose | Status |
|--------|----------|--------|
| roles | User Roles | Planned |
| employees | Employee Information | Planned |
| shifts | Working Shifts | Planned |
| counters | Counter Information | Planned |
| attendance_logs | Attendance Records | Planned |
| leave_requests | Leave Applications | Planned |
| tasks | Employee Tasks | Planned |
| notices | Notice Board | Planned |
| payrolls | Salary Calculation | Planned |
| salary_payments | Salary Payment History | Planned |
| audit_logs | System Activity | Planned |
| settings | System Settings | Planned |

---

# Database Naming Rules

## Tables

Plural

Example

employees

attendance_logs

leave_requests

---

## Primary Key

id

UUID

---

## Foreign Key

role_id

employee_id

shift_id

counter_id

---

## Timestamps

created_at

updated_at

---

## Status Fields

status

Always use ENUM whenever possible.

---

# Soft Delete

Every major table will support soft delete.

deleted_at

deleted_by

---

# Audit

Important actions will be logged.

Create Employee

Delete Employee

Salary Generated

Salary Paid

Attendance Edited

---

# Future Expansion

The database is designed for:

- Multi Branch
- Inventory
- POS
- CRM
- Mobile App
- Accounting

---

# Employee Module

## Purpose

The Employee module stores all staff information and serves as the foundation for Attendance, Payroll, Leave Management, Task Management, and Reporting.

## Main Table

**employees**

### Core Information

- Employee Code
- Full Name
- Phone Number
- Email Address
- National ID (NID)
- Date of Birth
- Blood Group
- Father's Name
- Educational Background

### Employment Information

- Department
- Primary Designation
- Joining Date
- Employment Status
- Basic Salary

### Contact Information

- Permanent Address
- Temporary Address
- Emergency Contact Name
- Emergency Contact Relationship
- Emergency Contact Number

### System Information

- System Role
- Login PIN (Hashed)
- Profile Photo URL
- Created At
- Updated At

---

## Employees Table

| Field | Type | Required | Description |
|------|------|----------|-------------|
| id | UUID | Yes | Primary Key |
| employee_code | VARCHAR(20) | Yes | Unique Employee Code |
| full_name | VARCHAR(150) | Yes | Employee Full Name |
| phone | VARCHAR(20) | Yes | Primary Contact Number |
| email | VARCHAR(150) | No | Email Address |
| nid_number | VARCHAR(30) | No | National ID Number |
| date_of_birth | DATE | No | Birth Date |
| blood_group | VARCHAR(5) | No | Blood Group |
| father_name | VARCHAR(150) | No | Father's Name |
| mother_name | VARCHAR(150) | No | Mother's Name |
| education | TEXT | No | Educational Background |
| permanent_address | TEXT | No | Permanent Address |
| present_address | TEXT | No | Present Address |
| emergency_contact_name | VARCHAR(150) | No | Emergency Contact Name |
| emergency_contact_relation | VARCHAR(50) | No | Relation |
| emergency_contact_phone | VARCHAR(20) | No | Emergency Contact Number |
| department_id | UUID | Yes | Reference to Departments |
| role_id | UUID | Yes | Reference to Roles |
| joining_date | DATE | Yes | Joining Date |
| basic_salary | NUMERIC(12,2) | Yes | Basic Salary |
| status | VARCHAR(20) | Yes | Active / Inactive / On Leave |
| pin_hash | TEXT | Yes | Hashed Login PIN |
| profile_photo_url | TEXT | No | Profile Photo |
| created_at | TIMESTAMPTZ | Yes | Created Time |
| updated_at | TIMESTAMPTZ | Yes | Updated Time |

---

## Employee Status

| Value | Meaning |
|------|---------|
| ACTIVE | Currently Working |
| INACTIVE | Temporarily Disabled |
| ON_LEAVE | Employee on Leave |
| TERMINATED | Employment Ended |

---

# Entity Relationship

## Tables

- departments
- roles
- designations
- employees
- employee_designations

## Relationships

departments (1) ------< employees

roles (1) ------< employees

employees (1) ------< employee_designations >------ (1) designations