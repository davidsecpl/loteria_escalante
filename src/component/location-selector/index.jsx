import { View, Text, Button, Image, Alert, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useEffect, useState } from 'react';
import IonIcons from '@expo/vector-icons/Ionicons';
import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
import MapPreview from '../map-preview';
import { URL_GEOCODING } from '../../utils/maps';

const LocationSelector = ({ onLocation }) => {
 
  const [pickedLocation, setPickeLocation] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permisos insuficientes', 'Se necesita autorización para obtener la ubicación', [
        { text: 'OK' },
      ]);
      return false;
    }
    return true;
  };

  const onHandlerLocation = async () => {
    const isLocationPermission = await verifyPermissions();
    if (!isLocationPermission) return;
    const location = await getCurrentPositionAsync({
      timeout: 5000,
    });
    const { latitude, longitude } = location.coords;
    setPickeLocation({ lat: latitude, lng: longitude });
    

    const response = await fetch(URL_GEOCODING(latitude, longitude));
    const data = await response.json();
    if (!data.results) return Alert.alert('No se ha podido encontrar la dirección del lugar');
    const direccion = data.results[0].formatted_address;
    
    onLocation({ lat: latitude, lng: longitude, address: direccion });    
  };

  return (
    <View style={styles.container}>
      <MapPreview location={pickedLocation} style={styles.preview}>
        <TouchableOpacity style={styles.pressable} onPress={onHandlerLocation}>
          <Text>Ubícame</Text>
          <IonIcons style={styles.icon} name="md-location" size={26} color="#F9C784" />
        </TouchableOpacity>
      </MapPreview>
    </View>
  );
};
export default LocationSelector;
