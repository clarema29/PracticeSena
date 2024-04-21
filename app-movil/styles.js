import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: "#fff",
    borderColor: "gray",
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  boton: {
    width: "80%",
  },
  registroContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  registroTexto: {
    color: "black",
    marginRight: 10,
  },
  enlace: {
    color: "#19545d",
    textDecorationLine: "underline",
  },
});
