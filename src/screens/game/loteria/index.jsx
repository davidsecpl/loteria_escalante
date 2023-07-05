import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { View, Text } from 'react-native';
import { Card, Cartilla, Menu, Header, Message, Title } from '../../../component/index';
import { theme, logo } from '../../../constants';
import { aleatorio } from '../../../utils';
import { styles } from './styles';
import { selectCategory } from '../../../store/actions/index';

const Loteria = () => {
  const [jugada, setJugada] = useState([]);
  const [sorteo, setSorteo] = useState([]);
  const [msgJuego, setMsgJuego] = useState('Selecciona 6 números');
  const [btonJugarDeactivated, setBtonJugarDeactivated] = useState(true);
  const [btonAzarDeactivated, setBtonAzarDeactivated] = useState(false);
  const [msgResultados, setMsgResultados] = useState('Cantidad de aciertos: ');

  const cartilla = [];
  for (let i = 0; i < 48; i++) {
    cartilla.push({ value: i + 1 });
  }

  const onHandlerItem = (item) => {
    if (jugada.length < 6) {
      switch (jugada.length) {
        case 0:
          setMsgJuego('Elige 5 más');
          break;
        case 1:
          setMsgJuego('Elige 4 más');
          break;
        case 2:
          setMsgJuego('Elige 3 más');
          break;
        case 3:
          setMsgJuego('Elige 2 más');
          break;
        case 4:
          setMsgJuego('Elige 1 más');
          break;
        case 5:
          setMsgJuego('¡Juega ya!');
          setBtonJugarDeactivated(false);
          setBtonAzarDeactivated(true);
          break;
        default:
          break;
      }
      setJugada([...jugada, item.value]);
    }
  };

  const onAzar = () => {
    let lista = [];
    if (jugada.length < 6) {
      lista = jugada.concat(aleatorio.generate(1, 48, 6 - jugada.length));
    } else {
      lista = aleatorio.generate(1, 48, 6);
    }
    setJugada(lista);
    setMsgJuego('¡Sortea ya!');
    setBtonJugarDeactivated(false);
    setBtonAzarDeactivated(true);
  };

  const onLimpiar = () => {
    setMsgJuego('Elige 6 números');
    setJugada([]);
    setSorteo([]);
    setMsgResultados('Cantidad de aciertos: ');
    setBtonJugarDeactivated(true);
    setBtonAzarDeactivated(false);
  };

  const onJugar = () => {
    let dataSorteo = [];
    for (let x of aleatorio.generate(1, 48, 6)) {
      dataSorteo.push({ value: x });
    }
    setSorteo(dataSorteo);

    let aciertos = [];
    for (let num of jugada) {
      if (dataSorteo.find((x) => x.value === num) !== undefined) {
        aciertos.push(num);
      }
    }
    setMsgResultados('Cantidad de aciertos: ' + aciertos.length);
  };

  const onSalir = () => {
    // winRender('login');
  };

  // const menuPrincipal = [
  //   {
  //     title: 'DINERO YA!',
  //     handler: () => {},
  //     disabled: false,
  //   },
  //   {
  //     title: '# DE PAGOS',
  //     handler: () => {},
  //     disabled: false,
  //   },
  //   {
  //     title: '? FRECUENTES',
  //     handler: () => {},
  //     disabled: false,
  //   },
  // ];

  const menuGameTop = [
    {
      title: 'Al azar',
      handler: onAzar,
      disabled: btonAzarDeactivated,
    },
    {
      title: 'Limpiar',
      handler: onLimpiar,
      disabled: false,
    },
  ];

  const menuGameFoot = [
    {
      title: '¡Sortear!',
      handler: onJugar,
      disabled: btonJugarDeactivated,
    },
  ];

  return (
    <View style={styles.container}>
      <Header
        title="Loteria ¡DINERO YA!"
        subtitle="Gana hasta $ 1 millón"
        message="Elige 6 números de 48"
        widthLogo={135}
        heightLogo={150}
        urlLogo={logo.game.url}
      />

      <Card style={styles.cardContainer}>
        <Title title="Resultados del sorteo:" />
        <Cartilla
          data={sorteo}
          onSelectItem={() => {}}
          extraData={jugada}
          numColumns={6}
          heightCartilla={41}
          widthBolilla={48}
        />
        <Message msg={msgResultados} />
      </Card>

      <Card style={styles.cardContainer}>
      <Title title="Juega marcando 6 números:" />
        <Menu
          lista={menuGameTop}
          color={theme.colors.buttonGame}
          label={msgJuego}
          widthLabel="50%"
        />
        <Cartilla
          data={cartilla}
          onSelectItem={onHandlerItem}
          extraData={jugada}
          numColumns={8}
          widthBolilla={34}
        />
        <Menu lista={menuGameFoot} color={theme.colors.buttonGame} widthLabel="70%" />
      </Card>
    </View>
  );
};

export default Loteria;
