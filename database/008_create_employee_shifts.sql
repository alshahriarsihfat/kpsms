create table employee_shifts (
    id uuid primary key default gen_random_uuid(),

    employee_id uuid not null references employees(id) on delete cascade,

    shift_id uuid not null references shifts(id),

    effective_from date not null,

    effective_to date,

    is_active boolean not null default true,

    assigned_by uuid not null references employees(id),

    created_at timestamptz not null default now()
);

create index idx_employee_shifts_employee
on employee_shifts(employee_id);

create index idx_employee_shifts_shift
on employee_shifts(shift_id);