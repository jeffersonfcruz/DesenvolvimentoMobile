import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cashback from './components/Cashback/index.js';
import Footer from './components/Footer/index.js';
import Header from './components/Header/index.js';
import Options from './components/Options/index.js';
import { global } from "./css/Styles.js"

export default function App() {
  return (
    <View style={global.container}>
      <Header/>
	    <Cashback/>
      <Options/>
      <Footer/>
    </View>
  );
}
