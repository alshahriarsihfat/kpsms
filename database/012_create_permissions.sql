create table permissions (
    id uuid primary key default gen_random_uuid(),

    code varchar(100) unique not null,

    name varchar(150) not null,

    module varchar(50) not null,

    description text,

    created_at timestamptz not null default now()
);

create index idx_permissions_module
on permissions(module);