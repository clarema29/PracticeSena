import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navbar from './Navbar';
import MainContent from './MainContent';

const Home = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <MainContent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  navbar: {
    marginTop: 40, // Ajusta este valor según sea necesario
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default Home;