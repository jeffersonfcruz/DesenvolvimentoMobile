import { Text, View } from "react-native";
import { format } from "../../css/Styles";

export default function Footer() {
    return (
        <View style={format.footer}>
            <Text style={format.txtfooter}>Footer</Text>
        </View>
    )
}