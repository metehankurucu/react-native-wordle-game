import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useTranslation} from 'react-i18next';
import {fonts} from '../../assets/styles';
import useModal from '../../hooks/useModal';
import {hp} from '../../utils/scaler';
import AlertModal from '../AlertModal';
import BackButton from '../BackButton';
import GuessRow from './GuessRow';
import Keyboard from './Keyboard';
import Wordle from '../../helpers/wordle';

const wordle = new Wordle();

const defaultGuess = {
  0: '',
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
};

const WordleGame = ({
  words = [],
  keyboard = {row1: [], row2: [], row3: []},
}) => {
  const {t} = useTranslation();
  const [activeWord, setActiveWord] = useState(words[0]);
  const [guessIndex, setGuessIndex] = useState(0);
  const [guesses, setGuesses] = useState(defaultGuess);
  const [gameComplete, setGameComplete] = useState(false);
  const alertModal = useModal();
  const gameCompleteModal = useModal();

  const handleKeyPress = letter => {
    const guess = guesses[guessIndex];

    if (letter === 'ENTER') {
      if (guess.length !== 5) {
        alertModal.toggle(t('wordTooShort'));
        return;
      }

      if (!words.includes(guess)) {
        alertModal.toggle(t('invalidWord'));
        return;
      }

      if (guess === activeWord) {
        setGuessIndex(guessIndex + 1);
        setGameComplete(true);
        gameCompleteModal.toggle(t('won'));
        return;
      }

      if (guessIndex < 5) {
        setGuessIndex(guessIndex + 1);
      } else {
        setGameComplete(true);
        gameCompleteModal.toggle(t('lost'));
        return;
      }
    }

    if (letter === '⌫') {
      setGuesses({...guesses, [guessIndex]: guess.slice(0, -1)});
      return;
    }

    if (guess.length >= 5) {
      return;
    }

    setGuesses({...guesses, [guessIndex]: guess + letter});
  };

  useEffect(() => {
    if (!gameComplete) {
      resetGame();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameComplete]);

  const onComplete = async () => {
    await wordle.saveWord(activeWord);
    gameCompleteModal.onClose();
    setGameComplete(false);
  };

  const resetGame = async () => {
    const word = await wordle.getNewWord(words);
    setActiveWord(word);
    setGuesses(defaultGuess);
    setGuessIndex(0);
    setGameComplete(true);
  };

  return (
    <View style={styles.container}>
      <BackButton text={t('goBack')} />
      <View>
        <GuessRow
          guess={guesses[0]}
          word={activeWord}
          guessed={guessIndex > 0}
        />
        <GuessRow
          guess={guesses[1]}
          word={activeWord}
          guessed={guessIndex > 1}
        />
        <GuessRow
          guess={guesses[2]}
          word={activeWord}
          guessed={guessIndex > 2}
        />
        <GuessRow
          guess={guesses[3]}
          word={activeWord}
          guessed={guessIndex > 3}
        />
        <GuessRow
          guess={guesses[4]}
          word={activeWord}
          guessed={guessIndex > 4}
        />
        <GuessRow
          guess={guesses[5]}
          word={activeWord}
          guessed={guessIndex > 5}
        />
      </View>
      <View>
        <Keyboard keyboard={keyboard} onKeyPress={handleKeyPress} />
      </View>
      <AlertModal
        isVisible={alertModal.visible}
        onClose={alertModal.onClose}
        text={alertModal.modalText}
        continueText={t('close')}
        onContinue={alertModal.onClose}
      />
      <AlertModal
        isVisible={gameCompleteModal.visible}
        onClose={gameCompleteModal.onClose}
        text={gameCompleteModal.modalText}
        continueText={t('newGame')}
        onContinue={onComplete}>
        <View style={styles.gameCompleteWrapper}>
          <Text style={styles.text}>
            <Text style={styles.bold}>{t('correctWord')}:</Text> {activeWord}
          </Text>
        </View>
      </AlertModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
  },
  gameCompleteWrapper: {
    alignItems: 'center',
    marginTop: hp(3),
    marginBottom: hp(2),
  },
  bold: {
    fontSize: 20,
    ...fonts.bold,
  },
  text: {
    fontSize: 20,
    ...fonts.medium,
  },
});

export default WordleGame;
