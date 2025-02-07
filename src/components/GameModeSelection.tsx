import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const GameModeSelection = ({ onSelectMode }: { onSelectMode: (mode: string) => void }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha um Modo de Jogo:</Text>

      <TouchableOpacity style={styles.button} onPress={() => onSelectMode("story")}>
        <Text style={styles.buttonText}>História Maluca 📖</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => onSelectMode("elements")}>
        <Text style={styles.buttonText}>Desafio dos 4 Elementos 🎭</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  button: {
    backgroundColor: "#ff8c00",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default GameModeSelection;
