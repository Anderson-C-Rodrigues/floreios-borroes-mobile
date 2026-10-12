import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { books, type Book } from './src/data/books';
import { filterBooks, formatPrice } from './src/utils/catalog';

export default function App() {
  const [tab, setTab] = useState<'Catálogo' | 'Favoritos' | 'Projeto'>('Catálogo');
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('Todos');
  const [available, setAvailable] = useState(false);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selected, setSelected] = useState<Book | null>(null);
  const genres = ['Todos', ...new Set(books.map(book => book.genre))];
  const visible = tab === 'Favoritos' ? books.filter(book => favorites.includes(book.id)) : filterBooks(books, query, genre, available);
  const toggleFavorite = (id: string) => setFavorites(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]);
  const favoriteButton = (book: Book) => (
    <Pressable accessibilityRole="button" accessibilityLabel={`${favorites.includes(book.id) ? 'Remover dos' : 'Adicionar aos'} favoritos: ${book.title}`} onPress={() => toggleFavorite(book.id)} style={styles.button}>
      <Text style={styles.buttonText}>{favorites.includes(book.id) ? '♥ Salvo nos favoritos' : '♡ Adicionar aos favoritos'}</Text>
    </Pressable>
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Text style={styles.eyebrow}>SUA PRÓXIMA HISTÓRIA COMEÇA AQUI</Text>
        <Text style={styles.title}>Floreios e Borrões</Text>
        <Text style={styles.subtitle}>Livros para descobrir, histórias para guardar.</Text>
      </View>
      {tab === 'Projeto' ? (
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.sectionTitle}>Sobre o projeto</Text>
          <Text style={styles.paragraph}>Aplicativo acadêmico de catálogo de livraria para dispositivos móveis.</Text>
          <Text style={styles.sectionTitle}>Versão inicial</Text>
          <Text style={styles.paragraph}>Explore o catálogo, consulte a disponibilidade e salve seus favoritos. Os livros, preços e estoques são exemplos. Os favoritos são mantidos apenas enquanto o aplicativo estiver aberto.</Text>
          <Text style={styles.sectionTitle}>Em desenvolvimento</Text>
          <Text style={styles.paragraph}>Cadastro, login, banco de dados, favoritos por usuário e administração de livros e estoque serão construídos nas próximas etapas.</Text>
        </ScrollView>
      ) : (
        <>
          {tab === 'Catálogo' && <View style={styles.filters}>
            <TextInput accessibilityLabel="Buscar por título, autor ou gênero" placeholder="Busque um título, autor ou gênero" placeholderTextColor="#79695e" value={query} onChangeText={setQuery} style={styles.input} />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chips}>
              {genres.map(item => <Pressable key={item} accessibilityRole="button" accessibilityState={{ selected: genre === item }} onPress={() => setGenre(item)} style={[styles.chip, genre === item && styles.activeChip]}><Text style={genre === item ? styles.activeChipText : styles.chipText}>{item}</Text></Pressable>)}
            </ScrollView>
            <View style={styles.switchRow}><Text style={styles.body}>Somente disponíveis</Text><Switch accessibilityLabel="Mostrar somente livros disponíveis" value={available} onValueChange={setAvailable} trackColor={{ true: '#79553d', false: '#c5b7a9' }} /></View>
          </View>}
          <Text style={styles.count}>{tab} · {visible.length} {visible.length === 1 ? 'livro' : 'livros'}</Text>
          <FlatList data={visible} keyExtractor={book => book.id} contentContainerStyle={styles.content} ListEmptyComponent={<Text style={styles.paragraph}>{tab === 'Favoritos' ? 'Você ainda não salvou livros. Explore o catálogo e adicione seus favoritos.' : 'Nenhum livro encontrado. Experimente outra busca ou altere os filtros.'}</Text>} renderItem={({ item }) => <View style={styles.card}>
            <Pressable accessibilityRole="button" accessibilityLabel={`Ver detalhes de ${item.title}`} onPress={() => setSelected(item)} style={styles.bookRow}>
              <View style={[styles.cover, { backgroundColor: item.color }]}><Text style={styles.coverText}>{item.title}</Text></View>
              <View style={styles.bookInfo}><Text style={styles.bookTitle}>{item.title}</Text><Text style={styles.body}>{item.author}</Text><Text style={styles.genre}>{item.genre}</Text><Text style={styles.price}>{formatPrice(item.price)}</Text><Text style={item.stock > 0 ? styles.inStock : styles.outOfStock}>{item.stock > 0 ? 'Disponível' : 'Sem estoque'}</Text><Text style={styles.detailLink}>Ver detalhes →</Text></View>
            </Pressable>
            {favoriteButton(item)}
          </View>} />
        </>
      )}
      <View style={styles.tabs}>{(['Catálogo', 'Favoritos', 'Projeto'] as const).map(item => <Pressable key={item} accessibilityRole="tab" accessibilityState={{ selected: tab === item }} onPress={() => setTab(item)} style={[styles.tab, tab === item && styles.activeTab]}><Text style={tab === item ? styles.activeTabText : styles.tabText}>{item}</Text></Pressable>)}</View>
      <Modal visible={selected !== null} animationType="slide" onRequestClose={() => setSelected(null)}>
        <SafeAreaView style={styles.container}>{selected && <ScrollView contentContainerStyle={styles.content}>
          <Pressable accessibilityRole="button" onPress={() => setSelected(null)} style={styles.button}><Text style={styles.buttonText}>← Voltar ao catálogo</Text></Pressable>
          <View style={[styles.largeCover, { backgroundColor: selected.color }]}><Text style={styles.largeCoverText}>{selected.title}</Text><Text style={styles.coverText}>{selected.author}</Text></View>
          <Text style={styles.sectionTitle}>{selected.title}</Text><Text style={styles.body}>{selected.author} · {selected.genre}</Text>
          <Text style={styles.paragraph}>{selected.synopsis}</Text><Text style={styles.price}>{formatPrice(selected.price)}</Text>
          <Text style={styles.paragraph}>{selected.stock > 0 ? `Disponível · ${selected.stock} unidades em estoque` : 'Sem estoque no momento'}</Text>{favoriteButton(selected)}
        </ScrollView>}</SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf4e9',
  },
  header: { padding: 24, paddingTop: 42, borderBottomWidth: 1, borderBottomColor: '#e3d5c3' },
  eyebrow: { color: '#79553d', fontSize: 10, letterSpacing: 1.3, marginBottom: 8 },
  title: { fontFamily: 'serif', fontSize: 30, color: '#3c291e', fontWeight: 'bold' },
  subtitle: { color: '#79695e', marginTop: 8, lineHeight: 21 },
  filters: { paddingHorizontal: 20, paddingTop: 18 },
  input: { backgroundColor: '#fffdf8', borderColor: '#cdbba6', borderWidth: 1, borderRadius: 12, padding: 14, fontSize: 16, color: '#3c291e' },
  chips: { gap: 8, paddingVertical: 14 },
  chip: { paddingHorizontal: 14, paddingVertical: 12, borderRadius: 22, backgroundColor: '#ebdfcf' },
  activeChip: { backgroundColor: '#67452f' },
  chipText: { color: '#523a2a' },
  activeChipText: { color: '#fffdf8' },
  switchRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  count: { paddingHorizontal: 22, paddingVertical: 12, fontWeight: 'bold', color: '#67452f' },
  content: { padding: 20, gap: 16, paddingBottom: 32 },
  card: { backgroundColor: '#fffdf8', borderWidth: 1, borderColor: '#e3d5c3', borderRadius: 16, padding: 16, marginBottom: 16, gap: 14 },
  bookRow: { flexDirection: 'row', gap: 16 },
  cover: { width: 94, minHeight: 140, borderRadius: 5, padding: 10, justifyContent: 'center', borderLeftWidth: 6, borderLeftColor: '#00000025' },
  coverText: { color: '#ffffff', fontFamily: 'serif', fontSize: 16, textAlign: 'center' },
  bookInfo: { flex: 1, gap: 5 },
  bookTitle: { color: '#3c291e', fontWeight: 'bold', fontSize: 19, fontFamily: 'serif' },
  body: { color: '#5e4a3c', fontSize: 14, lineHeight: 21 },
  genre: { color: '#79695e', fontSize: 12 },
  price: { color: '#3c291e', fontSize: 20, fontWeight: 'bold', marginTop: 5 },
  inStock: { color: '#285b35', fontSize: 13 },
  outOfStock: { color: '#943c33', fontSize: 13 },
  detailLink: { color: '#67452f', fontWeight: 'bold', marginTop: 4 },
  button: { borderRadius: 10, borderWidth: 1, borderColor: '#b69b7d', padding: 13, alignItems: 'center' },
  buttonText: { color: '#67452f', fontWeight: 'bold' },
  tabs: { flexDirection: 'row', backgroundColor: '#fffdf8', borderTopColor: '#e3d5c3', borderTopWidth: 1, padding: 10, gap: 5 },
  tab: { flex: 1, paddingVertical: 16, alignItems: 'center', borderRadius: 12 },
  activeTab: { backgroundColor: '#67452f' },
  tabText: { color: '#67452f' },
  activeTabText: { color: '#fffdf8', fontWeight: 'bold' },
  sectionTitle: { fontFamily: 'serif', fontWeight: 'bold', fontSize: 24, color: '#3c291e', marginTop: 10 },
  paragraph: { color: '#5e4a3c', fontSize: 16, lineHeight: 26 },
  largeCover: { alignSelf: 'center', width: 210, minHeight: 290, justifyContent: 'center', padding: 24, gap: 25, borderRadius: 8, marginVertical: 15, borderLeftWidth: 10, borderLeftColor: '#00000025' },
  largeCoverText: { fontFamily: 'serif', color: '#fff', fontSize: 30, textAlign: 'center' },
});
