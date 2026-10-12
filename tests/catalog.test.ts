import assert from 'node:assert/strict';
import { books } from '../src/data/books';
import { filterBooks, normalize } from '../src/utils/catalog';

assert.equal(normalize('  Ficção  '), 'ficcao');
assert.deepEqual(filterBooks(books, 'machado', 'Todos', false).map(b => b.id), ['1']);
assert.equal(filterBooks(books, 'ficcao', 'Todos', false).length, 2);
assert.deepEqual(filterBooks(books, '', 'Ficção científica', true).map(b => b.id), ['5']);
assert.equal(filterBooks(books, 'livro inexistente', 'Todos', false).length, 0);
assert.equal(filterBooks(books, '   ', 'Todos', false).length, books.length);
assert.equal(filterBooks(books, 'hobbit', 'Romance', false).length, 0);
console.log('Busca e filtros: 7 verificações passaram.');
