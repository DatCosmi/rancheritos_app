import ParallaxScrollView from "@/components/ParallaxScrollView";
import TerminosCondiciones from "@/components/TerminosCondiciones";
import Ionicons from "@expo/vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect } from "react";
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

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleNext = () => {
    if (!termsAccepted) {
      Alert.alert(
        "Aviso",
        "Debes aceptar los términos y condiciones para continuar."
      );
      return;
    }
    console.log("Next button pressed");
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleAccept = () => {
    setTermsAccepted(true); // Marcar el checkbox como aceptado
    toggleModal(); // Cerrar el modal al aceptar
    console.log("Aceptado");
  };

  const handleReject = () => {
    toggleModal(); // Cerrar el modal al rechazar
    console.log("Rechazado");
  };

  const openTermsModal = () => setIsModalVisible(true);
  const closeTermsModal = () => setIsModalVisible(false);

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
    marginLeft: 10,
  },
  buttonText: { color: "#ff8e4c", fontWeight: "bold" },
  buttonText2: { color: "#fff", fontWeight: "bold" },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: { backgroundColor: "white", padding: 20, borderRadius: 10 },
});

export default PersonalInfoForm;
