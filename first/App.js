import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.struct}>
      <View style={styles.header}>
      <Text style={styles.txtheader}> Header </Text>
      </View>
      
      <View style={styles.content}>
      <Text> Content </Text>
      <Text>
      Join more than 150 million others who have downloaded textPlus - the best free phone number app for unlimited free texting and calling.
      textPlus allows you to call, text, and message your friends with a real phone number - no phone service required!
      Send free, unlimited SMS and MMS texts to any US phone number, and call nearly any phone number worldwide. That means you can
      </Text>
      <Image source={{uri:"https://cdn.wallpapersafari.com/39/10/BxwiHy.jpg"}} style={styles.img}/>
      </View>

      <View style={styles.footer}>
      <Text style={styles.txtfooter}> Footer </Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  struct:{
    flex: 1,
  },
  header:{
    flex: 0.5,
    backgroundColor: 'red',
    padding: 10
  },
  content:{
    flex: 3,
    backgroundColor: 'lightblue',
    padding: 10
  },
  footer:{
    flex: 1,
    backgroundColor: 'darkred',
    padding: 10
  },
  txtheader:{
    color: "white",
    fontSize: 25,
    textAlign: 'center',
    paddingTop: 40,
  },
  txtfooter:{
    color: "black",
    fontSize: 25,
    textAlign: 'center',
  },
  img:{
    width: 100,
    height: 400,
    resizeMode: "cover",
  }
});
