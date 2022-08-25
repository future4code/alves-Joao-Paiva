Exercício 1
a)
Chave estrangeira é para referenciar a ligação de uma tabela com a outra

c)
Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (gebru-4211891-julio-martins.Rating, CONSTRAINT Rating_ibfk_1 FOREIGN KEY (movie_id) REFERENCES Movie (id)) 0.156 sec

Ou seja, como movie_id possui a restrição de FOREIGN KEY, é necessário que o valor passado para essa coluna exista entre os id's na tabela de Movies. Caso contrário, não será possível inserir uma nova linha à tabela de Rating.

e)
como esse id da tabela Movie está relacionado com uma FOREIGN KEY da tabela Rating, a linha não pode ser deletada. Seria, primeiro, necessário deletar todas as linhas da tabela Rating onde movie_id fossem igual ao id do filme que deja deletar na tabela Movies.

DELETE FROM Movie WHERE id = "019";

Exercício 2
a)
Essa tabela é composta por duas FOREIGN KEYS que relacionam-se com as id's de filmes e de atores, podendo assim estruturar uma tabela que relaciona um ator ao elenco de um filme.
b)
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"004"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"005"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"004",
"006"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"003",
"004"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"003",
"002"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
"003",
"006"
);

foi tentado inserir na tabela MovieCast um valor para movie_id que não está presente entre os id's na tabela Movies. E como movie_id é uma referencia dos id's em Movie, não foi possível inserir a nova linha na tabela MovieCast.

INSERT INTO MovieCast (movie_id, actor_id)
VALUES ("003", "006");

Exercício 3
a)
ON é uma espécie de condicional para indicar quais itens devem ser apresentados. Nesse caso, são apresentados apenas os filmes que foram avaliados (Movie.id = Rating.movie_id).