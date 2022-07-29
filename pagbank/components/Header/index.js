import { Image , Text , View } from "react-native";
import { global } from "../../css/Styles";

export default function Header() {
    return (
        <View style={global.header}>
        	<View style={global.top}>    
				<Image source={require("../../assets/pagbank.png")} style={global.logo}/>
            	<Image source={require("../../assets/down.png")} style={global.down}/>
            	<Image source={require("../../assets/notify.png")} style={global.notify}/>
			</View>
			<View style={global.saldo}>
				<Text style={global.txtsaldo}>
					Saldo disponível
				</Text>
			</View>
			<View style={global.cash}>
				<Text style={global.txtcash}>R$ 2.500</Text>
				<Image source={require("../../assets/eye.png")} style={global.eye}/>
			</View>
			<View style={global.status}>
				<View>
					<Text style={global.txtstatus}>Bloqueado</Text>
					<Text style={global.cashstatus}>R$ 20,65</Text>
				</View>
				<View>
					<Text style={global.txtstatus}>A Receber</Text>
					<Text style={global.cashstatus}>R$ 1.200,34</Text>
				</View>
				<View>
					<Image source={require("../../assets/help.png")} style={global.help}/>
				</View>
			</View>
		</View>

        )
}