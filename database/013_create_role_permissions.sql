create table role_permissions (
    id uuid primary key default gen_random_uuid(),

    role_id uuid not null references roles(id) on delete cascade,

    permission_id uuid not null references permissions(id) on delete cascade,

    created_at timestamptz not null default now(),

    unique(role_id, permission_id)
);

create index idx_role_permissions_role
on role_permissions(role_id);

create index idx_role_permissions_permission
on role_permissions(permission_id);