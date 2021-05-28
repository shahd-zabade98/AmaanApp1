import React, { useState } from 'react';
import { Image, SafeAreaView,Keyboard, Text, TextInput, TouchableOpacity, View ,Icon} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config';
import { FontAwesome , Entypo, MaterialIcons } from '@expo/vector-icons';

export default function UserProfileScreen({route,navigation}) {

    let Infoo = route.params;

    return(
  
        <View style={styles.container }>
        <KeyboardAwareScrollView
            style={{ flex: 1, width: '100%' }}
            keyboardShouldPersistTaps="always">
                    <View style={styles.action}>
                    <FontAwesome name="user" size={24} color="black" />
                    <Text style={styles.text}>Infoo.fullName</Text>
                  </View>
                  <View style={styles.action}>
                  <Entypo name="location-pin" size={24} color="black" />
                   
                  <Text style={styles.text}>Infoo.Address</Text>
                     </View>
                     <View style={styles.action}>
                     <Entypo name="phone" size={24} color="black" />
                     <Text style={styles.text}>Infoo.Phone</Text>
                  </View>
                  <View style={styles.action}>
                  <MaterialIcons name="family-restroom" size={24} color="black" />
                  <Text style={styles.text}>Infoo.NumOfFamily</Text>
                   </View>
                   
    
                 </KeyboardAwareScrollView>
            </View> 
        )
    















}