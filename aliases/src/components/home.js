import React from 'react'
import { StyleSheet, Image, View, TouchableOpacity, Dimensions } from 'react-native'

import Container from './shared/container';
import logo from './assets/aliases-logo.png';

const Home = () => (
    <Container>
      <Image resizeMode={'cover'} source={logo} style={styles.logotype} />
    </Container>
);

const { width: maxWidth, height: maxHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  logotype: {
    width: '100%',
  },
})

export default Home;
