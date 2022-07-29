import { StyleSheet } from "react-native";

export const format = StyleSheet.create({
    container:{
        backgroundColor: "black",
        flex: 1,

    },
    content: {
        paddingTop: 100,
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        
    },
    btn: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        flex: 1,
        borderColor: "gray",
        borderWidth: 1,
        margin: 5,
        height: "10%",
    },
    txtbtn:{
        fontSize: 15,
        textAlign: "center",
        color: "white",
    },
    imgbtn: {
        width: 30,
        height: 30,
    },
})