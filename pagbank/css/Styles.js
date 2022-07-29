import { StyleSheet } from "react-native";

export const global = StyleSheet.create({
    container: {

    },
    logo: {
        width: 120, 
        height: 29,
        resizeMode: "cover",
    },
    header: {
        backgroundColor: "#5cbc4e",
        paddingTop: 50,
        paddingLeft: 30,
    },
	top: {
		flexDirection: "row"
	},
    down:{
        width: 30,
        height: 30,
        resizeMode: "cover",
        left: 66,
    },
    notify: {
        width: 30,
        height: 30,
        resizeMode: "cover",
        left: 210,
    },
	saldo: {
		paddingTop: 20,
	},
	txtsaldo: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold"
	},
	cash: {
		flexDirection: "row",
		paddingTop: 10,
	},
	txtcash: {
		color: "white",
		fontSize: 50,
	},
	eye: {
		height: 43,
		width: 43,
		resizeMode: "cover",
		left: 196,
		top: 5,
	},
	status: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	txtstatus: {
		paddingTop: 15,
		color: 'white',
		fontSize: 17,
	},
	cashstatus: {
		fontSize: 30,
		color: 'white',
		fontWeight: 'bold',
	},
	help: {
		width: 21,
		height: 21,
		right: 42,
		top: 18,
	},
	viewcashback: {
		paddingTop: 15,
		flexDirection: 'row',
		justifyContent: "space-between",
		backgroundColor: '#56b047',
		height: 50,
	},
	txtcashback: {
		color: 'white',
		fontSize: 18,
		left:30,
	},
	cashback: {
		color:'white',
		fontWeight: 'bold',
		fontSize: 19,
	},
	helpcash: {
		width: 21,
		height: 21,
		right: 42,
	},
	options: {
		backgroundColor: '#f4f4f4',
		height: 650,
	},
	viewwtd: {
		paddingTop: 15,
		flexDirection: 'row',
		left:30,
	},
	wtd: {
		color:'#737375',
		fontWeight: 'bold',
		fontSize: 19,
	},
	beneficios:{
		color: '#4aa9c6',
		fontSize: 19,
		left: 180
	},
	viewoption:{
		backgroundColor: "#ffffff",
		top: 20,
		width: 210,
		height: 150,
		marginLeft: "auto",
		marginRight: "auto",
		padding: 10,
		borderRadius: 10,
		shadowColor: "black",
		shadowOffset: {width: 10, height: 15},
		shadowOpacity: 1,
		shadowRadius: 10,
		elevation: 4,
	},
	motheroptions: {
		flexDirection: "row",
	},
	motheroptions2: {
		flexDirection: "row",
		paddingTop:20,
	},
	motheroptions3: {
		flexDirection: "row",
		paddingTop:20,
	},
	txtoption: {
		fontSize: 25,
		paddingLeft: 10,
		top: 17,
	},
	card: {
		width: 45,
		height: 45,
		left: 130,
		top: 5,
	},
	footer: {
		flexDirection: "row",
	},
	home: {
		marginRight: "auto",
		marginLeft: "auto",
	},
	imgfooter: {
		width: 40,
		height: 40,
		top: 20,
	},
	txtfooter: {
		top: 27,
		fontSize: 18,
	}
})