import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {fonts, colors} from '../../assets/styles';

const Block = ({index, guess, word, guessed}) => {
  const letter = guess[index];
  const wordLetter = word[index];

  const blockStyles = [styles.guessSquare];
  const textStyles = [styles.guessLetter];

  if (letter === wordLetter && guessed) {
    blockStyles.push(styles.guessCorrect);
    textStyles.push(styles.guessedLetter);
  } else if (word?.includes?.(letter) && guessed) {
    blockStyles.push(styles.guessInWord);
    textStyles.push(styles.guessedLetter);
  } else if (guessed) {
    blockStyles.push(styles.guessNotInWord);
    textStyles.push(styles.guessedLetter);
  }

  return (
    <View style={blockStyles}>
      <Text style={textStyles}>{letter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  guessRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  guessSquare: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E2DFC8',
    borderRadius: 6,
    margin: 5,
  },
  guessLetter: {
    fontSize: 20,
    color: colors.text,
    ...fonts.bold,
  },
  guessedLetter: {
    color: '#fff',
  },
  guessCorrect: {
    backgroundColor: '#6aaa64',
    borderColor: '#6aaa64',
  },
  guessInWord: {
    backgroundColor: '#c9b458',
    borderColor: '#c9b458',
  },
  guessNotInWord: {
    backgroundColor: '#787c7e',
    borderColor: '#787c7e',
  },
});

export default Block;
