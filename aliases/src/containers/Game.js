import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NativeRouter, Route, Link } from 'react-router-native'

const Game = () => (
    <View>
        <Text style={styles.header}>
            ALISAS
        </Text>
        <Link
            to="/selectMenu"
            underlayColor='#f0f4f7'
            style={styles.navItem}>
            <Text>Полетели!</Text>
        </Link>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 10,
    },
    header: {
        fontSize: 20,
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    subNavItem: {
        padding: 5,
    },
    topic: {
        textAlign: 'center',
        fontSize: 15,
    }
})

export default Game;