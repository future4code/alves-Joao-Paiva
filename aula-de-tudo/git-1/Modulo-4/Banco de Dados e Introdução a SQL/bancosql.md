CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
 Exercício 1
a)
Tipos na tabela Actor: FLOAT - declara que a coluna salário é de números com ponto flutuante; VARCHAR(255) - declara que as colunas de id e name são de strings com no máximo 255 caractéres; VARCHAR(6) - declara que a coluna de gender é de strings com no máximo 6 caracteres; DATE - sinônimo de DATETIME, declara que a coluna de birth_date é de datas;

b)
SHOW TABLES mostra as tabelas presentes em um database, e SHOW DATABASES mostra as bases de dados presentes no banco de dados.

c)
DESCRIBE Actor mostra as colunas presentes na tabela Actor e seus respectivos tipos de dados aceitos e restrições, esquematizados em uma tabela.

EXERCICIO 02

A)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUE (12,"Emma Watson", 100000, "1990-04-15", "female");
b)
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY' 0.157 sec

Como id é uma primary key, não é permitido mais de um item com o mesmo id.

c)


