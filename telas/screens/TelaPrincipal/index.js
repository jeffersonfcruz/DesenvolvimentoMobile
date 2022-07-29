import { Text, View , TouchableOpacity} from "react-native";
import { format } from "./css/Styles";

export default function TelaPrincipal(){
    return (
        <View style={format.container}>
            <View style={format.content}>
                <TouchableOpacity style={format.btn}>
                    <Text style={format.txtbtn}>Tela 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={format.btn}>
                    <Text style={format.txtbtn}>Tela 4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={format.btn}>
                    <Text style={format.txtbtn}>Tela 3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={format.btn}>
                    <Text style={format.txtbtn}>Tela 4</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}