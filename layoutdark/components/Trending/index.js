import { Image, Text, View } from "react-native";
import { global } from "../../css/Styles.js";

export default function Trending() {
    return (
        <View>
            <View style={global.trendingarea}>
                <Text style={global.titulotrending}> Trending </Text>
                <Text style={global.txtmore}> More -&gt; </Text>
            </View>
            <View style={global.imgtrending}>
                <Image source={require("../../assets/stories5.jpg")} style={global.imgesporte}/> 
                <View style={global.caixalike}>
                    <Image source={require("../../assets/like.png")} style={global.imglike}/>
                    <Text style={global.txtlike}> Like </Text>
                    </View>
                    <View style={global.caixauser}>
                        <Image source={require("../../assets/user1.jpg")} style={global.imguser1}/>
                                <View style={global.caixanome}>
                                    <Text style={{color: "white" ,fontSize:20, paddingTop: 5}}> Leonardo </Text>
                                    <Text style={{color: "white" ,fontSize:10}}> 5m atrás </Text>
                                </View>
                    </View>
                    <Text style={{color: "white" ,fontSize:14 , paddingTop: 5}}>
                    Até pelo que é ruim eu agradeço, e de coração cheio vou sorrindo e recebendo todos os ensinamentos da vida. 🤗
                    </Text>
                
            </View>
        </View>
    )
}