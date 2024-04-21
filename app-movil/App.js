import React, { useState } from "react";
import {
  View, Text,
  TextInput, Button,
  StyleSheet, Image,
  ImageBackground, Alert, TouchableOpacity,
  Linking, Modal
} from "react-native";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Register from "./Register"

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "" || password === "") {
      Alert.alert(
        "Campos Vacíos",
        "Por favor, complete todos los campos antes de iniciar sesión."
      );
    } else {
      Alert.alert(
        "Iniciar Sesión",
        "¿Estás seguro de que deseas iniciar sesión?",
        [
          { text: "Cancelar", style: "cancel" },
          { text: "Sí", onPress: () => iniciarSesion() }
        ]
      );
    }
  };

  const iniciarSesion = () => {
    console.log("Iniciando sesión con:", { email, password });
  };

  const handleRegistro = () => {
    console.log("Mostrando modal de registro...");
    setModalVisible(true);
  };

  const [modalVisible, setModalVisible] = useState(false);


  return (
    <ImageBackground
      source={require("./assets/fondo.jpg")}
      style={styles.background}
    >
      <Navbar/>
      <View style={styles.container}>
        <Image source={require("./assets/Logo.png")} style={styles.logo} />
        <Text style={styles.title}>Iniciar Sesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.botonContainer}>
          <Button
            style={styles.boton}
            title="Ingresar"
            onPress={handleLogin}
            color={"#1f3d41"}
          />
        </View>
        <View style={styles.registroContainer}>
          <Text style={styles.registroTexto}>¿No tienes cuenta? </Text>
          <TouchableOpacity onPress={handleRegistro}>
            <Text style={styles.enlace}>Regístrate</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Atención</Text>
          <Text style={styles.modalText}>La sección de registro está en construcción.</Text>
          <Button
            title="Cerrar"
            onPress={() => setModalVisible(!modalVisible)}
            color={'#19545d'}
          />
        </View>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30
  },
  logo: {
    width: 200,
    height: 200
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "#fff",
    borderColor: "gray",
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10
  },
  botonContainer: {
    width: "100%",
    borderRadius: 20,
    overflow: "hidden"
  },
  registroContainer: {
    flexDirection: "row",
    marginTop: 10
  },
  registroTexto: {
    color: "black",
    marginRight: 10
  },
  enlace: {
    color: "#19545d",
    textDecorationLine: "underline"
  },
  nombre: {
    fontSize: 16,
    color: "#333"
  },
    modalView: {
    justifyContent: "center",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText:{
    fontSize: 16,
    textAlign: "center",
    padding: 20,
  },
  modalTitle:{
    fontSize: 30,
  }
});

export default LoginScreen;






