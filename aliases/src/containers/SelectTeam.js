import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Scene, Router, Stack, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux'

const SelectTeam = () => (
    <View style={styles.container}>
        <Text style={styles.header}>
            SELECT TEAM
        </Text>
        <TouchableOpacity
            onPress={Actions.Game}
            underlayColor='#f0f4f7'>
            <Text
                style={styles.btn}>
                Начать играть
            </Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 10,
        flex: 2,
        backgroundColor: 'blue'
    },
    btn: {
        fontSize: 20,
        color: 'red'
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
        color: 'black'
    },
    subNavItem: {
        padding: 5,
    },
    topic: {
        textAlign: 'center',
        fontSize: 15,
    }
})

export default SelectTeam;