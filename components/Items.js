import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Item from './Item';

const Items = ({ libro }) => {
    return (
        <View>
           <Item libro/>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor: "#324851",
        paddingBottom: 50,
        justifyContent: "flex-start",
        alignItems: "center",
        height: "100%",
        shadowColor: "#324851"
    },
    tituloapp: {
        color: "#f0eeef",
        justifyContent: "center",
        marginTop: 10,
    },
    tarjeta: {
        backgroundColor: "#34675C",
        marginTop: 50,
        height: "80%",
        width: "80%",
        borderRadius: 10,
        alignItems: "center",
    },
    marco: {
        borderWidth: 1,
        borderColor: "white",
        height: 20,
        color: "white",
        marginTop: 40,
        width: "80%",
        height: "70%",
    },
    image: {
        width: "85%",
        height: "50%",
        marginBottom: 15,
        marginTop: 12,
        borderRadius: 10,
        borderColor: "white",

    },
    fondo: {
        width: "100%",
        height: "120%",
        paddingTop: 70,
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
    },
    Documentacion: {
        color: "#f0eeef",
        fontSize: 25,
        textAlign: "left",
        alignItems: "flex-start",
    },
    fabplus: {
        padding: 10,
        backgroundColor: "#9db802"
    },
    fabdelete: {
        padding: 10,
        backgroundColor: "#fd7c84"
    },
    fabedit: {
        padding: 10,
        backgroundColor: "#025b0e"
    },
    fabcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "90%",
    },
    fabplusc: {
        flexDirection: 'row',
        width: "90%",
        paddingLeft: "35%",
        paddingTop: "10%",
    }

})

export default Items;