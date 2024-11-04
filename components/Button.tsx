import { Image, StyleSheet, Platform, View, SafeAreaView, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import React from "react";

type ButtonProps = {
    title: string,
};

const Button = ({title}: ButtonProps) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.btnText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#130F25',
        borderRadius: 7,
        height: 40,
        width: 290,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    btnText: {
        fontFamily: 'Inter',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 19.36,
        textAlign: 'center',
        color: '#ffffff',

    }

})