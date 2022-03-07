import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {colors} from '../assets/styles';

const Icon = ({src = {uri: ''}, color = colors.text, style = {}}) => {
  return (
    <Image
      resizeMode="contain"
      source={src}
      style={[styles.icon, style, {tintColor: color}]}
    />
  );
};

export default Icon;

const styles = StyleSheet.create({
  icon: {
    height: 32,
    width: 32,
    alignSelf: 'center',
  },
});
