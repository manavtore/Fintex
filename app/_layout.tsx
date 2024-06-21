import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, Link, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, router, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
export {
  ErrorBoundary,
} from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function InitialLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });
  const router = useRouter();

  useEffect(() => {
    if (error) throw error;
  }, [error]);


  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  
  return (
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="signup"
          options={{
            title: '',
            headerBackTitle:'',
            headerShadowVisible:false,
            headerStyle: { backgroundColor: Colors.background },
            headerLeft: () => (
              <TouchableOpacity onPress={router.back}>
                <Ionicons name="arrow-back" size={32}/>
              </TouchableOpacity>
            ),
          }}
        />
         <Stack.Screen name="login"
          options={{
            title: '',
            headerBackTitle:'',
            headerShadowVisible:false,
            headerStyle: { backgroundColor: Colors.background },
            headerLeft: () => (
              <TouchableOpacity onPress={router.back}>
                <Ionicons name="arrow-back" size={32} color={Colors.dark}/>
              </TouchableOpacity>
            ),
            headerRight: () => (
            
                   <TouchableOpacity>
                   <Ionicons name="help-circle-outline" size={34} />
              </TouchableOpacity>
             
            ),
          }}
        />
      </Stack>
       </GestureHandlerRootView>
  );;
}


function RootLayoutNav() {
  return (
    <GestureHandlerRootView>
    <StatusBar style="light"/>
     <InitialLayout />
    </GestureHandlerRootView>
     
  );
}
