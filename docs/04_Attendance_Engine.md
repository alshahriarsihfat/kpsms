# Attendance Module

## Shift Management

Each employee will be assigned to a shift.

### Shift Fields

- Shift Code
- Shift Name
- Start Time
- End Time
- Grace Minutes
- Status

## Attendance Status

| Status | Meaning |
|--------|---------|
| PRESENT | Employee is present |
| LATE | Employee arrived after grace time |
| ABSENT | Employee did not attend |
| LEAVE | Approved leave |
| HOLIDAY | Weekly/Public holiday |
| OFFDAY | Scheduled off day |

## Attendance Rules

- Every employee must have one assigned shift.
- Attendance is recorded once per working day.
- Late is calculated after the grace period.
- Approved leave is not counted as absent.
- Holidays and off days are excluded from absence calculation.
- Attendance history can never be deleted.

## Attendance Actions

- CHECK_IN
- MEAL_BREAK_OUT
- MEAL_BREAK_IN
- SHORT_BREAK_OUT
- SHORT_BREAK_IN
- PRAYER_BREAK_OUT
- PRAYER_BREAK_IN
- OFFICIAL_OUT
- OFFICIAL_IN
- PERSONAL_OUT
- PERSONAL_IN
- CHECK_OUT

## Employee Shift Assignment

- Every employee must have one active shift.
- Shift changes are effective from a specific date.
- Previous shift history is preserved.
- Administrator can assign or change shifts.
- Supervisor can assign shifts only if permission is granted.

## Attendance Session

Each employee has one attendance session per working day.

The session stores:

- Check In
- Check Out
- Working Minutes
- Paid Minutes
- Unpaid Minutes
- Late Minutes
- Early Checkout Minutes
- Overtime Minutes
- Attendance Status

## System Settings

Attendance and payroll rules are configurable.

Examples:

- Late Grace Minutes
- Meal Break Minutes
- Short Break Minutes
- Prayer Break Minutes
- Early Checkout Grace
- Maximum Short Breaks
- Overtime Rule
- Currency