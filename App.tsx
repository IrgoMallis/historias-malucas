import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import GameModeSelection from "./src/components/GameModeSelection";
import StoryPrompt from "./src/components/StoryPrompt";
import ElementsChallenge from "./src/components/ElementsChallenge";

const storyPrompts = [
  "Era uma vez em um castelo assombrado...",
  "Em uma floresta distante, algo mágico aconteceu...",
  "No espaço sideral, um astronauta encontrou uma mensagem misteriosa...",
  "No fundo do mar, um peixe falante revelou um segredo...",
  "Um dia, um cachorro descobriu que sabia falar...",
  "A campainha tocou e, quando abriram a porta, não havia ninguém... apenas um bilhete misterioso.",
];

const elementsList = [
  ["Um dragão", "Uma chave dourada", "Uma montanha misteriosa", "Um relógio quebrado"],
  ["Um mago", "Uma poção mágica", "Uma floresta escura", "Uma coruja falante"],
  ["Um pirata", "Um mapa do tesouro", "Uma ilha secreta", "Uma tempestade inesperada"],
];

const App = () => {
  const [gameMode, setGameMode] = useState<string | null>(null);
  const [currentPrompt, setCurrentPrompt] = useState(storyPrompts[0]);
  const [currentElements, setCurrentElements] = useState(elementsList[0]);

  const generateNewPrompt = () => {
    const randomIndex = Math.floor(Math.random() * storyPrompts.length);
    setCurrentPrompt(storyPrompts[randomIndex]);
  };

  const generateNewElements = () => {
    const randomIndex = Math.floor(Math.random() * elementsList.length);
    setCurrentElements(elementsList[randomIndex]);
  };

  return (
    <View style={styles.container}>
      {gameMode === null && <GameModeSelection onSelectMode={setGameMode} />}
      {gameMode === "story" && <StoryPrompt prompt={currentPrompt} onNewPrompt={generateNewPrompt} onGoBack={() => setGameMode(null)} />}
      {gameMode === "elements" && <ElementsChallenge elements={currentElements} onNewElements={generateNewElements} onGoBack={() => setGameMode(null)} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
});

export default App;
