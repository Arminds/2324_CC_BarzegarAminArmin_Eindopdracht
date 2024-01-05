import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import useNetwork from '../data/Knitting';
import { Formik } from 'formik';

import * as authService from '../components/authService';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { data, isLoading } = useNetwork();

  const handleLogin = () => {
    console.log('Entered Credentials:', { username, password });

    const user = data?.Users.find(
      (user) => user.Username === username && user.Password === password
    );

    if (user) {
      authService.login(username, password);
      onLogin();
    } else {
      console.error('Invalid username or password!');
      setError("Invalid username or password!");
    }
  };

  useEffect(() => {
    if (formSubmitted && username !== '' && password !== '') {
      handleLogin();
      setFormSubmitted(false); // Reset the formSubmitted state
    }
  }, [formSubmitted, username, password]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Be a part of the first social media knitting club</Text>
      <Text style={styles.body}>Sign in to your account</Text>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => {
          setUsername(values.username);
          setPassword(values.password);
          setFormSubmitted(true); // Set formSubmitted to true on form submission
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
    marginBottom: 240,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 6,
    width: 320,
  },
  body: {
    fontSize: 16,
    marginBottom: 48,
    width: 320,
  },
  textInputContainer: {
    marginBottom: 16,
    width: 340,
  },
  textInput: {
    height: 40,
    backgroundColor:'#F1F1F1',
    borderWidth: 0,
    paddingLeft: 24,
    borderRadius: 24,
  },
  buttonContainer: {
    width: 340,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: 'blue',
  },
  errorText: {
    color: 'red',
    marginTop: 16,
  },
});

export default Login;
