import { Image, ScrollView, Text, View } from "react-native";
import { global } from "../../css/Styles.js";

export default function Stories() {
  return (
    <View>
      <Text style={global.titulostories}>Stories</Text>

      <ScrollView horizontal={true}>
        <View>
          <View style={global.atividades}>
            <Text style={global.tag}>Live</Text>
            <Text style={global.like}>20.5k</Text>
          </View>
          <Image source={require("../../assets/stories1.jpg")} style={global.stories}/>
          <Text style={global.username}> Lucas 
            <Image source={require("../../assets/check.png")} style={global.imgcheck}/>
          </Text>
        </View>

        <View>
          <View style={global.atividades}>
            <Text style={global.premiere}>Premiere</Text>
            <Text style={global.like}>14.6k</Text>
          </View>
          <Image source={require("../../assets/stories2.jpg")} style={global.stories}/>
          <Text style={global.username}> Savannah 
            <Image source={require("../../assets/check.png")} style={global.imgcheck}/>
          </Text>
        </View>

        <View>
          <View style={global.atividades}>
            <Text style={global.tag}>Live</Text>
            <Text style={global.like}>20.5k</Text>
          </View>
          <Image source={require("../../assets/stories3.jpg")} style={global.stories}/>
          <Text style={global.username}> José 
            <Image source={require("../../assets/check.png")} style={global.imgcheck}/>
          </Text>
        </View>

        <View>
          <View style={global.atividades}>
            <Text style={global.premiere}>Premiere</Text>
            <Text style={global.like}>20k</Text>
          </View>
          <Image source={require("../../assets/stories4.jpg")} style={global.stories}/>
          <Text style={global.username}> Maria 
            <Image source={require("../../assets/check.png")} style={global.imgcheck}/>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}