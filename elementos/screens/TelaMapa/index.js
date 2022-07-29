import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { mapa } from './css/Styles';
import { Marker } from 'react-native-maps';

export default function TelaMapa() {
    return (
      <View style={mapa.container}>
        <MapView style={mapa.map} 
            initialRegion={{
                latitude: -23.54089020554049, 
                longitude: -46.574871928391346,
                latitudeDelta: 0.0022,
                longitudeDelta: 0.0021,
              }}>
            <Marker
                title="Senac Tatuapé"
                coordinate={{
                    latitude: -23.54089020554049, 
                    longitude: -46.574871928391346,
                }}
                description="Escola de TI">
            </Marker>
        </MapView>
      </View>
    );
  }


  