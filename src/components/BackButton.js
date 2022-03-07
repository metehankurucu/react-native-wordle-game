import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors, fonts} from '../assets/styles';
import {ICONS} from '../constants';
import Icon from './Icon';

const BackButton = ({style = {}, text = ''}) => {
  const {goBack} = useNavigation();
  return (
    <TouchableOpacity onPress={() => goBack()} style={[styles.button, style]}>
      <Icon src={ICONS.BACK} style={styles.icon} />
      {text ? <Text style={styles.text}>{text}</Text> : null}
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 99,
    padding: 9,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  text: {
    ...fonts.medium,
    color: colors.text,
    marginHorizontal: 5,
  },
  icon: {
    height: 21,
    width: 21,
    marginLeft: -1,
  },
});
