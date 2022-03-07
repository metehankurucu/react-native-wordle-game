import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {fonts} from '../../assets/styles';
import KeyboardRow from './KeyboardRow';
import {useTranslation} from 'react-i18next';

const Keyboard = ({onKeyPress, keyboard}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.keyboard}>
      <KeyboardRow letters={keyboard.row1} onKeyPress={onKeyPress} />
      <KeyboardRow letters={keyboard.row2} onKeyPress={onKeyPress} />
      <KeyboardRow letters={keyboard.row3} onKeyPress={onKeyPress} />
      <View style={styles.keyboardRow}>
        <TouchableOpacity onPress={() => onKeyPress('ENTER')}>
          <View style={styles.key}>
            <Text style={styles.keyLetter}>{t('enter')}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  keyboard: {flexDirection: 'column'},
  keyboardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  key: {
    backgroundColor: '#535142',
    padding: 10,
    margin: 3,
    borderRadius: 5,
  },
  keyLetter: {
    fontWeight: '500',
    fontSize: 15,
    color: '#fff',
    ...fonts.medium,
  },
});

export default Keyboard;
