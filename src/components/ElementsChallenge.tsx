import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ElementsChallenge = ({ elements, onNewElements, onGoBack }: { elements: string[]; onNewElements: () => void; onGoBack: () => void }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Use esses elementos na história:</Text>
      {elements.map((element, index) => (
        <Text key={index} style={styles.element}>{`🔹 ${element}`}</Text>
      ))}

      <TouchableOpacity style={styles.button} onPress={onNewElements}>
        <Text style={styles.buttonText}>Gerar Novos Elementos</Text>
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
    backgroundColor: "#d1e7dd",
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
    marginBottom: 15,
  },
  element: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#007bff",
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

export default ElementsChallenge;
