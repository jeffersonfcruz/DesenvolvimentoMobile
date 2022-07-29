import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { format } from './screens/TelaPrincipal/css/Styles';

import TelaCamera from './screens/TelaCamera';
import TelaPrincipal from './screens/TelaPrincipal';
import TelaGaleria from './screens/TelaGaleria';
import TelaBarcode from './screens/TelaBarcode';
import TelaMapa from './screens/TelaMapa';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialNavigator="TelaPrincipal">
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} options={{headerShown:false}} />
        <Stack.Screen name="TelaCamera" component={TelaCamera}/>
        <Stack.Screen name="TelaGaleria" component={TelaGaleria}/>
        <Stack.Screen name="TelaBarcode" component={TelaBarcode}/>
        <Stack.Screen name="TelaMapa" component={TelaMapa}/>
      </Stack.Navigator>
    </NavigationContainer>    
  );
}
