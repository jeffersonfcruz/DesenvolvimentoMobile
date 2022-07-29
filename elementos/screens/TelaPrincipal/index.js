import { StyleSheet, Text, View } from 'react-native';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import { format } from './css/Styles';

export default function TelaPrincipal({navigation}) {
  return (
    <View style={format.container}>
      <Header/>
      <Content acao={navigation}/>
      <Footer/>
    </View>
  );
}
