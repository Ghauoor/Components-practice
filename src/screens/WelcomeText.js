import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WelcomeText = ({ welcomeText, getName, text, textStyle }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.welcomeText, textStyle]}>{welcomeText}</Text>
      <Text style={[styles.nameText, textStyle]}>{getName}</Text>
      <Text style={[styles.learningText, textStyle]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  nameText: {
    fontSize: 18,
    marginBottom: 5,
  },
  learningText: {
    fontSize: 16,
  },
});

export default WelcomeText;
