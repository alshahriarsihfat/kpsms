# Authentication Module

## Purpose

The Authentication Module provides secure access to the Khan Pharmacy Staff Management & Payroll System (KPSMS).

It allows employees to log in using their Employee Code and a secure 4-digit numeric PIN while enforcing role-based access control.

---

## Login Method

- Employee Code
- 4-digit Numeric PIN

---

## User Types

- Administrator
- Supervisor
- Staff

---

## Authentication Flow

1. Employee enters Employee Code.
2. Employee enters 4-digit PIN.
3. System validates the credentials.
4. System checks whether the employee exists.
5. System verifies that Login is enabled.
6. System verifies the employee status is ACTIVE.
7. System verifies the hashed PIN.
8. System creates a secure authenticated session.
9. System updates Last Login Time.
10. User is redirected to the Dashboard.

---

## Login Screen

### Fields

- Employee Code
- 4-digit Numeric PIN

### Buttons

- Login

---

## Validation Rules

- Employee Code is required.
- PIN is required.
- PIN must contain exactly 4 digits.
- Only numeric characters (0–9) are allowed.

---

## Login Success

When authentication succeeds:

- Create secure session.
- Update Last Login Time.
- Redirect user to Dashboard.
- Load user's Roles and Permissions.

---

## Login Failure

If authentication fails:

Display the following message:

> Invalid Employee Code or PIN.

The system must never indicate whether the Employee Code or PIN was incorrect.

---

## Account Protection

- Maximum 5 failed login attempts.
- After 5 failed attempts, login will be locked for 15 minutes.
- Administrator can manually unlock an account.
- Every failed login attempt will be recorded.

---

## Security Rules

- PIN must always be stored as a secure hash.
- Plain text PIN must never be stored.
- Authentication must always happen on the server.
- Session expires automatically after inactivity.
- HTTPS must be used in production.
- Every login must be recorded in the audit log.

---

## Session Rules

After successful login:

- Generate secure session.
- Store authenticated user information.
- Store active Role.
- Store granted Permissions.
- Automatically destroy session after inactivity.
- Logout immediately if the employee account becomes disabled.

---

## Dashboard Access

### Administrator

- Full system access
- System Settings
- Employee Management
- Attendance Management
- Leave Management
- Payroll Management
- Reports
- Role & Permission Management

### Supervisor

- Personal Dashboard
- Staff Attendance Management
- Staff Leave Management
- Staff Salary Viewing (Based on Permission)
- Staff Time Management
- Shift Management
- Reports (Based on Permission)

### Staff

- Personal Dashboard
- Check In
- Meal Break
- Short Break
- Prayer Break
- Official Outside Duty
- Personal Outside
- Check Out
- Leave Request
- Payslip
- Profile

---

## Logout

When the user logs out:

- Destroy authenticated session.
- Clear stored authentication data.
- Redirect to Login Page.

---

## Future Enhancements

- Remember Device
- QR Code Login
- Fingerprint Authentication
- Face Recognition
- Two-Factor Authentication (2FA)
- Mobile App Authentication
- Login Notification
- Device Management
- Login History