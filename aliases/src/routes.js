import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Scene, Router, Stack, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux'
import Home from './containers/Home';
import Game from './containers/Game';
import ScoreBoard from './containers/ScoreBoard';
import SelectTeam from './containers/SelectTeam';

const Routes = () => (
    <Router>
        <Stack key="root">
            <Scene key="Home" component={Home} title="Home"/>
            <Scene key="ScoreBoard" component={ScoreBoard} title="ScoreBoard"/>
            <Scene key="Game" component={Game}/>
            <Scene key="SelectTeam" component={SelectTeam}/>
        </Stack>
    </Router>
);

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
});

export default Routes