export type Book = {
  id: string;
  title: string;
  author: string;
  genre: string;
  synopsis: string;
  price: number;
  stock: number;
  color: string;
};

// Dados de demonstração: preços e estoque não representam uma livraria real.
export const books: Book[] = [
  { id: '1', title: 'Dom Casmurro', author: 'Machado de Assis', genre: 'Literatura brasileira', synopsis: 'Bentinho revisita sua juventude, sua relação com Capitu e as dúvidas que marcaram sua vida.', price: 29.9, stock: 8, color: '#71513f' },
  { id: '2', title: 'O Hobbit', author: 'J. R. R. Tolkien', genre: 'Fantasia', synopsis: 'Bilbo Bolseiro parte em uma jornada inesperada com um grupo de anões em busca de um tesouro.', price: 59.9, stock: 4, color: '#486451' },
  { id: '3', title: '1984', author: 'George Orwell', genre: 'Ficção científica', synopsis: 'Winston Smith vive sob vigilância constante em uma sociedade controlada por um regime totalitário.', price: 39.9, stock: 0, color: '#7e3940' },
  { id: '4', title: 'Orgulho e Preconceito', author: 'Jane Austen', genre: 'Romance', synopsis: 'Elizabeth Bennet enfrenta expectativas sociais e revê suas primeiras impressões sobre o senhor Darcy.', price: 34.9, stock: 6, color: '#755c83' },
  { id: '5', title: 'Duna', author: 'Frank Herbert', genre: 'Ficção científica', synopsis: 'No planeta desértico Arrakis, Paul Atreides se vê envolvido em disputas por poder e recursos.', price: 79.9, stock: 3, color: '#956c35' },
  { id: '6', title: 'O Cortiço', author: 'Aluísio Azevedo', genre: 'Literatura brasileira', synopsis: 'As vidas dos moradores de um cortiço se entrelaçam em um retrato das tensões sociais do século XIX.', price: 24.9, stock: 0, color: '#506578' },
];
