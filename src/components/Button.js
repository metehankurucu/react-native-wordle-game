import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors, fonts} from '../assets/styles';

const Button = ({
  onPress = () => {},
  text = '',
  textStyle = {},
  style = {},
  icon = null,
  ...props
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.button, style]}
      {...props}>
      <View
        style={[
          styles.content,
          {justifyContent: icon ? 'space-between' : 'center'},
        ]}>
        {icon}
        {text ? <Text style={[styles.text, textStyle]}>{text}</Text> : null}
        {icon && text ? <View style={{width: 32}} /> : null}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.light,
    borderRadius: 12,
    // borderWidth: 1,
    borderColor: colors.gray,
    marginHorizontal: 5,
    marginVertical: 10,
    padding: 12,
    shadowColor: '#f0f0f0',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.34,
    shadowRadius: 4.27,

    elevation: 5,
  },
  text: {
    fontSize: 20,
    color: colors.text,
    fontWeight: 'bold',
    textAlign: 'center',
    ...fonts.bold,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
