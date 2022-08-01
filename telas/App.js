import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tela1 from './screens/Tela1';
import TelaPrincipal from './screens/TelaPrincipal';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialNavigator="TelaPrincipal">
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} options={{headerShown:false}} />
        <Stack.Screen name="Tela1" component={Tela1}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
} 

{/* <TelaPrincipal acao={navigation} /> */}