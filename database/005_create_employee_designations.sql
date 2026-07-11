create table employee_designations (
    id uuid primary key default gen_random_uuid(),

    employee_id uuid not null references employees(id) on delete cascade,

    designation_id uuid not null references designations(id),

    is_primary boolean not null default false,

    created_at timestamptz not null default now(),

    unique (employee_id, designation_id)
);

create index idx_employee_designations_employee
on employee_designations(employee_id);

create index idx_employee_designations_designation
on employee_designations(designation_id);