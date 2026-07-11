# KPSMS Database

This folder contains all SQL migration files for the KPSMS database.

## Migration Order

1. 001_create_departments.sql
2. 002_create_roles.sql
3. 003_create_designations.sql
4. 004_create_employees.sql
5. 005_create_employee_designations.sql

## Rules

- Never modify an old migration after it has been executed.
- Every new database change must be created as a new migration file.
- Migration files must follow sequential numbering.
- All migrations must be committed to Git before production deployment.