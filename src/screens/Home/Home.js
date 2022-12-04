import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, View, ActivityIndicator, Pressable, RefreshControl } from 'react-native';
import { ResponseStatus } from '../../resources/enums'
import { Container, Header, HorizontalList, LoaderModal, MovieCard, ProgressiveImage, SearchBar, Text } from '../../components';
import { fetchMovies } from '../../services/Movie';
import styles from './Home.style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';
import { storage } from '../../utils';
import { setMovieList } from '../../store/actions/MovieListAction';

const Home = ({navigation}) => {
  const { bottom } = useSafeAreaInsets();
  const movieList = useSelector((state) => state.MovieListReducer.MovieList);

  const [searchText, setSearchText] = useState("");
  const [pageNo, setPageNo] = useState(1);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshLoading, setRefreshLoading] = useState(false);
  const [footerLoader, setFooterLoader] = useState(false);
  const [lastSearchedMovie, setLastSearchedMovie] = useState(null);
  const [searchMovie, setSearchMovie] = useState("");
  const [reachEnd, setReachEnd] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  
  const [recentlyViewedMovies, setRecentlyViewedMovies] = useState(movieList);
  const [hideRecentlyViewedList, setHideRecentlyViewedList] = useState(false);
  const [error, setError] = useState(false);

  const dispatch =  useDispatch();

  useEffect(() => {
      getMovies({});
  }, []);

  useFocusEffect(
    useCallback(() => {
      getMovieList();
    }, [movieList])
  );

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
      }else if(page > 1 && search !=""){
        setReachEnd(true);
      }else{
          setMovies([]);
      }
    }else{
     onError();
    }
    setFooterLoader(false);
    setLoading(false);
  };

  const onError = () => {
    setLastSearchedMovie(null);
    setError(true);
    setReachEnd(true);
  }

  const getMovieList = async() => {
    if(!movieList.length){
      const list = await storage.getMovieList();
      if(!list) return;
      dispatch(setMovieList(list));
      setRecentlyViewedMovies(list);
    }else{
      setRecentlyViewedMovies(movieList);
    }
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

  const onPressSearch = async () => {
    if (lastSearchedMovie === searchText) return;
    setSearchLoading(true);
    setSearchMovie(searchText);
    setPageNo(1);
    await getMovies({refreshState:true, search:searchText, page:1});
    setSearchLoading(false);
  }

  const onPressMovie = (movieId, movieName) => {
    navigation.navigate('MovieDetail', {movieId, movieName})
  }

  const renderItem = ({ item }) => {
    return <MovieCard movie={item} onPressMovie={onPressMovie} />
  }

  const renderListEmptyComponent = () => {
    return (
      <View style={styles.emptyContainer}>
        <View style={styles.emptyInnerContainer}>
          {
            error ?
              <Text style={styles.emptyListTextBold}>{'There is a problem.\nPlease try again.'}</Text>
              :
              <>
                <Text style={styles.emptyListText}>Couldn't find anything to list.</Text>
                {
                  searchMovie == "" ?
                    <Text style={styles.emptyListTextBold}>You should search first.</Text>
                    :
                    <Text style={styles.emptyListTextBold}>Search something else.</Text>
                }
              </>
          }

        </View>
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
            <ActivityIndicator size={'small'} color='white' />
            : null
        }
      </View>
    )
  };

  const renderRecentlyViewedMovieItem = ({item}) => {
    return (
      <Pressable onPress={() => onPressMovie(item.imdbID, item.Title)}>
        <ProgressiveImage source={{uri: item.Poster}} style={{width:90, height:135, borderRadius:8}} />
      </Pressable>
    )
  }

  const toggleRecentlyViewedVisibility = () => {
    setHideRecentlyViewedList(!hideRecentlyViewedList);
  }

  const ListHeaderComponent = () => {
    return (
      <View>
          <SearchBar
            inputPlaceHolder={'Search Movies, Series...'}
            onChangeText={setSearchText}
            onPress={onPressSearch}
            value={searchText}
          />
        {
          recentlyViewedMovies.length && !hideRecentlyViewedList ?
            <HorizontalList 
              list={recentlyViewedMovies}
              header={'Recently viewed'}
              renderItem={renderRecentlyViewedMovieItem}
              onPressClose={toggleRecentlyViewedVisibility}
            />
            : null
        }
      </View>
    )
  }

  const keyExtractor = (item) => item.imdbID;

  const renderLoader = () => {
    return (
      <LoaderModal visible={searchLoading || loading} />
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
        keyExtractor={keyExtractor}
        ListEmptyComponent={renderListEmptyComponent}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={renderItemSeparator}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        onEndReached={onEndReached}
        ListHeaderComponent={ListHeaderComponent()} 
        ListFooterComponent={renderListFooterComponent}
        style={styles.list}
        onEndReachedThreshold={0.6}
        refreshControl={
          <RefreshControl 
            onRefresh={onRefresh}
            refreshing={refreshLoading}
            tintColor={'#fff'}
            colors={['#000']}
          />
        }
      />
      {renderLoader()}
    </Container>
  )
}

export default Home;