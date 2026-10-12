# Floreios e Borrões Mobile — requisitos e planejamento

Projeto acadêmico de catálogo de livraria para dispositivos móveis, adaptado da proposta web. Equipe informada no planejamento anterior: Anderson Rodrigues, Brunno Colombo e João Vitor Santos; confirmar os integrantes antes da entrega.

## Construindo a solução

O aplicativo permitirá consultar o catálogo da livraria pelo celular, pesquisar livros e verificar sua disponibilidade. O cliente poderá visualizar os detalhes dos títulos e guardar seus favoritos. Funcionários terão uma área para administrar livros e estoque.

Na versão completa, serão armazenados usuários, livros, categorias, preços, estoque e favoritos por usuário. O banco e o serviço de autenticação ainda devem ser escolhidos pelo grupo. Nesta base, o catálogo é demonstrativo e os favoritos duram apenas a sessão.

Autenticação planejada: cadastro com e-mail e senha, usando um serviço de autenticação ou backend; não armazenar senhas no aplicativo.

| Requisito | Recurso | Estado nesta base |
|---|---|---|
| RF01 | Cadastro de usuário | Planejado |
| RF02 | Login | Planejado |
| RF03 | Catálogo | Implementado com dados de exemplo |
| RF04 | Busca por título e autor | Implementado; também pesquisa gênero |
| RF05 | Detalhes com título, autor, gênero, sinopse e preço | Implementado; capas gráficas provisórias |
| RF06 | Consulta de disponibilidade | Implementado com estoque de exemplo |
| RF07 | Filtros por categoria | Implementado |
| RF08 | Favoritos | Implementado em memória, sem conta |
| RF09 | Cadastro, edição e exclusão de livros por administrador | Planejado |
| RF10 | Atualização de estoque por administrador | Planejado |

## Sprints sugeridas — uma semana cada

1. Validar requisitos da disciplina, equipe e arquitetura; revisar esta base.
2. Escolher o backend; implementar cadastro, login e sessão.
3. Integrar catálogo, detalhes e imagens ao banco de dados.
4. Integrar busca, filtros e tratamento de falhas da API.
5. Persistir favoritos por usuário e integrar disponibilidade.
6. Implementar administração com autorização no backend; testar e preparar a entrega.

## Evoluções opcionais

Lista de leitura, scanner de ISBN e notificações de reposição ficam para depois do MVP e dependem de tempo e requisitos da disciplina. Não estão incluídos nesta base.
