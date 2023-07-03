import React from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './styles';
import { theme } from '../../constants';
import Bolilla from './bolilla';

const Cartilla = ({ data, onSelectItem, extraData, numColumns, heightCartilla, widthBolilla }) => {
  const renderItem = ({ item }) => {
    const sytleBolilla = {
      backgroundColor: theme.backgroundColors.bolillaNoSelect,
      fontSize: theme.fontSizes.bolillaNoSelect,
      textColor: theme.colors.bolillaNoSelect,
      press: onSelectItem,
    };

    if (extraData.find((x) => x === item.value) !== undefined) {
      sytleBolilla.backgroundColor = theme.backgroundColors.bolillaSelect;
      sytleBolilla.fontSize = theme.fontSizes.bolillaSelect;
      sytleBolilla.textColor = theme.colors.bolillaSelect;
      sytleBolilla.press = () => {};
    }

    return (
      <Bolilla
        item={item}
        colorfondo={sytleBolilla.backgroundColor}
        size={sytleBolilla.fontSize}
        textcolor={sytleBolilla.textColor}
        onSelectItem={sytleBolilla.press}
        widthBolilla={widthBolilla}
      />
    );
  };

  const keyExtractor = (item) => item.value;

  return (
    <View style={[styles.cartilla, { height: heightCartilla }]}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        extraData={extraData}
        numColumns={numColumns}
      />
    </View>
  );
};

export default Cartilla;
