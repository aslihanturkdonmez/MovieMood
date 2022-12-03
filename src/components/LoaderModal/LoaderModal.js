import { View, Modal } from 'react-native';
import React from 'react';
import LottieLoader from '../LottieLoader';
import styles from './LoaderModal.style';

const LoaderModal = ({ visible, transparent = true, container }) => {
    return (
        <Modal visible={visible} transparent={transparent}>
            <View style={[styles.container, container]}>
                <LottieLoader />
            </View>
        </Modal>
    )
}

export default LoaderModal;