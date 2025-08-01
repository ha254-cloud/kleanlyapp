import { registerRootComponent } from 'expo';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>KLEANLY</Text>
      <Text style={styles.subtitle}>Professional Laundry Service</Text>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => Alert.alert('KLEANLY Services', 'Choose your service:\n\n🧺 Wash & Fold\n👔 Dry Cleaning\n👟 Shoe Care\n🚚 Pickup & Delivery')}
      >
        <Text style={styles.buttonText}>Start Service</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.button, styles.secondaryButton]} 
        onPress={() => Alert.alert('Login', 'Login feature coming soon!')}
      >
        <Text style={[styles.buttonText, styles.secondaryButtonText]}>Login</Text>
      </TouchableOpacity>
      
      <Text style={styles.info}>🧺 Laundry • 👔 Dry Cleaning • 👟 Shoe Care</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E40AF',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#E5E7EB',
    marginBottom: 32,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
    minWidth: 200,
  },
  buttonText: {
    color: '#1E40AF',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  secondaryButtonText: {
    color: '#FFFFFF',
  },
  info: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 20,
    textAlign: 'center',
  },
});

registerRootComponent(App);
export default App;
