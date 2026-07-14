create table system_settings (
    id uuid primary key default gen_random_uuid(),

    setting_key varchar(100) unique not null,

    setting_value text not null,

    data_type varchar(20) not null default 'string',

    category varchar(50) not null,

    setting_group varchar(50),

    description text,

    is_editable boolean not null default true,

    created_at timestamptz not null default now(),

    updated_at timestamptz not null default now()
);

create index idx_system_settings_category
on system_settings(category);