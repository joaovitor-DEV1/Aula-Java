-- database: Aula-08-SQL/2_0_banco.sqlite


-- --=========================================
-- 1. Criação de uma tabeka de exemplo
-- ===========================================
-- Antes de inserir ou consultar, precisamos de uma tabela.
-- Vamos criar a tabela 'cursos' com algumas restrições.

CREATE TABLE cursos (
    id INTER SECT PRIMARY KEY,
    nome TEXT NOT NULL,
    aulas INTEGER DEFAULT 0, --numero de aulas, padrão
    ativo INTEGER DEFAULT 1 -- ativo, 0 = inativo
);


-- ============================================
-- INSERT INTO i Inserindo dados
-- ============================================
INSERT INTO cursos (id, nome, aulas, ativo)
VALUES (1,'HTML', 10, 1);

-- É possivel omitir coluna que aceitam NULL ou têm DEFAULT:
INSERT INTO cursos (id,nome) VALUES (2,'CSS');

INSERT INTO cursos (id,nome, aulas)
VALUES
    (3,'node.js',18),
    (4,'Express',18),
    (5,'MongoDB',18);