import AsyncStorage from '@react-native-async-storage/async-storage';

class Wordle {
  getNewWord = async (data = []) => {
    const index = Math.floor(Math.random() * data.length);
    const isUsed = await this.isWordUsed(data[index]);
    if (isUsed) {
      return await this.getNewWord(data);
    }
    return data[index];
  };

  isWordUsed = async word => {
    const words = await AsyncStorage.getItem('@words');
    if (words?.includes?.(word)) {
      return true;
    }
    return false;
  };

  saveWord = async word => {
    const words = await AsyncStorage.getItem('@words');
    if (!words) {
      return await AsyncStorage.setItem('@words', JSON.stringify([word]));
    }
    const data = JSON.parse(words);
    data?.push(word);
    return await AsyncStorage.setItem('@words', JSON.stringify(data));
  };
}

export default Wordle;
