import React from 'react';
import {SafeAreaView} from 'react-native';

import MainScreen from './src/screens/mainScreen';
import HomeScreen from './src/screens/homeScreen';
import LoginScreen from './src/screens/login';
import StatementScreen from './src/screens/statement';
import CaptureScreen from './src/screens/capture';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';



const App=()=> {
  const Stack = createNativeStackNavigator();  
  return (
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 50,
          },
        }}>
        
        {/* <Stack.Screen name='Capture' component={CaptureScreen} /> */}
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name='StatementScreen' component={StatementScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
{/* <SafeAreaView>
       <MainScreen/>
    </SafeAreaView>  */}