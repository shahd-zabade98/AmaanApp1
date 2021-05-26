import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View ,Icon} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { firebase } from '../../firebase/config';
import { FontAwesome , Entypo, MaterialIcons } from '@expo/vector-icons';
export default function UserProfileScreen() {
    const [fullName, setFullName] = useState('')
    const [Address, setAddress] = useState('')
    const [Phone, setPhone] = useState('')
    const [NumOfFamily, setNumOfFamily] = useState('')

 return(
  
    <View style={styles.container }>
    <KeyboardAwareScrollView
        style={{ flex: 1, width: '100%' }}
        keyboardShouldPersistTaps="always">
                <View style={styles.action}>
                <FontAwesome name="user" size={24} color="black" />
                <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    placeholderTextColor="#666666"
                    onChangeText={(text) => setFullName(text)}
                    value={fullName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
              </View>
              <View style={styles.action}>
              <Entypo name="location-pin" size={24} color="black" />
               
                <TextInput
                    style={styles.input}
                    placeholder="Address"
                    placeholderTextColor="#666666"
                    onChangeText={(text) => setAddress(text)}
                    value={Address}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                 </View>
                 <View style={styles.action}>
                 <Entypo name="phone" size={24} color="black" />
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    placeholderTextColor="#666666"
                    onChangeText={(text) => setPhone(text)}
                    value={Phone}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    keyboardType='number-pad'
                />
              </View>
              <View style={styles.action}>
              <MaterialIcons name="family-restroom" size={24} color="black" />
                <TextInput
                    style={styles.input}
                    placeholder="Number of family members"
                    placeholderTextColor="#666666"
                    onChangeText={(text) => setNumOfFamily(text)}
                    value={NumOfFamily}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    keyboardType='number-pad'
                />
               </View>
               <TouchableOpacity
                    style={styles.button}
                    onPress={() => {}}>
                    <Text style={styles.buttonTitle}>Submit</Text>
                </TouchableOpacity>

             </KeyboardAwareScrollView>
        </View> 
    )


}