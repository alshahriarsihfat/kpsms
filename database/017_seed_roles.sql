insert into roles (
    code,
    name,
    description,
    is_system,
    display_order
)
values

(
    'ADMIN',
    'Administrator',
    'Full system access',
    true,
    1
),

(
    'SUPERVISOR',
    'Supervisor',
    'Staff management and operational control',
    true,
    2
),

(
    'STAFF',
    'Staff',
    'Standard employee access',
    true,
    3
);