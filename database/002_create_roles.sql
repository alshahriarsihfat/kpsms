create table roles (
    id uuid primary key default gen_random_uuid(),

    code varchar(50) unique not null,

    name varchar(100) unique not null,

    description text,

    is_system boolean not null default false,

    is_active boolean not null default true,

    display_order integer not null default 0,

    created_at timestamptz not null default now(),

    updated_at timestamptz not null default now()
);

create index idx_roles_code
on roles(code);

create index idx_roles_active
on roles(is_active);

create index idx_roles_display_order
on roles(display_order);