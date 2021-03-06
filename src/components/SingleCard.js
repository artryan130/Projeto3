import React, { Fragment } from "react";
import {Text, View, StyleSheet, TouchableOpacity} from "react-native"; 

export function SingleCard( props, index, navigation ) {

    const { title, subtitle, rota } = props

    return (
        // <View style={style.card} key={index}>
            <TouchableOpacity style={style.card} key={index} onPress={() => navigation.navigate('TabRoutes', {
                subtela: rota
            } 
            )}>
                <Text style={style.title}>{title}</Text>
                <Text style={style.title2}>{subtitle}</Text> 
            </TouchableOpacity>
        // </View>
         
    )
}

const style = StyleSheet.create({
    card: {
        padding: 20,
        borderColor: '#23C7D7',
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        marginBottom: 30
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});