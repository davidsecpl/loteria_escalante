export const aleatorio = {
  generate: (min, max, cant) => {
    let list = [];
    do{
      let num = Math.floor(Math.random()*(max-min)+1);
      if(list.find(x => x === num) === undefined ){
        list.push(num);
      }
    }while(list.length < cant);
    return list;
  }
};