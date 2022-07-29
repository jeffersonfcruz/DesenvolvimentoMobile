import { Image, Text, TouchableOpacity, View } from "react-native";
import { format } from "../../css/Styles";

export default function Header () {
    return (
        <View style={format.header}>
            <TouchableOpacity onPress={()=>alert("Você clicou no logo")}>
                <Image source={require("../../../../assets/face.png")} style={format.imgheaderesq}></Image>
            </TouchableOpacity>
            
            <Text style={format.txtheader}>Elementos</Text>
            
            <TouchableOpacity onPress={()=>alert("Você clicou nas configurações")}>
                <Image source={require("../../../../assets/settings.png")} style={format.imgheaderdir}></Image>
            </TouchableOpacity>
        </View>
    )
}