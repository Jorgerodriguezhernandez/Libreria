import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, SafeAreaView } from 'react-native'
import { FAB } from 'react-native-paper';

const Item = ({ libro, setLibro }) => {
    const onDelete = ( rowKey) => {
        const newLibro = [...libro];
        const libroIndex = libro.findIndex((libro) => libro.key === rowKey);
        newLibro.splice(libroIndex, 1);
        setLibro(newLibro);
    }
    return (

        <FlatList style={styles.FlatList} data={libro} renderItem={renderItem => (
            <View style={styles.container}>
                <View style={styles.tarjeta}>
                    <Text style={styles.tituloapp}>Libro</Text>
                    <Image
                        style={styles.image}
                        source={require('../assets/proximo_batman_hijo.jpg')}
                    />
                    <Text style={styles.Documentacion}>Titulo: {renderItem.item.title} </Text>
                    <Text style={styles.Documentacion}>Pagina: {renderItem.item.page}</Text>
                    <Text style={styles.Documentacion}>Porcentaje: {renderItem.item.porcentage}</Text>

                    <View style={styles.fabcontainer}>
                        <FAB style={styles.fabdelete} small icon="delete" onPress={() => onDelete(renderItem.item.key)} />
                        <FAB style={styles.fabedit} small icon="pencil" onPress={() => console.log('Pressed')} />
                    </View>
                </View>
            </View>
        )} />

    )
}

const styles = StyleSheet.create({
    image:{ 
        marginBottom: 15,
        marginTop:12,
        borderRadius: 10,
        borderColor: "white",
     },
    container: {
        backgroundColor: "#324851",
        marginTop:40,
        paddingBottom: 50,
        justifyContent: "flex-start",
        flexDirection: "row",
        alignItems: "center",
        height: "100%",
        shadowColor: "#324851",
    },
    tituloapp: {
        color: "#f0eeef",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginTop: 10,
    },
    Documentacion: {
        color: "#f0eeef",
        fontSize: 25,
        textAlign: "center",
        alignItems: "flex-start",
    },
    fabplus: {
        padding: 10,
        backgroundColor: "#9db802",
        width: 60,
    },
    fabdelete: {
        padding: 10,
        backgroundColor: "#fd7c84",
        width: 60,
    },
    fabedit: {
        padding: 10,
        backgroundColor: "#025b0e",
        width: 60,
    },
    fabcontainer: {
        flexDirection: 'row',
        justifyContent:'space-between',
        padding: 10,
    },

})

export default Item;