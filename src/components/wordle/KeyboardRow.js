import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {fonts} from '../../assets/styles';
import {wp} from '../../utils/scaler';

const KeyboardRow = ({letters, onKeyPress}) => (
  <View style={styles.keyboardRow}>
    {letters.map(letter => (
      <TouchableOpacity onPress={() => onKeyPress(letter)} key={letter}>
        <View style={styles.key}>
          <Text style={styles.keyLetter}>{letter}</Text>
        </View>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  keyboardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  key: {
    backgroundColor: '#535142',
    padding: wp(2),
    margin: wp(0.5),
    borderRadius: 5,
  },
  keyLetter: {
    fontWeight: '500',
    fontSize: 15,
    color: '#fff',
    ...fonts.medium,
  },
});

export default KeyboardRow;
