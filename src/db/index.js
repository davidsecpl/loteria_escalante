import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('loteria.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY NOT NULL, imagen TEXT NOT NULL, address TEXT NOT NULL, coords TEXT NOT NULL, nombres TEXT NOT NULL)",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const insertUsuario = (imagen, address, coords, nombres) => { 
  
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO usuario (imagen, address, coords, nombres) VALUES (?,?,?,?)",
        [imagen, address, JSON.stringify(coords), nombres],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const selectUsuario = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM usuario',
        [],
        (_, result) => {
          
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};
