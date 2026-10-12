import type { Book } from '../data/books';

export function normalize(value: string): string {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
}

export function filterBooks(books: Book[], query: string, genre: string, onlyAvailable: boolean): Book[] {
  const term = normalize(query);
  return books.filter(book =>
    (!term || normalize(`${book.title} ${book.author} ${book.genre}`).includes(term)) &&
    (genre === 'Todos' || book.genre === genre) &&
    (!onlyAvailable || book.stock > 0)
  );
}

export const formatPrice = (value: number): string =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
