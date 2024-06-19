import { View, Text, Platform } from 'react-native'
import React, { useState } from 'react'

const login = () => {
    const [countryCode,setCountryCode] = useState('+91');
    const [phoneNumber,setPhoneNumber] = useState('');
    const keyboardVerticalOffeset = Platform.OS === 'ios' ? 80 : 0;
  return (
    <View>
      <Text>login</Text>
    </View>
  )
}

export default login