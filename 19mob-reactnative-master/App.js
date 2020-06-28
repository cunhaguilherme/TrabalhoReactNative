import 'react-native-gesture-handler';
import * as React from 'react';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './screens/Home';
import SeasonScreen from './screens/Season';
import OptionScreen from './screens/Option';

import Header from './components/Header/index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={ HomeScreen } options={ { headerTitle: <Header /> } } />
          <Stack.Screen name="Season" component={ SeasonScreen } options={ { headerTitle: <Header />  } }/>
          <Stack.Screen name="Option" component={ OptionScreen } options={ { headerTitle: <Header /> } }/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}