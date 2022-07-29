import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { global } from "./css/Styles.js";
import Header from "./components/Header" 
import Stories from './components/Stories/index.js';
import Trending from './components/Trending/index.js';
import Discover from './components/Discover/index.js';

export default function App() {
  return (
    <View style={global.container}>
      <ScrollView>
        <Header />
        <Stories />
        <Trending />
        <Discover />
      </ScrollView>
    </View>
  );
}