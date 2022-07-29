import { Image, Text, View } from "react-native";
import { global } from "../../css/Styles.js";

export default function Cashback() {
    return (
        <View style={global.viewcashback}>
				<Text style={global.txtcashback}>CashBack / Últimos 30 dias</Text>
				<Text style={global.cashback}>R$ 52,59</Text>
				<Image source={require("../../assets/help.png")} style={global.helpcash}/>
		</View>
    )
    
}