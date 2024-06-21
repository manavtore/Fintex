import { View, Text ,StyleSheet, Touchable, TouchableOpacity, Platform } from 'react-native'
import React, { useState } from 'react'
import { defaultStyles } from '@/constants/Styles'
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

enum signinType {
  Phone,
  Email,
  Google,
}

const signin = () => {
  const [phoneNumber,setPhoneNumber] = useState('');
  const [countryCode,setCountryCode] = useState('+91');
   const keyboardVerticalOffeset = Platform.OS === 'ios' ?40:0;
  const onsignin = async (type: signinType)  => {
    if(type === signinType.Phone){
      console.log('Phone Signin')
    }
  }

  return (     
    <View>
      <Text style={defaultStyles.header}>Let's Get Started</Text>
       <View style={styles.inputContainer}>
        <TextInput
        style = {styles.input}
          placeholder='Mobile Number'
          keyboardType='numeric'  
          placeholderTextColor={Colors.grey}
          value={countryCode}
        /> 
      <TextInput
        style={[styles.input,{flex:1}]}
        placeholder='Mobile Number'
        keyboardType='numeric'
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      </View> 
   

      <TouchableOpacity
          style={[
            defaultStyles.smallButton,
            (phoneNumber !== '' && phoneNumber.length==10) ? styles.enabled : styles.disabled,
            { marginBottom: 30 },
          ]}
          onPress={() => onsignin(signinType.Phone)}
          >
          <Text style={[defaultStyles.buttonText]}>Continue</Text>
        </TouchableOpacity>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap:16 }}>
          <View
            style={{ flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.grey }}
          />
          <Text style={{ color: Colors.grey, fontSize: 20 }}>or</Text>
          <View
            style={{ flex: 1, height: StyleSheet.hairlineWidth, backgroundColor: Colors.grey }}
          />
        </View>

        <TouchableOpacity 
        onPress={() => onsignin(signinType.Email)}
        style={[defaultStyles.smallButton,{flexDirection:'row', gap:16 ,marginTop:16,backgroundColor:'#fff'}]
         
        }>
        <Ionicons name="mail" size={24} ></Ionicons>
        <Text style={[defaultStyles.buttonText,{color:'#000'}]}>Continue with mail</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => onsignin(signinType.Google)}
        style={[defaultStyles.smallButton,{flexDirection:'row', gap:16 ,marginTop:16,backgroundColor:'#fff'}]
         
        }>
        <Ionicons name="logo-google" size={24} ></Ionicons>
        <Text style={[defaultStyles.buttonText,{color:'#000'}]}>Continue with Google</Text>
        </TouchableOpacity> 
         </View>
  )
}
const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});
export default signin

