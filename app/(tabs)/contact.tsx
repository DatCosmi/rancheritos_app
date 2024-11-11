import ParallaxScrollView from "@/components/ParallaxScrollView";
import TerminosCondiciones from "@/components/TerminosCondiciones";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect } from "react";
import * as LocalAuthentication from "expo-local-authentication";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ScrollView,
  Modal,
  Alert,
} from "react-native";

const PersonalInfoForm = () => {
  const [name, setName] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setKeyboardOpen(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardOpen(false)
    );
    const testNetwork = async () => {
      try {
        const response = await fetch("https://backend-integradora.vercel.app/api/contactus");
        const data = await response.json();
        console.log(data);  // Ver los datos en la consola
      } catch (error) {
        console.error("Error de red:", error);
      }
    };
    testNetwork();
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };

  }, []);

  const authenticate = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (!hasHardware || !isEnrolled) {
      Alert.alert("Autenticación no disponible", "Este dispositivo no soporta autenticación biométrica.");
      return false;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Confirma tu identidad",
    });

    return result.success;
  };

  const handleNext = async () => {
    if (!termsAccepted) {
      Alert.alert("Aviso", "Debes aceptar los términos y condiciones para continuar.");
      return;
    }

    const isAuthenticated = await authenticate();
    if (isAuthenticated) {
      await submitForm();
    } else {
      Alert.alert("Error de autenticación", "No se pudo verificar la huella digital.");
    }
  };

  const submitForm = async () => {
    const formData = {
      nombre: name,
      apellidos: apellidos,
      correo: email,
      telefono: phone,
      mensaje: message,
    };


    try {
      const response = await fetch("https://backend-integradora.vercel.app/api/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
        Alert.alert("Éxito", "Formulario enviado con éxito");
      } else {
        console.log(result);
        Alert.alert("Error", result.message || "Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error de red al enviar el formulario:", error);
      Alert.alert("Error", "No se pudo enviar el formulario");
    }
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleAccept = () => {
    setTermsAccepted(true);
    toggleModal();
  };

  const handleReject = () => {
    toggleModal();
  };

  const openTermsModal = () => setIsModalVisible(true);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
        headerImage={
          <LinearGradient
            colors={["#fb8d5e", "#ffc05b"]}
            style={styles.headerBackground}
          >
            <Ionicons
              size={260}
              name="chatbox-ellipses-outline"
              style={styles.headerImage}
            />
          </LinearGradient>
        }
      >
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Contáctanos</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Apellidos"
            value={apellidos}
            onChangeText={setApellidos}
          />
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Número de teléfono"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.messageInput}
            placeholder="Mensaje"
            value={message}
            onChangeText={setMessage}
            multiline
          />

          <View style={styles.termsContainer}>
            <TouchableOpacity onPress={openTermsModal}>
              <Text style={styles.termsText}>Términos y condiciones</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => setTermsAccepted(!termsAccepted)}
            >
              <Ionicons
                name={termsAccepted ? "checkbox" : "square-outline"}
                size={24}
                color="#ff8e4c"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={() => { }}>
              <Text style={styles.buttonText}>CANCELAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
              <Text style={styles.buttonText2}>ENVIAR</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ParallaxScrollView>

      <Modal visible={isModalVisible} animationType="slide" transparent>
        <TerminosCondiciones onAccept={handleAccept} onReject={handleReject} />
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "white" },
  headerImage: { color: "#fff", bottom: -50, position: "absolute" },
  headerBackground: { flex: 1 },
  title: { fontSize: 30, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
  messageInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    height: 100,
    textAlignVertical: "top",
    borderRadius: 4,
  },
  termsContainer: { flexDirection: "row", alignItems: "center", marginTop: 10 },
  termsText: {
    color: "#ff8e4c",
    textDecorationLine: "underline",
    marginRight: 10,
  },
  checkbox: { marginLeft: "auto" },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  cancelButton: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 4,
    flex: 1,
    marginRight: 10,
  },
  nextButton: {
    backgroundColor: "#ff8e4c",
    padding: 10,
    borderRadius: 4,
    flex: 1,
  },
  buttonText: { color: "#333", textAlign: "center" },
  buttonText2: { color: "white", textAlign: "center" },
});

export default PersonalInfoForm;
