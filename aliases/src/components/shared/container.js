import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

const { width, height: maxHeight } = Dimensions.get('window');

const Container = ({styles, children }) => (
  <View style={styleSheet.wrapper}>
    <View style={[styles, styleSheet.container]}>
      {children}
    </View>
  </View>
);

const styleSheet = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    display: 'flex',
    width,
  },
  container: {
    width: width / 100 * 80,
  },
});

export default Container;
