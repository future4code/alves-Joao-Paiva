Exercício 1
a)
Deleta a coluna salary da tabela Actor.

b)
Modifica o nome da coluna gender.

c)
Modifica o tipo dos valores recebidos na coluna gender varchar(255), mantendo o nome da coluna.

d)
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

Exercício 2

a)
UPDATE Actor
SET birth_date = "1930-10-25"
WHERE id = "15";

b)
UPDATE Actor
SET name = UPPER(name)
WHERE name = "Juliana Paes";
UPDATE Actor
SET name = LOWER(name)
WHERE name = UPPER("Juliana Paes");
UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "16"


c)
UPDATE Actor
SET name = UPPER(name), salary = 1500000, birth_date = "1978-03-26", gender = "male"
WHERE id = "005";

Exercício 3
a)
DELETE FROM Actor WHERE name = 'Juliana Paes';
Dando Erro.

b)
DELETE FROM Actor WHERE gender = 'male' AND salary > 1000000;
dando erro


Exercício 4

a)
SELECT MAX(salary) FROM Actor;
b)
SELECT MIN(salary) FROM Actor WHERE gender = "female";
c)
SELECT COUNT(*) FROM Actor WHERE gender = "female";

Não estou conseguindo adicionar a coluna salario

Exercicio 5

b)
SELECT id
FROM Actor
ORDER BY name DESC;

c)
SELECT *
FROM Actor
ORDER BY salary DESC;

d)
SELECT *
FROM Actor
ORDER BY salary DESC LIMIT 3;

e)
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;