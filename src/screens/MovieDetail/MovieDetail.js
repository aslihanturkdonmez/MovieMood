import { View, Dimensions, Pressable, ScrollView, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Container, Header, InfoBox, LoaderModal, ProgressiveImage, Text } from '../../components';
import { fetchMovieDetail } from '../../services/Movie';
import styles from './MovieDetail.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import { useDispatch, useSelector } from 'react-redux';
import { storage } from '../../utils';
import { addMovie, setMovieList } from '../../store/actions/MovieListAction';
import { ResponseValueStatus } from '../../resources/enums';

const MovieDetail = ({ route, navigation }) => {
    const { width, height } = Dimensions.get('window');
    const { bottom } = useSafeAreaInsets();
    const dispatch = useDispatch();

    const id = route.params.movieId;
    const name = route.params.movieName;

    const [movieDetail, setMovieDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showMore, setShowMore] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const movieList = useSelector((state) => state.MovieListReducer.MovieList);
    const [localMovieList, setLocalMovieList] = useState(movieList);
    const [error, setError] = useState(false);

    useEffect(() => {
        getMovie();
    }, []);

    useEffect(() => {
        setLocalMovieList(movieList);
    }, [movieList])
    

    const getMovie = async () => {
        try {
            const movie = findMovie(movieList);
            if (movie) {
                setMovieDetail(movie);
            } else {
                const localList = await storage.getMovieList();
                const localMovie = findMovie(localList);
                if(localList && !localMovieList.length) {
                    dispatch(setMovieList(localList));
                }
                if (localMovie) {
                    setMovieDetail(localMovie);
                } else {
                    await getMovieDetail();
                }
            }
        } catch (error) {
            setError(true);
        } finally{
            setLoading(false);
        }


    };

    const addMovieToLists = (movie) => {
        storage.setMovieList([...localMovieList, movie]);
        dispatch(addMovie(movie));
        return;
    }

    const findMovie = (movieList) => {
        if(!movieList || !movieList.length) return null;
        const movie = movieList.find((movie) => movie.imdbID === id);
        return movie;
    }

    const getMovieDetail = async () => {
        const res = await fetchMovieDetail({ id });
        if (res.status === 200) {
            addMovieToLists(res.data);
            setMovieDetail(res.data);
        }else{
            setError(true);
        }
    };

    const onPressBack = () => {
        navigation.goBack();
    };

    const toggleImgModalVisibility = () => {
        setShowImage(!showImage);
    };

    const onPressImage = () => {
        if (!showMore) {
            setShowImage(true);
        } else {
            setShowMore(!showMore);
        }
    };

    const onMomentumScrollBegin = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        if (offsetY > 0) setShowMore(true);
    };

    const onPressCollapse = () => {
        setShowMore(false);
    };

    const InfoIconTextBox = () => {
        const infoTextValues = [
            {
                icon: 'movie-open',
                text: movieDetail.Director
            },
            {
                icon: 'grease-pencil',
                text: movieDetail.Writer,
            },
            {
                icon: 'human-male-male',
                text: movieDetail.Actors,
            },
            {
                icon: 'trophy-award',
                text: movieDetail.Awards,
            },
            {
                icon: 'calendar',
                text: movieDetail.Released
            }];
        return (
            <View style={styles.infoIconContainer}>
                {
                    infoTextValues.map(({ text, icon }, index) => {
                        return (
                            text != ResponseValueStatus.none ?
                                <View style={styles.infoIconInnerContainer} key={index.toString()}>
                                    <Icon
                                        name={icon}
                                        style={styles.infoIcon}
                                    />
                                    <Text style={styles.infoText} >{text}</Text>
                                </View>
                                : null
                        )
                    })
                }
            </View>
        )
    };

    const renderImageModal = () => {
        return (
            <Modal visible={showImage} transparent={true}>
                <Pressable style={styles.imgModalBack} onPress={toggleImgModalVisibility}>
                    <FastImage
                        source={{ uri: movieDetail.Poster }}
                        style={{ width, height }}
                        resizeMode='contain'
                    />
                </Pressable>
            </Modal>
        )
    };

    const InfoBoxes = () => {
        const infoBoxValues = [movieDetail.Year, movieDetail.Country, movieDetail.Runtime, movieDetail.imdbVotes];
        return (
            infoBoxValues.map((value, index) => {
                return (
                    value !== ResponseValueStatus.none ? 
                    <InfoBox
                        key={index.toString()}
                        text={value}
                    />
                    : null
                )
            })
        )
    }

    return (
        <Container>
            <Header
                header={name}
                onPressBack={onPressBack}
            />
            {
                error ? 
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>{'There is a problem.\nPlease try again.'}</Text>
                </View>
                :
                loading ?
                    <LoaderModal visible={loading} />
                    :
                    <>
                        <Pressable onPress={onPressImage} style={styles.imgContainer}>
                            <ProgressiveImage
                                source={{ uri: movieDetail.Poster }}
                                style={styles.img({ width, height })}
                                iconStyle={styles.imgIcon}
                            />
                        </Pressable>

                        <View style={[styles.detailContainer, { flex: showMore ? 2.2 : 1.1 }]}>
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                                onMomentumScrollBegin={onMomentumScrollBegin}
                                scrollEventThrottle={0}
                                contentContainerStyle={[styles.scrollView, { paddingBottom: Math.max(bottom + 5, 10) }]}
                            >
                                <View>
                                    <View>
                                        <Text style={styles.type}>{movieDetail.Type.toUpperCase()}</Text>
                                        <Text style={styles.title}>{movieDetail.Title}</Text>
                                        <Text style={styles.genre}>{movieDetail.Genre}</Text>

                                        <InfoIconTextBox />
                                    </View>
                                    <View style={styles.descContainer}>
                                        {
                                            movieDetail.Plot !== ResponseValueStatus.none ?
                                            <Text style={styles.desc}>{movieDetail.Plot}</Text>
                                            : null
                                        }
                                    </View>
                                    <View style={styles.infoBoxContainer}>
                                        <InfoBoxes />
                                    </View>
                                </View>
                                {
                                    showMore &&
                                    <View style={styles.collapseContainer}>
                                        <Pressable onPress={onPressCollapse} style={styles.collapseInnerContainer}>
                                            <Text>Collapse...</Text>
                                        </Pressable>
                                    </View>
                                }
                            </ScrollView>
                        </View>
                        {renderImageModal()}
                    </>
                }
        </Container>
    )
}

export default MovieDetail;