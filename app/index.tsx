import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const HomeScreen = () => {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.logo}>Rancheritos</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.mainContent}>
          <View style={styles.txtContainer}>
            <Text style={styles.title}>¿Quienes somos?</Text>

            <Text style={styles.subtitle}>
              Somos Rancheritos Tech, una empresa dedicada al desarrollo de
              software y a la implementación de Tecnologías de la Información
              (TICs) para grandes y medianas empresas.
            </Text>
          </View>

          <View style={styles.txtContainer}>
            <Text style={styles.title2}>Misión</Text>
            <Text style={styles.subtitle}>
              Crear soluciones de software innovadoras y accesibles que impulsen
              el crecimiento y la eficiencia de nuestros clientes.
            </Text>
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.title2}>Visión</Text>
            <Text style={styles.subtitle}>
              Ser reconocidos como una empresa líder en el desarrollo de
              soluciones tecnológicas innovadoras, impulsando el crecimiento de
              nuestros clientes a través de software eficiente y de alta
              calidad.
            </Text>
          </View>

          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.buttonPrimary}>
              <Text style={styles.buttonTextPrimary}>CONTRÁTANOS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonSecondary}>
              <Text style={styles.buttonTextSecondary}>Saber más</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  txtContainer: {
    flex: 1,
    margin: 5,
    marginTop: 10,
    marginBottom: 10,
    padding: 20,
    backgroundColor: "#f8f8f8",
    borderRadius: 15, // Bordes redondeados
    shadowColor: "#8a8a8a", // Color de la sombra
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84, // Difuminar sombra en iOS
    elevation: 5, // Sombra en Android
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#fff",
  },
  logo: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  menuButton: {
    padding: 10,
  },
  menuIcon: {
    fontSize: 20,
    fontWeight: "bold",
  },
  mainContent: {
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    lineHeight: 40,
    marginVertical: 20,
    color: "#616161",
  },
  title2: {
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 40,
    marginVertical: 20,
    textAlign: "center",
    color: "#616161",
  },
  subtitle: {
    fontSize: 14,
    color: "#999",
    letterSpacing: 2,
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginBottom: 20,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPrimary: {
    backgroundColor: "#e07d64",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonTextPrimary: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonSecondary: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999",
  },
  buttonTextSecondary: {
    color: "#999",
    fontWeight: "bold",
    fontSize: 16,
  },
  imageContainer: {
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
});

export default HomeScreen;
