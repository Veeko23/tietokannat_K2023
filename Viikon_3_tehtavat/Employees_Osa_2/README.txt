
a) SELECT * FROM Employees ORDER BY last_name LIMIT 10;

b) SELECT * FROM Employees ORDER BY last_name AND first_name LIMIT 10;

c) SELECT * FROM Employees ORDER BY hire_date DESC LIMIT 5;

d) SELECT * FROM employees JOIN salaries ON employees.emp_no=salaries.emp_no ORDER BY salary DESC limit 1;

e) SELECT * FROM employees JOIN salaries ON employees.emp_no=salaries.emp_no ORDER BY salary limit 1;

f) SELECT * FROM employees JOIN salaries ON employees.emp_no=salaries.emp_no WHERE salary>150000;

g) SELECT dept_name, count(*) FROM employees
   JOIN dept_emp ON employees.emp_no=dept_emp.emp_no 
   JOIN departments ON dept_emp.dept_no=departments.dept_no GROUP BY dept_name;

h) SELECT first_name, last_name, dept_name FROM employees
   JOIN dept_manager ON employees.emp_no=dept_manager.emp_no
   JOIN departments ON dept_manager.dept_no=departments.dept_no;

i)  SELECT dept_name, avg(salary) FROM current_dept_emp 
    JOIN salaries ON current_dept_emp.emp_no=salaries.emp_no
     JOIN departments ON current_dept_emp.dept_no=departments.dept_no GROUP BY dept_name;
