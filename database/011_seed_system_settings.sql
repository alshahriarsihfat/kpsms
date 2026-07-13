insert into system_settings
(setting_key, setting_value, data_type, category, description)
values

('late_grace_minutes','10','integer','Attendance','Late grace period'),

('meal_break_minutes','30','integer','Attendance','Meal break duration'),

('short_break_minutes','10','integer','Attendance','Short break duration'),

('prayer_break_minutes','20','integer','Attendance','Prayer break duration'),

('early_checkout_grace_minutes','5','integer','Attendance','Early checkout grace'),

('max_short_break_per_day','2','integer','Attendance','Maximum short breaks'),

('overtime_after_minutes','0','integer','Payroll','Overtime starts after shift end'),

('currency','BDT','string','Payroll','System currency');