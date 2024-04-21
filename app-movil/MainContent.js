import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const MainContent = () => {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>¡Bienvenido!</Text>
        <Image source={require("./assets/Logo.png")} style={styles.logo}/>
        <Text style={styles.text}>Aquí, pronto encontrarás información sobre nuestro negocio.</Text>
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default MainContent;