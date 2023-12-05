import React, {useState} from 'react';

import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Button, Image } from 'react-native';

import { Camera, CameraType } from 'expo-camera';

const Stack = createNativeStackNavigator();

const flipIcon = require('../../assets/Flip.png'); //constante voor foto



export default function Posting({navigation}) {

  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) return (<Text>No permissions available</Text>)

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Image
              style={styles.flipIcon}
              source={flipIcon}
            />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    width: "100%"
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'top',
  },
  button: {
    position: 'absolute',
    top: 676,
    left: 24,
    padding: 20,
    backgroundColor:'blue',
    borderRadius: 50,
  },
  flipIcon: {
    width: 18,
    height: 18
  }
})
