import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform, Text } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { LinearGradient } from "expo-linear-gradient";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <LinearGradient
          colors={["#ffa99a", "#ffc79a"]}
          style={styles.headerBackground}
        >
          <Ionicons
            size={310}
            name="terminal-outline"
            style={styles.headerImage}
          />
        </LinearGradient>
      }
    >
      <Text style={styles.title}>Productos y Servicios</Text>

      <Text style={styles.subtitle}>Aplicaciones Móviles</Text>

      <LinearGradient colors={["#4facfe", "#00f2fe"]} style={styles.icon}>
        <Ionicons size={50} name="phone-portrait" style={styles.iconContent} />
      </LinearGradient>
      <Text style={styles.description}>
        Desarrollo de aplicaciones móviles personalizadas para iOS y Android,
        utilizando tecnologías como React Native y Ionic para crear experiencias
        fluidas y escalables.
      </Text>

      <Text style={styles.subtitle}>Aplicaciones Web</Text>

      <LinearGradient colors={["#43e97b", "#38f9d7"]} style={styles.icon}>
        <Ionicons size={50} name="desktop" style={styles.iconContent} />
      </LinearGradient>
      <Text style={styles.description}>
        Construcción de aplicaciones web interactivas y responsivas, desde
        sistemas de gestión hasta plataformas de comercio electrónico, con
        frameworks como Angular, React o Vue.js.
      </Text>

      <Text style={styles.subtitle}>Bases de Datos</Text>

      <LinearGradient colors={["#fa709a", "#fee140"]} style={styles.icon}>
        <Ionicons size={50} name="server" style={styles.iconContent} />
      </LinearGradient>
      <Text style={styles.description}>
        Implementación y mantenimiento de bases de datos robustas y seguras,
        tanto relacionales como no relacionales, optimizando el rendimiento y la
        escalabilidad de sus sistemas.
      </Text>

      <Text style={styles.subtitle}>Mantenimiento de Software</Text>

      <LinearGradient colors={["#fbc2eb", "#a6c1ee"]} style={styles.icon}>
        <Ionicons size={50} name="construct" style={styles.iconContent} />
      </LinearGradient>
      <Text style={styles.description}>
        Servicios de actualización, optimización y resolución de errores en sus
        sistemas actuales, asegurando la continuidad operativa y mejorando el
        rendimiento del software.
      </Text>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#fff",
    bottom: -110,
    right: -40,
    position: "absolute",
  },
  headerBackground: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 30,
    marginVertical: 10,
    color: "#616161",
    alignSelf: "center",
  },
  subtitle: {
    fontSize: 20,
    color: "#747474",
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: "#999",
    marginVertical: 10,
    textAlign: "center",
    marginBottom: 30,
  },
  icon: {
    alignSelf: "center",
    borderRadius: 70,
    padding: 10,
  },
  iconContent: {
    color: "#fff",
    textAlign: "center",
  },
});
