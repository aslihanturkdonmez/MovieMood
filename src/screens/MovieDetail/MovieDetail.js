import { View, Dimensions, Pressable, ScrollView, Modal } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Container, Header, InfoBox, LoaderModal, ProgressiveImage, Text } from '../../components';
import { fetchMovieDetail } from '../../services/Movie';
import styles from './MovieDetail.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';

const MovieDetail = ({ route, navigation }) => {
    const { width, height } = Dimensions.get('window');
    const { bottom } = useSafeAreaInsets();

    const id = route.params.movieId;
    const name = route.params.movieName;

    const [movieDetail, setMovieDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [readMore, setReadMore] = useState(false);
    const [showImage, setShowImage] = useState(false);


    useEffect(() => {
        getMovieDetail();
    }, []);

    const getMovieDetail = async () => {
        const res = await fetchMovieDetail({ id });
        if (res.status === 200) {
            setMovieDetail(res.data);
        }
        setLoading(false);
    };

    const onPressBack = () => {
        navigation.goBack();
    };

    const toggleImgModalVisibility = () => {
        setShowImage(!showImage);
    };

    const onPressImage = () => {
        if (!readMore) {
            setShowImage(true);
        } else {
            setReadMore(!readMore);
        }
    };

    const onMomentumScrollBegin = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        if (offsetY > 0) setReadMore(true);
    };

    const onPressCollapse = () => {
        setReadMore(false);
    };

    const InfoIconText = ({ icon, text }) => {
        return (
            <View style={styles.infoIconInnerContainer}>
                <Icon
                    name={icon}
                    style={styles.infoIcon}
                />
                <Text style={styles.infoText} >{text}</Text>
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


    return (
        <Container>
            <Header
                header={name}
                onPressBack={onPressBack}
            />
                { loading ?
                    <LoaderModal visible={loading} />
                    :
                    <>
                        <Pressable onPress={onPressImage} style={styles.imgContainer}>
                            <ProgressiveImage
                                source={{ uri: movieDetail.Poster }}
                                containerStyle={styles.img({ width, height })}
                                style={styles.img({ width, height })}
                            />
                        </Pressable>

                        <View style={[styles.detailContainer, { flex: readMore ? 2.2 : 1.1 }]}
                        >
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
                                        <View style={styles.infoIconContainer}>
                                            <InfoIconText
                                                icon='movie-open'
                                                text={movieDetail.Director}
                                            />
                                            <InfoIconText
                                                icon='grease-pencil'
                                                text={movieDetail.Writer}
                                            />
                                            <InfoIconText
                                                icon='human-male-male'
                                                text={movieDetail.Actors}
                                            />
                                            <InfoIconText
                                                icon='trophy-award'
                                                text={movieDetail.Awards}
                                            />
                                            <InfoIconText
                                                icon='calendar'
                                                text={movieDetail.Released}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.descContainer}>
                                        <Text style={styles.desc}>{movieDetail.Plot}</Text>
                                    </View>
                                    <View style={styles.infoBoxContainer}>
                                        <InfoBox
                                            text={movieDetail.Year}
                                        />
                                        {/*<InfoBox
                                text={movieDetail.Country}
                            /> */}

                                        <InfoBox
                                            text={movieDetail.imdbVotes + ' Votes'}
                                        />
                                        <InfoBox
                                            text={movieDetail.Runtime}
                                        />

                                    </View>
                                </View>
                                {
                                    readMore &&
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