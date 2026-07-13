create table employee_permissions (
    id uuid primary key default gen_random_uuid(),

    employee_id uuid not null references employees(id) on delete cascade,

    permission_id uuid not null references permissions(id) on delete cascade,

    is_allowed boolean not null,

    assigned_by uuid not null references employees(id),

    reason text,

    created_at timestamptz not null default now(),

    unique(employee_id, permission_id)
);

create index idx_employee_permissions_employee
on employee_permissions(employee_id);

create index idx_employee_permissions_permission
on employee_permissions(permission_id);