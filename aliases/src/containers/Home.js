import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native'
import { Scene, Router, Stack, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux'

import Container from './../components/shared/container';
import logo from './../components/assets/logo.png';
import play from './../components/assets/play.png';

const Home = () => (
    <View>
        <Container>
          <Image source={logo} style={styles.logotype} />
        </Container>
        <Container>
          <TouchableOpacity
              onPress={Actions.SelectTeam}
              underlayColor='#f0f4f7'>
              <Image resizeMode={'cover'} source={play} style={styles.start} />
          </TouchableOpacity>
        </Container>
    </View>
);

const styles = StyleSheet.create({
    logotype: {
      width: Dimensions.get('window').width / 100 * 70,
      height: 150,
      marginTop: 50,
    },
    start: {
      width: Dimensions.get('window').width / 100 * 70,
      height: 100,
      marginTop: 200,
    },
})

export default Home;
