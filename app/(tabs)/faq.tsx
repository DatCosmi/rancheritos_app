import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";

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
          colors={["#ff9a9e", "#ffc79a"]}
          style={styles.headerBackground}
        >
          <Ionicons size={310} name="help-circle" style={styles.headerImage} />
        </LinearGradient>
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.title}>Preguntas Frecuentes</ThemedText>
      </ThemedView>

      <Collapsible title="¿Qué tipo de servicios ofrece su empresa?">
        <ThemedText style={styles.description}>
          Ofrecemos desarrollo de aplicaciones móviles, aplicaciones web,
          soluciones de bases de datos, y mantenimiento de software. Cada uno de
          nuestros servicios está diseñado para cubrir las necesidades
          específicas de nuestros clientes, garantizando productos de alta
          calidad.
        </ThemedText>
      </Collapsible>

      <Collapsible title="¿Cuál es su proceso de desarrollo de software?">
        <ThemedText style={styles.description}>
          Seguimos un enfoque ágil para el desarrollo de software. Esto incluye
          la planificación, diseño, desarrollo, pruebas, implementación y
          mantenimiento. Nos enfocamos en la comunicación constante con el
          cliente y la mejora continua para entregar productos que cumplan con
          los requisitos y expectativas.
        </ThemedText>
      </Collapsible>

      <Collapsible title="¿Qué lenguajes de programación y tecnologías utilizan?">
        <ThemedText style={styles.description}>
          Utilizamos una amplia gama de tecnologías, como JavaScript (React
          Native, Angular, Vue.js), Python, Node.js, y bases de datos como
          Firebase, MySQL y MongoDB. Nos adaptamos a las necesidades específicas
          de cada proyecto para elegir la mejor tecnología.
        </ThemedText>
      </Collapsible>

      <Collapsible title="¿Cómo garantizan la calidad del software?">
        <ThemedText style={styles.description}>
          Implementamos pruebas unitarias, pruebas de integración y revisiones
          de código para asegurar que todo el software funcione correctamente.
          Además, realizamos pruebas de aceptación del usuario y brindamos
          mantenimiento post-lanzamiento para corregir cualquier error que
          surja.
        </ThemedText>
      </Collapsible>

      <Collapsible title="¿Cuál es el costo de desarrollar una aplicación o sitio web?">
        <ThemedText style={styles.description}>
          El costo varía según la complejidad y el alcance del proyecto.
          Ofrecemos presupuestos personalizados después de realizar una
          evaluación detallada de las necesidades del cliente. No dudes en
          contactarnos para recibir una cotización gratuita.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#fff",
    bottom: -90,
    left: -35,
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
  },
  description: {
    fontSize: 14,
    color: "#656565",
    marginVertical: 10,
    marginBottom: 30,
  },
});
