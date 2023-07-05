import { View, Text, Image, Button, Alert } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { requestCameraPermissionsAsync, launchCameraAsync } from 'expo-image-picker';
import IonIcons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

const ImageSelector = ({ onImage }) => {
  const [pickerUrl, setPickerUrl] = useState(null);

  const verifyPermissions = async () => {
    const { status } = await requestCameraPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permiso denegado', 'Se necesita autorización para usar la camara', [
        { text: 'Ok' },
      ]);
      return false;
    }
    return true;
  };

  const onHandlerTakeImage = async () => {
    const isCameraPermission = await verifyPermissions();

    if (!isCameraPermission) return;

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.7,
    });

    console.warn('image', image);
    setPickerUrl(image.uri);
    onImage(image.uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickerUrl ? (
          <TouchableOpacity style={styles.pressable} onPress={onHandlerTakeImage}>
            <Text>Foto</Text>
            <IonIcons style={styles.icon} name="md-camera" size={26} color="#F9C784" />
          </TouchableOpacity>
        ) : (
          <Image style={styles.image} source={{ uri: pickerUrl }} />
        )}
      </View>
    </View>
  );
};

export default ImageSelector;
