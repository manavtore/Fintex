import { View, Text ,StyleSheet, Touchable, TouchableOpacity, Platform } from 'react-native'
import React, { useState } from 'react'
import { defaultStyles } from '@/constants/Styles'
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler'
import Colors from '@/constants/Colors'
import { Link } from 'expo-router'

const signup = () => {
  const [phoneNumber,setPhoneNumber] = useState('');
  const [countryCode,setCountryCode] = useState('+91');
   const keyboardVerticalOffeset = Platform.OS === 'ios' ?40:0;
const onSignup = async ()  => {
    console.log('signup')
  }
  return (
    <GestureHandlerRootView>
      
     
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
      <Link href={'/login'} replace asChild>
          <TouchableOpacity>
            <Text style={defaultStyles.textLink}>Already have an account? Log in</Text>
          </TouchableOpacity>
        </Link>
    </View>

     <View style={{ flex: 1 }} />

      <TouchableOpacity
          style={[
            defaultStyles.smallButton,
            (phoneNumber !== '' && phoneNumber.length==10) ? styles.enabled : styles.disabled,
            { marginBottom: 30 },
          ]}
          onPress={onSignup}>
          <Text style={[defaultStyles.buttonText]}>Sign up</Text>
        </TouchableOpacity>
     </GestureHandlerRootView>
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
export default signup

