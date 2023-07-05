import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { documentDirectory, copyAsync } from 'expo-file-system';

import { ImageSelector, LocationSelector } from '../../../component';

import { theme } from '../../../constants';
import { COLORS } from '../../../constants';
import { styles } from './styles';
import { insertUsuario } from '../../../db';

const Account = ({ navigation }) => {
  const email = useSelector((state) => state.auth.email);

  const [image, setImage] = useState('');
  const [coords, setCoords] = useState(null);
  const [address, setAddress] = useState('Dirección');
  const [nombres, setNombres] = useState('');

  const enableButton = image && nombres && coords && address;

  const getLocation = (location) => {
    setCoords({lat: location.lat, lng: location.lng});
    setAddress(location.address);
  };

  const getImage = (imageUri) => {
    setImage(imageUri);
  };

  const saveImage = async () => {
    const filename = image.split('/').pop();
    const newPath = `${documentDirectory}${filename}`;

    try {
      await copyAsync({
        from: image,
        to: newPath,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onConfirmar = async () => {
    const result = await insertUsuario(image, address, coords, nombres);
    saveImage();
    navigation.navigate('loteria');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BIENVENIDO {email}</Text>
      <Text style={styles.subtitle}>Actualice la información de su cuenta</Text>
      <ImageSelector onImage={getImage} />
      <TextInput
        placeholder="Nombre completo"
        style={styles.input}
        placeholderTextColor={COLORS.darkGray}
        autoCapitalize="none"
        onChangeText={(text)=>{setNombres(text)}}
        value={nombres}
      />
      <LocationSelector onLocation={getLocation} />
      <Text style={styles.message}>{address}</Text>
      <Button
        title="Guardar"
        disabled={!enableButton}
        onPress={onConfirmar}
        color={theme.colors.buttonGame}
      />
    </View>
  );
};

export default Account;
