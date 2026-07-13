create table attendance_sessions (
    id uuid primary key default gen_random_uuid(),

    employee_id uuid not null references employees(id) on delete cascade,

    attendance_date date not null,

    shift_id uuid not null references shifts(id),

    check_in timestamptz,

    check_out timestamptz,

    total_work_minutes integer not null default 0,

    total_paid_minutes integer not null default 0,

    total_unpaid_minutes integer not null default 0,

    late_minutes integer not null default 0,

    early_checkout_minutes integer not null default 0,

    overtime_minutes integer not null default 0,

    status varchar(20) not null default 'PRESENT',

    created_at timestamptz not null default now(),

    updated_at timestamptz not null default now(),

    unique (employee_id, attendance_date)
);

create index idx_attendance_sessions_employee
on attendance_sessions(employee_id);

create index idx_attendance_sessions_date
on attendance_sessions(attendance_date);

paid_salary numeric(12,2) not null default 0,

unpaid_deduction numeric(12,2) not null default 0,