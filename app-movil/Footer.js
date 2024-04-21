import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.nombre}>© 2024 Claudia Redondo. Derechos reservados.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1f3d41',
    paddingVertical: 10,
    alignItems: 'center',
},
nombre: {
    fontSize: 16,
    color: '#fff',
    },
});

export default Footer;