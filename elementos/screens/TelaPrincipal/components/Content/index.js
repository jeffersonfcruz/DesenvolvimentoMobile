import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { format } from "../../css/Styles";

export default function Content (props) {
    
    return (
        <View style={{flex: 8}}>
            <View style={format.content}>
                <TouchableOpacity onPress={()=>{props.acao.navigate("TelaCamera");}} style={format.btn}>
                    <Image source={require("../../../../assets/camera.png")} style={format.imgbtn} />
                    <Text style={format.txtbtn}>Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{props.acao.navigate("TelaGaleria");}} style={format.btn}>
                    <Image source={require("../../../../assets/gallery.png")} style={format.imgbtn} />
                    <Text style={format.txtbtn}>Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{props.acao.navigate("TelaBarcode");}} style={format.btn}>
                    <Image source={require("../../../../assets/barcode.png")} style={format.imgbtn} />
                    <Text style={format.txtbtn}>Código de Barras</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{props.acao.navigate("TelaMapa");}} style={format.btn}>
                    <Image source={require("../../../../assets/maps.png")} style={format.imgbtn} />
                    <Text style={format.txtbtn}>Mapas</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}