import { Image, Text, View } from "react-native";
import { global } from "../../css/Styles.js";

export default function Options() {
    return (
        <View style={global.options}>
            <View style={global.viewwtd}>
                <Text style={global.wtd}>O que deseja fazer?</Text>
                <Text style={global.beneficios}>Veja benefícios</Text>
            </View>
            <View style={global.motheroptions}>
                <View style={global.viewoption}>
                    <Image source={require("../../assets/card.png")} style={global.card}/>
                    <Text style={global.txtoption}>Recarga Cartão</Text>
                    <Text style={global.txtoption}>pré-pago</Text>
                </View>
                <View style={global.viewoption}>
                    <Image source={require("../../assets/transfer.png")} style={global.card}/>
                    <Text style={global.txtoption}>Tranferencia</Text>
                    <Text style={global.txtoption}>Bancaria</Text>
                </View>
            </View>
            <View style={global.motheroptions2}>
                <View style={global.viewoption}>
                    <Image source={require("../../assets/money.png")} style={global.card}/>
                    <Text style={global.txtoption}>Depositar</Text>
                    <Text style={global.txtoption}>Dinheiro</Text>
                </View>
                <View style={global.viewoption}>
                    <Image source={require("../../assets/chat.png")} style={global.card}/>
                    <Text style={global.txtoption}>Atendimento/</Text>
                    <Text style={global.txtoption}>Chat</Text>
                </View>
            </View>
            <View style={global.motheroptions3}>
                <View style={global.viewoption}>
                    <Image source={require("../../assets/barcode.png")} style={global.card}/>
                    <Text style={global.txtoption}>Código de</Text>
                    <Text style={global.txtoption}>Barras</Text>
                </View>
                <View style={global.viewoption}>
                    <Image source={require("../../assets/pix.png")} style={global.card}/>
                    <Text style={global.txtoption}>Efetuar</Text>
                    <Text style={global.txtoption}>um PIX</Text>
                </View>
            </View>
        </View>
    )
    
}