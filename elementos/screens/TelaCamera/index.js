import React, { useState, useEffect } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Text, TouchableOpacity, View } from "react-native";
import { camerastyle } from './css/Styles';

export default function TelaCamera() {
    
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(CameraType.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

    return (
            <View style={{flex: 1}}>
                <Camera style={camerastyle.camera} type={type}>
                    <View style={camerastyle.buttonContainer}>
                        <TouchableOpacity
                            style={camerastyle.button}
                            onPress={() => {
                            setType(type === CameraType.back ? CameraType.front : CameraType.back);
                            }}>
                            <Text style={camerastyle.text}> Flip </Text>
                        </TouchableOpacity>
                    </View>
                </Camera>
            </View>
    )
}