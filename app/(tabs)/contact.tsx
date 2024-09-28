import ParallaxScrollView from "@/components/ParallaxScrollView";
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
} from "react-native";

const PersonalInfoForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [keyboardOpen, setKeyboardOpen] = useState(false);

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
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleNext = () => {
    console.log("Next button pressed");
  };

  const handleCancel = () => {
    console.log("Cancel button pressed");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
        headerImage={
          <LinearGradient
            colors={["#ff9a9e", "#ffc79a"]}
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
            placeholder="Correo"
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
            value={birthDate}
            onChangeText={setBirthDate}
            multiline
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleCancel}
            >
              <Text style={styles.buttonText}>CANCELAR</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
              <Text style={styles.buttonText2}>ENVIAR</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ParallaxScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "white",
  },
  headerImage: {
    color: "#fff",
    bottom: -50,
    left: 0,
    position: "absolute",
  },
  headerBackground: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 30,
    marginVertical: 10,
    color: "#616161",
    marginBottom: 20,
  },
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
    marginBottom: 10,
    borderRadius: 4,
    height: 100,
    textAlignVertical: "top",
  },
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
    alignItems: "center",
  },
  nextButton: {
    backgroundColor: "#ffa16a",
    padding: 10,
    borderRadius: 4,
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffa16a",
    fontWeight: "bold",
  },
  buttonText2: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default PersonalInfoForm;
