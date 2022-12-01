import React, { useEffect, useState } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { ResponseStatus } from '../../resources/enums'
import { Container, Header, MovieCard, SearchBar, Text } from '../../components';
import { fetchMovies } from '../../services/Movie';
import styles from './Home.style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Home = () => {
  const { bottom } = useSafeAreaInsets();
  const [searchText, setSearchText] = useState("ask");
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshLoading, setRefreshLoading] = useState(false);
  const [footerLoader, setFooterLoader] = useState(false);
  const [lastSearchedMovie, setLastSearchedMovie] = useState(null);

  useEffect(() => {
    getMovies();
  }, [page]);

  const getMovies = async (refreshState) => {
    const res = await fetchMovies({ search: searchText, page });
    setLastSearchedMovie(searchText);
    if (res.status === 200) {
      if (res.data.Response === ResponseStatus.success) {

        if (refreshState) {
          console.log(res.data.Search);
          setMovies(res.data.Search)
        } else {
          console.log([...res.data.Search, ...movies]);
          setMovies([...movies, ...res.data.Search]);
        }
      }
    }
    setFooterLoader(false);
    setLoading(false);
  }

  const onRefresh = async () => {
    setRefreshLoading(true);
    await getMovies(true);
    setRefreshLoading(false);
  }

  const onEndReached = () => {
    if (page >= 100) return;
    setFooterLoader(true);
    setPage(page + 1);
  }

  const onPressSearch = async () => {
    if (lastSearchedMovie === searchText) return;
    if (!searchText || searchText.trim() === '') return;
    await getMovies(true);
  }

  const renderItem = ({ item }) => {
    return <MovieCard movie={item} />
  }

  const renderListEmptyComponent = () => {
    return (
      <View>
        <Text>{'No movies found.\nYou must search first.'}</Text>
      </View>
    )
  }

  const renderItemSeparator = () => {
    return <View style={styles.itemSeparator} />
  }

  const renderListFooterComponent = () => {
    return (
      <View style={{ paddingVertical: Math.max(12, bottom) }}>
        {
          footerLoader ?
            <ActivityIndicator size={'small'} color='black' />
            : null
        }
      </View>
    )
  }

  return (
    <Container>
      <Header
        header={'Discover'}
      />
      <FlatList
        data={movies}
        renderItem={renderItem}
        ListEmptyComponent={renderListEmptyComponent}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={renderItemSeparator}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        onEndReached={onEndReached}
        onRefresh={onRefresh}
        refreshing={refreshLoading}
        ListHeaderComponent={
          SearchBar({
            inputPlaceHolder: 'Search Movie, Serie...',
            onChangeText: setSearchText,
            onPress: onPressSearch,
            value: searchText,
          })
        }
        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll={true}
        ListFooterComponent={renderListFooterComponent}
        style={{ flex: 1 }}
      />

    </Container>
  )
}

export default Home;