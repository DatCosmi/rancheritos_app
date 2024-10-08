import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import Ionicons from "@expo/vector-icons/Ionicons";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#fb8d5e", "#ffd15b"]}
        style={styles.headerBackground}
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.header2}>
          <Text style={styles.logo}>Rancheritos</Text>
        </View>

        <View style={styles.mainContent}>
          <View style={styles.txtContainer}>
            <LinearGradient colors={["#ff9a9e", "#ffc79a"]} style={styles.icon}>
              <Ionicons
                name="business"
                size={50}
                color="#fff"
                style={styles.iconInner}
              />
            </LinearGradient>
            <Text style={styles.title}>¿Quiénes somos?</Text>
            <View style={styles.lineaColor} />
            <Text style={styles.subtitle}>
              Somos Rancheritos Tech, una empresa dedicada al desarrollo de
              software y a la implementación de Tecnologías de la Información
              (TICs) para grandes y medianas empresas.
            </Text>
          </View>

          <View style={styles.txtContainer}>
            <LinearGradient colors={["#a1c4fd", "#9edbf7"]} style={styles.icon}>
              <Ionicons
                name="ribbon"
                size={50}
                color="#fff"
                style={styles.iconInner}
              />
            </LinearGradient>
            <Text style={styles.title}>Misión</Text>
            <View style={styles.lineaColor2} />
            <Text style={styles.subtitle}>
              Crear soluciones de software innovadoras y accesibles que impulsen
              el crecimiento y la eficiencia de nuestros clientes.
            </Text>
          </View>

          <View style={styles.txtContainer}>
            <LinearGradient colors={["#fbc2eb", "#c7a6ee"]} style={styles.icon}>
              <Ionicons
                name="rocket"
                size={50}
                color="#fff"
                style={styles.iconInner}
              />
            </LinearGradient>
            <Text style={styles.title}>Visión</Text>
            <View style={styles.lineaColor3} />
            <Text style={styles.subtitle}>
              Ser reconocidos como una empresa líder en el desarrollo de
              soluciones tecnológicas innovadoras, impulsando el crecimiento de
              nuestros clientes a través de software eficiente y de alta
              calidad.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  headerBackground: {
    position: "absolute",
    top: -50,
    left: -200,
    right: 0,
    height: "60%",
    width: "200%",
    borderBottomLeftRadius: 500,
    borderBottomRightRadius: 500,
  },
  scrollView: {
    flex: 1,
  },
  header2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 2,
    color: "#fff",
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  menuButton: {
    padding: 10,
  },
  menuIcon: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
  },
  mainContent: {
    padding: 20,
  },
  txtContainer: {
    margin: 5,
    marginTop: 10,
    marginBottom: 10,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 30,
    shadowColor: "#c4c4c4",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  icon: {
    marginBottom: 10,
    borderRadius: 70,
    padding: 13,
    maxWidth: 80,
  },
  iconInner: {
    alignSelf: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 30,
    marginVertical: 10,
    color: "#616161",
  },
  lineaColor: {
    height: 3,
    width: "45%",
    backgroundColor: "#ff9a9e",
    marginBottom: 10,
  },
  lineaColor2: {
    height: 3,
    width: "45%",
    backgroundColor: "#a1c4fd",
    marginBottom: 10,
  },
  lineaColor3: {
    height: 3,
    width: "45%",
    backgroundColor: "#fbc2eb",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#999",
    marginVertical: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginBottom: 20,
    marginTop: 30,
    justifyContent: "center",
  },
  buttonPrimary: {
    backgroundColor: "#f0927b",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginRight: 10,
    width: 180,
    alignItems: "center",
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
    alignItems: "center",
  },
  buttonTextSecondary: {
    color: "#999",
    fontWeight: "bold",
    fontSize: 16,
    textAlignVertical: "center",
    margin: "auto",
  },
});

export default HomeScreen;
