import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';


import * as authService from '../components/authService';

import useNetwork from '../data/Knitting';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(null);

  const { data, isLoading } = useNetwork();

  const handleLogin = () => {
    // Check if the provided username and password match any user in the API response
    console.log('Entered Credentials:', { username, password });

    const user = data?.Users.find(
      (user) => user.Username === username && user.Password === password
    );

    if (user) {
      // Successful login, call onLogin to update the state in App.js
      authService.login(username, password);
      onLogin();
    } else {
      console.error('Invalid username or password');
      setError("Invalid username or password");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in</Text>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => {
          setUsername(values.username); // Update the state with the current values
          setPassword(values.password);
          handleLogin(); // Call handleLogin after updating the state
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Username"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="Login"
                onPress={handleSubmit}
                color="#ffffff"
                disabled={isLoading}
              />
            </View>
            {error && <Text style={styles.errorText}>{error}</Text>}
          </View>
        )}
      </Formik>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
  textInputContainer: {
    marginBottom: 16,
    width: 300,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 16,
    width: 300,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'blue',
  },
  errorText: {
    color: 'red',
    marginTop: 16,
  },
});

export default Login;
