import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeTab = () => (
    <View style={styles.container}>
        <Text>First Tab Content</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff4081',
    },
});

export default HomeTab;
