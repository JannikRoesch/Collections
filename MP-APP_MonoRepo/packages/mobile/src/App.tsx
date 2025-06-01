import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DEFAULT_THEME, formatCurrency, formatDate } from '@mp_app_01/shared';

export default function App() {
  const [count, setCount] = useState(0);
  const today = new Date();

  return (
    <View style={[styles.container, { backgroundColor: DEFAULT_THEME.background }]}>
      <Text style={[styles.title, { color: DEFAULT_THEME.text }]}>
        Expo + React Native + TypeScript
      </Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: DEFAULT_THEME.primary }]}
        onPress={() => setCount((prev) => prev + 1)}
      >
        <Text style={styles.buttonText}>Zähler: {count}</Text>
      </TouchableOpacity>
      <Text style={[styles.text, { color: DEFAULT_THEME.text }]}>
        Beispiel für formatierte Währung: {formatCurrency(1234.56)}
      </Text>
      <Text style={[styles.text, { color: DEFAULT_THEME.text }]}>
        Heutiges Datum: {formatDate(today)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});