insert into permissions (code, name, module, description) values

-- Attendance
('attendance.view', 'View Attendance', 'Attendance', 'View attendance records'),
('attendance.manage', 'Manage Attendance', 'Attendance', 'Add and edit attendance'),
('attendance.correct', 'Correct Attendance', 'Attendance', 'Correct attendance records'),

-- Leave
('leave.view', 'View Leave', 'Leave', 'View leave records'),
('leave.apply', 'Apply Leave', 'Leave', 'Apply for leave'),
('leave.approve', 'Approve Leave', 'Leave', 'Approve or reject leave'),

-- Payroll
('payroll.view', 'View Payroll', 'Payroll', 'View payroll'),
('payroll.manage', 'Manage Payroll', 'Payroll', 'Manage payroll'),
('payroll.finalize', 'Finalize Payroll', 'Payroll', 'Finalize payroll'),

-- Employee
('employee.view', 'View Employees', 'Employee', 'View employees'),
('employee.manage', 'Manage Employees', 'Employee', 'Create and update employees'),

-- Shift
('shift.view', 'View Shifts', 'Shift', 'View shifts'),
('shift.manage', 'Manage Shifts', 'Shift', 'Create and assign shifts'),

-- Reports
('reports.view', 'View Reports', 'Reports', 'Access reports'),

-- Settings
('settings.manage', 'Manage Settings', 'Settings', 'System configuration');