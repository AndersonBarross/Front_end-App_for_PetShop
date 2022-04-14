import React from 'react';
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import estilosGlobal, { cores } from '../../estilos';
import estilos from './estilos';

export default function TelaPadrao({ children }) {
  return ( 
  <>
  
  <SafeAreaView style={estilos.ajusteTela}>
  <StatusBar backgroundColor={cores.roxo} />
  <KeyboardAvoidingView 
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={estilosGlobal.preencher}
    >
      {children}
    </KeyboardAvoidingView>
  </SafeAreaView>
  <SafeAreaView style={estilos.ajusteTelaBaixo} />
  
  </>
  )
}
// criaremos uma segunda safeareaview para a parte de baixo bottom do app/celular