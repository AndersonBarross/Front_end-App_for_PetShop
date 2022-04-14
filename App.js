import React from 'react';
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import Carrinho from './src/telas/Carrinho';
import Servicos from './src/telas/Servicos';
import { Text, View,
} from 'react-native';
import Rotas from './src/Rotas';
import TelaPadrao from './src/componentes/TelaPadrao';

const App = () => {
  return (
    <TelaPadrao>
    <Rotas />
    </TelaPadrao>
    

);
};
export default App;
