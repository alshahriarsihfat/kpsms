create table designations (
    id uuid primary key default gen_random_uuid(),

    code varchar(50) unique not null,

    name varchar(150) unique not null,

    description text,

    display_order integer not null default 0,

    is_active boolean not null default true,

    created_at timestamptz not null default now(),

    updated_at timestamptz not null default now()
);

create index idx_designations_code
on designations(code);

create index idx_designations_active
on designations(is_active);

create index idx_designations_display_order
on designations(display_order);