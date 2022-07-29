import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaPrincipal from './screens/TelaPrincipal';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <TelaPrincipal/>
      <StatusBar style="auto" />
    </View>
  );
}
