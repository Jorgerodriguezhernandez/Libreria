import {useState} from 'react';
import {View, Text, FAB, Image, StyleSheet} from 'react-native'

import Item from "./Item"




const Libro = () => {

    const initialLibro = [{
        title: 'Batman',
        page: '26',
        porcentage: '85%',
        key: String(Math.random()*1)
    }]
    const [libro, setLibro] = useState(initialLibro);

    return (
       <View style={styles.container}>
           <Image source={require('../assets/fondoApp.png')} style={styles.fondo} />
           <Item libro={libro} setLibro={setLibro}/>
       </View>
    );
}

const styles = StyleSheet.create({
   container: {
    paddingTop:50,
    backgroundColor: "#324851",
    paddingBottom:50,
    justifyContent: "flex-start",
    alignItems:"center",
    height: "100%",
    shadowColor:"#324851"
   },
   image:{ 
       width: "85%", 
       height: "50%", 
       marginBottom: 15,
       marginTop:12,
       borderRadius: 10,
       borderColor: "white",
       
    },
    fondo:{
        width: "100%",
        height: "120%",
        paddingTop:70,
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
    },
          
})

export default Libro;