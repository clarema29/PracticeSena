import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ImageBackground,
  Alert,
  TouchableOpacity,
  Modal,
  Button
} from "react-native";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RegisterForm = ({ visible, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (name === "" || email === "" || password === "") {
      Alert.alert("Campos Vacíos", "Por favor, complete todos los campos.");
    } else {
      console.log("Registrando usuario con:", { name, email, password });
      // Una vez registrado, puedes cerrar el modal
      onClose();
    }
  };

  return (
    //modal con formulario de registro
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalView}>
        <Text style={styles.modalTitle}>Registro</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={name}
          onChangeText={setName}
        />
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
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Cerrar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

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

  return (
      //imagen de fondo
    <ImageBackground
      source={require("./assets/fondo.jpg")}
      style={styles.background}
    >
      <Navbar />
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
            color={'#1f3d41'}
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
      <RegisterForm visible={modalVisible} onClose={() => setModalVisible(false)} />
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
    width: "60%",
    borderRadius: 20,
    overflow: "hidden"
  },
  registroContainer: {
    flexDirection: "row",
    marginTop: 10
  },
  registroTexto: {
    color: "black",
  },
  enlace: {
    color: "#19545d",
    textDecorationLine: "underline"
  },
  modalView: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalTitle: {
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
  button: {
    width: "100%",
    backgroundColor: "#1f3d41",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16
  },
  closeButton: {
    backgroundColor: "#19545d",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10
  },
  closeButtonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16
  }
});

export default LoginScreen;





