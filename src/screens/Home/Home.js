import React, { useEffect, useState } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { ResponseStatus } from '../../resources/enums'
import { Container, Header, MovieCard, SearchBar, Text } from '../../components';
import { fetchMovies } from '../../services/Movie';
import styles from './Home.style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Home = ({navigation}) => {
  const { bottom } = useSafeAreaInsets();
  const [searchText, setSearchText] = useState("");
  const [pageNo, setPageNo] = useState(1);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshLoading, setRefreshLoading] = useState(false);
  const [footerLoader, setFooterLoader] = useState(false);
  const [lastSearchedMovie, setLastSearchedMovie] = useState(null);
  const [searchMovie, setSearchMovie] = useState("");
  const [reachEnd, setReachEnd] = useState(false);

  useEffect(() => {
      getMovies({});
  }, []);

  const getMovies = async ({refreshState = false, search = searchMovie , page = pageNo}) => {
    setReachEnd(false);
    const res = await fetchMovies({ search, page });
    setLastSearchedMovie(search);
    if (res.status === 200) {
      if (res.data.Response === ResponseStatus.success) {
        if (refreshState) {
          setMovies(res.data.Search)
        } else {
          setMovies([...movies, ...res.data.Search]);
        }
      }else if(page > 1){
        setReachEnd(true);
      }else{
        setMovies([]);
      }
    }else{
      setMovies([]);
    }
    setFooterLoader(false);
    setLoading(false);
  }

  const onRefresh = async () => {
    setRefreshLoading(true);
    await getMovies({refreshState: true });
    setRefreshLoading(false);
  }

  const onEndReached = () => {
    if (pageNo >= 100 || reachEnd) return;
    setFooterLoader(true);
    setPageNo(pageNo + 1);
    getMovies({page: pageNo+1});
  }

  const onPressSearch = () => {
    if (lastSearchedMovie === searchText) return;
    setSearchMovie(searchText);
    setPageNo(1);
    getMovies({refreshState:true, search:searchText, page:1});
  }

  const onPressMovie = (movieId) => {
    navigation.navigate('MovieDetail', {movieId})
  }

  const renderItem = ({ item }) => {
    return <MovieCard movie={item} onPressMovie={onPressMovie} />
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
      <View style={[styles.footerContainer, { paddingVertical: Math.max(12, bottom) }]}>
        {
          footerLoader && movies.length > 10 ?
            <ActivityIndicator size={'small'} color='black' />
            : null
        }
        {
          movies.length && !footerLoader ?
          <Text>You have viewed all results.</Text>
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
        style={styles.list}
      />

    </Container>
  )
}

export default Home;