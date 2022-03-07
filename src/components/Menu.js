import React from 'react';
import {Linking, StyleSheet, View, Image} from 'react-native';
import {APP_NAME, AVAILABLE_LANGUAGES, EMAIL, ICONS} from '../constants';
import Share from 'react-native-share';
import Button from './Button';
import Icon from './Icon';
import {useNavigation} from '@react-navigation/native';
import {hp} from '../utils/scaler';
import {useTranslation} from 'react-i18next';

const Menu = () => {
  const {t, i18n} = useTranslation();
  const {navigate} = useNavigation();

  const onShare = () => {
    Share.open({
      title: `${APP_NAME}${t('shareText')}"`,
      message: `${t('shareMessage1')}${APP_NAME}${t('shareMessage2')}`,
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  const onContact = () => {
    Linking.openURL(`mailto:${EMAIL}`);
  };

  return (
    <View style={styles.menu}>
      <Button
        onPress={() => navigate('Game')}
        text={t('startGame')}
        icon={<Icon src={ICONS.PLAY} />}
      />
      <View style={{height: hp(8)}} />
      <Button
        onPress={onContact}
        text={t('contactUs')}
        icon={<Icon src={ICONS.CONTACT} />}
      />
      <Button
        onPress={onShare}
        text={`${t('share')}!`}
        icon={<Icon src={ICONS.SHARE} />}
      />
      <View style={{height: hp(5)}} />
      <View style={styles.languages}>
        {AVAILABLE_LANGUAGES.map(language => {
          return (
            <Button
              key={language.code}
              onPress={() => i18n.changeLanguage(language.code)}
              icon={
                <Image
                  resizeMode="contain"
                  source={language.icon}
                  style={[styles.icon]}
                />
              }
            />
          );
        })}
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  menu: {},
  icon: {
    height: 32,
    width: 32,
    alignSelf: 'center',
  },
  languages: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
