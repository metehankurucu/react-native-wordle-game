import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Logo, Menu} from '../components';

const Home = () => {
  return (
    <Layout style={styles.container}>
      <Logo style={styles.logo} />
      <Menu />
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 40,
    textAlign: 'center',
  },
});
