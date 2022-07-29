import { Image, Text, View } from "react-native";
import { global } from "../../css/Styles.js";

export default function Discover() {
    return (
        <View>
            <View style={global.trendingarea}>
                <Text style={global.titulotrending}> Discover </Text>
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
                    <Text style={{color: "white" ,fontSize:14, paddingTop: 5}}>
                    Demasiada maquilhagem e muito pouca roupa para vestir é sempre um sinal de desespero para a mulher.
                    </Text>
            </View>
        </View>
    )
}