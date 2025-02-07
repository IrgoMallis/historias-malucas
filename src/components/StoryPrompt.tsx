import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const StoryPrompt = ({ prompt, onNewPrompt, onGoBack }: { prompt: string; onNewPrompt: () => void; onGoBack: () => void }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicie sua História:</Text>
      <Text style={styles.text}>{prompt}</Text>

      <TouchableOpacity style={styles.button} onPress={onNewPrompt}>
        <Text style={styles.buttonText}>Gerar Nova Frase</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
        <Text style={styles.buttonText}>🔙 Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#ffeb99",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    elevation: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#ff8c00",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: "#d9534f",
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default StoryPrompt;
