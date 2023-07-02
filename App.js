import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, Text, Provider as PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Customized React Native Paper UI</Text>
        <TextInput
          label="Username"
          mode="outlined"
          style={styles.input}
          theme={{
            colors: {
              primary: '#FF5722',
              background: '#FFFFFF',
              placeholder: '#888888',
              text: '#333333',
            },
          }}
        />
        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry
          style={styles.input}
          theme={{
            colors: {
              primary: '#FF5722',
              background: '#FFFFFF',
              placeholder: '#888888',
              text: '#333333',
            },
          }}
        />
        <Button mode="contained" style={styles.button} labelStyle={styles.buttonLabel} color="#FF5722">
          Sign In
        </Button>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  input: {
    width: 300,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  button: {
    width: 300,
    backgroundColor: '#FF5722',
  },
  buttonLabel: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default App;
