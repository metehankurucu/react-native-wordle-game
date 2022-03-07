import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {colors} from '../assets/styles';

const Layout = ({style = {}, children, ...props}) => {
  return (
    <SafeAreaView style={[styles.layout]}>
      <View style={[styles.content, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: 22,
  },
});
