# Floreios e Borrões Mobile

Base do aplicativo acadêmico de catálogo de livraria, em React Native, Expo e TypeScript. A identidade usa marrom, bege e títulos serifados inspirados em livrarias clássicas.

## O que já funciona

- Catálogo demonstrativo de seis livros.
- Busca por título, autor ou gênero, ignorando acentos.
- Filtros de gênero e de disponibilidade.
- Detalhes com sinopse, preço e estoque.
- Favoritos durante a sessão do aplicativo.
- Abas de catálogo, favoritos e informações do projeto.

Esta é uma base inicial, não o aplicativo final: login, backend, persistência de favoritos e administração ainda precisam ser implementados. Preços e quantidades são fictícios; as capas são representações gráficas sem imagens dos livros.

## Executar

Instale o Node.js em uma versão LTS compatível com a versão do Expo indicada no `package.json`.

```sh
npm ci
npm start
```

Abra o QR code no Expo Go compatível com o SDK do projeto, ou use um emulador Android. Para iOS, use um iPhone; o simulador exige macOS. Caso o Expo Go disponível não suporte este SDK, siga a documentação do Expo para gerar um development build.

## Verificar

```sh
npm run typecheck
npm test
```

Confira também no dispositivo: pesquisar `machado`, pesquisar `ficcao`, combinar gênero e disponibilidade, abrir os detalhes e alternar um favorito. Reabrir o aplicativo limpa favoritos, pois a persistência ainda não foi implementada.

## Organização

```text
App.tsx                 Interface, detalhes e navegação inicial
src/data/books.ts       Modelo e catálogo de demonstração
src/utils/catalog.ts    Busca, filtros e formatação
tests/catalog.test.ts   Verificações da busca e dos filtros
docs/requisitos.md      Requisitos, estado de implementação e sprints
```

## Próximas etapas

Veja [requisitos e sprints](docs/requisitos.md). Escolha o backend antes de implementar autenticação e persistência. Não conceda permissões administrativas apenas pela interface: o backend deve validá-las.

## Repositório

Repositório privado: https://github.com/Anderson-C-Rodrigues/floreios-borroes-mobile

Para obter o código em outro computador:

```sh
git clone https://github.com/Anderson-C-Rodrigues/floreios-borroes-mobile.git
cd floreios-borroes-mobile
npm ci
npm start
```

É necessário acesso ao repositório privado. Não envie `.env`, credenciais, `node_modules` ou arquivos de build. O grupo ainda deve escolher uma licença para seu código antes de distribuir publicamente. A licença do modelo inicial do Expo está preservada em `LICENSE.expo-template`.

Referência: [documentação oficial do Expo](https://docs.expo.dev/get-started/create-a-project/).
