import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NativeRouter, Route, Link } from 'react-router-native'
import Home from './containers/Home';
import Game from './containers/Game';
import ScoreBoard from './containers/ScoreBoard';
import SelectTeam from './containers/SelectTeam';

const Routes = () => (
    <NativeRouter>
        <View style={styles.container}>
            <Route path="/" component={Home}/>
            <Route path="/scoreBoard" component={ScoreBoard}/>
            <Route path="/game" component={Game}/>
            <Route path="/selectTeam" component={SelectTeam}/>
        </View>
    </NativeRouter>
)

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        padding: 10,
        flex: 1,
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

export default Routes