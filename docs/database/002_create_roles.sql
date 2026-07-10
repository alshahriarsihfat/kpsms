create table roles (
    id uuid primary key default gen_random_uuid(),
    code varchar(20) unique not null,
    name varchar(100) unique not null,
    description text,
    is_active boolean not null default true,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);