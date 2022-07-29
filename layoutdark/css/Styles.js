import { StyleSheet } from "react-native";

export const global = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#141414"
    },
    header: {
        padding: 30,
        height: 140,
        flexDirection: "row",
        paddingTop: 60,
        paddingLeft: 30,
    },
    txtheader: {
        color: 'white',
        fontSize: 30,
        padding: 10
    },
    userimg: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    nomeheader: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        left: 10
    },
    contaheader: {
        fontSize: 12,
        color: '#dddddd',
        left: 10
    },
    findimg: {
        width: 50,
        height: 50,
        position: "absolute",
        marginTop: 60,
        right: 10,
    },
    titulostories: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 30
    },
    stories: {
        width: 150,
        height: 200,
        resizeMode: "cover",
        margin: 10,
        borderRadius: 20,
    },
    tag: {
        padding: 10,
        borderWidth: 1,
        color: 'white',
        borderRadius: 15,
        textAlign: 'center',
        backgroundColor: "#090909"
    },
    like: {
        textAlign: 'center',
        color: 'white',
        padding: 10,
        textShadowColor: '#090909',
        textShadowOffset: {width: 10, height: 10},
        textShadowRadius: 5,
    },
    atividades: {
        flexDirection: 'row',
        position: 'absolute',
        zIndex: 1000,
        top: 20,
        left: 20,
    },
    imgcheck:{
        width: 10,
        height: 10,
        resizeMode: "cover",
        marginLeft: 50,

    },
    username: {
        color: 'white',
        padding: 10,
    },
    premiere: {
        padding: 10,
        color: 'white',
        borderRadius: 15,
        textAlign: 'center',
        backgroundColor: "#e54947"
    },
    trendingarea: {
        paddingTop: 8,
        height: 50,
        flexDirection: "row",
    },
    imagesporte:{
        backgroundColor: "dddddd",
        padding:10, 
    },
    imgtrending: {
        backgroundColor: "#202124",
        padding: 10,
        width: "95%",
        borderRadius: 40,
        marginLeft: "auto",
        marginRight: "auto" ,
    },
    titulotrending: {
        color: 'white',
        fontSize: 30,
        paddingLeft: 25,
    },
    txtmore: {
        color: "#d9b103",
        position: 'absolute',
        right: 0,
        paddingTop: 20,

    },
    imgesporte: {
        width: "100%",
        height: 250,
        resizeMode: "cover",
        borderRadius: 40,
    },
    caixalike: {
        backgroundColor: "#fece00",
        padding: 10,
        width: 80,
        flexDirection: "row",
        position: "absolute",
        top: 220,
        right: 10,
        borderBottomRightRadius: 30,
        borderTopLeftRadius: 10,
    },
    imglike: {
        height: 20,
        width: 20,
    },
    caixauser: {
        flexDirection: "row",
        paddingTop: 5,
    },
    imguser1: {
        width: 50,
        height: 50,
        margin: 5,
        borderRadius: 10,
    }
})