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