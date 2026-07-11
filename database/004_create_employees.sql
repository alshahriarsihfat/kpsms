create table employees (
    id uuid primary key default gen_random_uuid(),

    employee_code varchar(20) unique not null,

    full_name varchar(150) not null,

    phone varchar(20) not null,

    email varchar(150),

    nid_number varchar(30),

    date_of_birth date,

    blood_group varchar(5),

    father_name varchar(150),

    mother_name varchar(150),

    education text,

    permanent_address text,

    present_address text,

    emergency_contact_name varchar(150),

    emergency_contact_relation varchar(50),

    emergency_contact_phone varchar(20),

    department_id uuid not null references departments(id),

    role_id uuid not null references roles(id),

    joining_date date not null,

    basic_salary numeric(12,2) not null default 0,

    status varchar(20) not null default 'ACTIVE',

    pin_hash text not null,

    profile_photo_url text,

    created_at timestamptz not null default now(),

    updated_at timestamptz not null default now()
);