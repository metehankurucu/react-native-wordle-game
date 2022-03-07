import {useState} from 'react';

const useModal = () => {
  const [visible, setVisible] = useState(false);
  const [modalText, setModalText] = useState('');

  const toggle = (text = '') => {
    text && setModalText(text);
    setVisible(bool => !bool);
  };

  return {
    visible,
    onClose: () => setVisible(false),
    setModalText,
    modalText,
    setVisible,
    toggle,
  };
};

export default useModal;
