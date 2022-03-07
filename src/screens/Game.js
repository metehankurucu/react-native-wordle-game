import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {Layout, Wordle} from '../components';
import data from '../data';

const Game = () => {
  const {i18n} = useTranslation();
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    const _data = data?.hasOwnProperty(i18n.language)
      ? data[i18n.language]
      : data.tr;
    _data && setGameData(_data);
  }, [i18n.language]);

  return <Layout>{gameData ? <Wordle {...gameData} /> : null}</Layout>;
};

export default Game;

const styles = StyleSheet.create({});
