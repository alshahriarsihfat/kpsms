create table attendance_logs (
    id uuid primary key default gen_random_uuid(),

    employee_id uuid not null references employees(id) on delete cascade,

    action varchar(30) not null,

    is_paid boolean not null default true,

    duration_minutes integer,

    event_time timestamptz not null default now(),

    performed_by uuid not null references employees(id),

    performed_as varchar(20) not null,

    reason text,

    notes text,

    created_at timestamptz not null default now()
);

create index idx_attendance_logs_employee
on attendance_logs(employee_id);

create index idx_attendance_logs_event_time
on attendance_logs(event_time);

create index idx_attendance_logs_action
on attendance_logs(action);