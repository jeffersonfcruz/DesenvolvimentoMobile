import {View , Text, Image } from "react-native"
import {global} from "../../css/Styles.js"
export default function Header() {
    return (
        <View style={global.header}>
            <Image source={require("../../assets/user.jpg")} style={global.userimg} />
            <View>
                <Text style={global.nomeheader}> Zé Rafael </Text>
                <Text style={global.contaheader}> @rafael_ze </Text>
            </View>
            <Image source={require("../../assets/find.png")} style={global.findimg} />
        </View>
    )
}