create table employee_roles (
    id uuid primary key default gen_random_uuid(),

    employee_id uuid not null references employees(id) on delete cascade,

    role_id uuid not null references roles(id) on delete cascade,

    is_primary boolean not null default false,

    assigned_by uuid not null references employees(id),

    assigned_at timestamptz not null default now(),

    expires_at timestamptz,

    is_active boolean not null default true,

    remarks text,

    created_at timestamptz not null default now(),

    updated_at timestamptz not null default now(),

    unique(employee_id, role_id)
);

create index idx_employee_roles_employee
on employee_roles(employee_id);

create index idx_employee_roles_role
on employee_roles(role_id);

create index idx_employee_roles_active
on employee_roles(is_active);