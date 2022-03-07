import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors, fonts} from '../assets/styles';
import {APP_NAME} from '../constants';

const Logo = ({style = {}, ...props}) => {
  return (
    <Text style={[style, styles.title]} {...props}>
      {APP_NAME}
    </Text>
  );
};

export default Logo;

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: colors.text,
    marginVertical: 6,
    ...fonts.bold,
  },
});
