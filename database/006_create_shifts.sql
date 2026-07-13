create table shifts (
    id uuid primary key default gen_random_uuid(),

    code varchar(20) unique not null,

    name varchar(100) not null,

    start_time time not null,

    end_time time not null,

    grace_minutes integer not null default 0,

    is_active boolean not null default true,

    created_at timestamptz not null default now(),

    updated_at timestamptz not null default now()
);