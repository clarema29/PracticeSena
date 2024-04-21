import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Navbar = () => {
    useEffect(() => {
      StatusBar.setBackgroundColor('#1f3d41');
    }, []);
  
    return (
        <View style={styles.navbar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar"
          />
          <View style={styles.authLinksContainer}>
            <TouchableOpacity style={styles.authLink}>
              <Ionicons name="log-in-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.authLink}>
              <Ionicons name="person-add-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      
    );
  };
  
  const styles = StyleSheet.create({
    navbar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#1f3d41',
      paddingVertical: 20,
      paddingHorizontal: 20,
      marginTop: 40,
    },
    searchInput: {
      width: '80%',
      backgroundColor: '#fff',
      paddingVertical: 6,
      paddingHorizontal: 10,
      borderRadius: 20,
    },
    authLinksContainer: {
      flexDirection: 'row',
    },
    authLink: {
      marginLeft: 20,
    },
  });

export default Navbar;