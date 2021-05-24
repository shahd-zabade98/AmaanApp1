import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config';

export default function HomeScreen() {
    return (
        <View>
            <Text>Home Screen</Text>
            <TouchableOpacity
                    style={styles.button}
                    onPress={() => logout()}>
                    <Text style={styles.buttonTitle}>Log out</Text>
                </TouchableOpacity>
        </View>
    )
}