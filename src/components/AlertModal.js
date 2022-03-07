import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Modal from 'react-native-modal';
import {fonts} from '../assets/styles';
import Button from './Button';

const AlertModal = ({
  isVisible,
  onClose = () => {},
  text = '',
  continueText = '',
  onContinue = () => {},
  children = null,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={onClose}
      useNativeDriverForBackdrop
      swipeDirection={['down']}>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>{text}</Text>
        {children}
        <Button
          text={continueText}
          onPress={() => {
            onClose?.();
            onContinue?.();
          }}
        />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingTop: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    ...fonts.medium,
  },
});

export default AlertModal;
