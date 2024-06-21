import { View, Text ,StyleSheet , TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { ResizeMode, Video } from 'expo-av'
import { useAssets } from 'expo-asset';
import { Link } from 'expo-router';
import {  } from 'react-native-gesture-handler';
import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';


const page = () => {
    const [assets] = useAssets([require('../assets/video/splashvideo.mp4')]);

  return (
    
   <View style={styles.Container}>
      {assets && (
        <Video
          resizeMode={ResizeMode.COVER}
          isMuted
          isLooping
          shouldPlay
          source={{ uri: assets[0].uri }}
          style={styles.video}
        />
      )}
        <View style={{ marginTop: 80, padding: 20 }}>
        <Text style={styles.header}>Want to Earn More money?</Text>
      </View>
        <View>
         <View style = {styles.buttons}>
        <Link 
            href={'/login'}
            style={[defaultStyles.smallButton, { flex: 1, backgroundColor: Colors.dark }]}
            asChild
          >
            <TouchableOpacity>
                 <Text style={{ color: 'white', fontSize: 22, fontWeight: '500' }}>Log in</Text>
            </TouchableOpacity>
        </Link>
     
      </View>
      <View style = {styles.buttons}>
        <Link 
            href={'/signup'}
            style={[defaultStyles.smallButton, { flex: 1, backgroundColor: Colors.dark }]}
            asChild
          >
            <TouchableOpacity>
                 <Text style={{ color: 'white', fontSize: 22, fontWeight: '500' }}>Sign up</Text>
            </TouchableOpacity>
        </Link>
     
      </View>
        </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:'space-between'
    },
    video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    },
    header: {
    fontSize: 36,
    fontWeight: '900',
    textTransform: 'uppercase',
    color: 'white',
    },
    buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 60,
    paddingHorizontal: 20,
    },
})
export default page