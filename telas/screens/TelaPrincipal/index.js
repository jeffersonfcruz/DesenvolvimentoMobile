import { Text, View , TouchableOpacity} from "react-native";
import { format } from "./css/Styles";
import Tela1 from "../Tela1";
export default function TelaPrincipal(navigation){
    return (
        <View style={format.container}>
            <View style={format.content}>
                <TouchableOpacity onPress={()=>{props.acao.navigate("Tela1");}} style={format.btn}>
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