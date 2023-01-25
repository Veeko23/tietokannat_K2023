a)  SELECT * FROM departments;

b)  SELECT DISCTINCT title FROM titles;

c)  SELECT MIN(salary) AS pieninpalkka, MAX(salary) AS suurinpalkka FROM salaries;

d)  SELECT AVG(salary) FROM salaries;

e)  SELECT * FROM employees WHERE last_name = 'facello';

f)  SELECT * FROM employees WHERE birth_date>'1949-12-31' AND birth_date<'1960-01-01';


g)  SELECT
    COUNT(CASE WHEN gender = 'M' THEN gender END) AS males,
    COUNT(CASE WHEN gender = 'F' THEN gender END) AS females,
    COUNT(*) as total
    FROM employees;

TAI

    SELECT gender, COUNT(gender) AS count
    FROM employees
    GROUP BY gender;