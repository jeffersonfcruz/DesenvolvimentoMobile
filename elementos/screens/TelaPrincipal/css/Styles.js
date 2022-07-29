import { StyleSheet } from "react-native";

export const format = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
    },
    header: {
        flex: 1,
        backgroundColor: "#607d8b",
        flexDirection: "row",
        padding: 10,
    },
    imgheaderesq: {
        width: 100,
        height: 100,
        flex: 1,
        resizeMode: "cover",
    },
    imgheaderdir: {
        width: 90,
        height: 90,
        flex: 1,
        resizeMode: "cover",
    },
    txtheader: {
        flex: 3,
        color: "white",
        fontSize: 15,
        textAlign: "center",
        marginTop: 40,
    },
    content: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    footer: {
        flex: 1,
        backgroundColor: "#f4511e",
        justifyContent: "center",
        alignItems: "center",
    },
    txtfooter: {
        color: "white",
        fontSize: 15,
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
    txtbtn: {
        fontSize: 15,
        textAlign: "center",

    },
    imgbtn: {
        width: 30,
        height: 30,
    },
})