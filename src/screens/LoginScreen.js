import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "" || password === "") {
      setError("Please enter both username and password");
    } else {
      console.log(
        "Logging in with username:",
        username,
        "and password:",
        password
      );
      setError("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {error !== "" && <Text style={styles.error}>{error}</Text>}
      <Text style={styles.forgotPassword}>Forgot your password?</Text>
      <Text style={styles.signupText}>
        Don't have an account? <Text style={styles.signupLink}>Sign up</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#667eb1",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
    color: "white",
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 16,
    backgroundColor: "white",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#4287f5",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    fontSize: 14,
    marginBottom: 12,
  },
  forgotPassword: {
    color: "white",
    fontSize: 14,
    marginBottom: 12,
  },
  signupText: {
    color: "white",
    fontSize: 14,
  },
  signupLink: {
    color: "#4287f5",
    fontWeight: "bold",
  },
});

export default LoginScreen;
