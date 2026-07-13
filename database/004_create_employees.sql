create table employees (
    id uuid primary key default gen_random_uuid(),

    employee_code varchar(30) unique not null,

    full_name varchar(150) not null,

    phone varchar(20) unique not null,

    email varchar(150) unique,

    nid_number varchar(30) unique,

    date_of_birth date,

    gender varchar(20)
    check (
        gender in (
            'MALE',
            'FEMALE',
            'OTHER'
        )
    ),

    blood_group varchar(5)
    check (
        blood_group in (
            'A+','A-',
            'B+','B-',
            'AB+','AB-',
            'O+','O-'
        )
    ),

    father_name varchar(150),

    mother_name varchar(150),

    education text,

    permanent_address text,

    present_address text,

    emergency_contact_name varchar(150),

    emergency_contact_relation varchar(50),

    emergency_contact_phone varchar(20),

    department_id uuid not null references departments(id),

    role_id uuid references roles(id),

    joining_date date not null,

    confirmation_date date,

    resignation_date date,

    termination_date date,

    salary_type varchar(20)
    not null
    default 'MONTHLY'
    check (
        salary_type in (
            'MONTHLY',
            'DAILY',
            'HOURLY'
        )
    ),

    basic_salary numeric(12,2) not null default 0,

    hourly_rate numeric(12,2),

    daily_rate numeric(12,2),

    employment_type varchar(20)
    not null
    default 'FULL_TIME'
    check (
        employment_type in (
            'FULL_TIME',
            'PART_TIME',
            'CONTRACT',
            'TEMPORARY'
        )
    ),

    status varchar(20)
    not null
    default 'ACTIVE'
    check (
        status in (
            'ACTIVE',
            'INACTIVE',
            'ON_LEAVE',
            'SUSPENDED',
            'TERMINATED'
        )
    ),

    login_enabled boolean not null default true,

    pin_hash text not null,

    profile_photo_url text,

    remarks text,

    last_login_at timestamptz,

    last_activity_at timestamptz,

    created_at timestamptz not null default now(),

    updated_at timestamptz not null default now()
);

create index idx_employees_department
on employees(department_id);

create index idx_employees_role
on employees(role_id);

create index idx_employees_status
on employees(status);

create index idx_employees_joining_date
on employees(joining_date);

create index idx_employees_emergency_phone
on employees(emergency_contact_phone);