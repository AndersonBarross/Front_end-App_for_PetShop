import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Carrinho from "./telas/Carrinho";
import Servicos from "./telas/Servicos";
import { cores } from "./estilos";

const Tab =  createBottomTabNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: cores.roxo,
                    inativeTintColor: cores.claro,
    // para alterar a cor do background faca a proxima linha:
                    activeBackgroundColor: cores.roxo,
                    inactiveBackgroundColor: cores.laranja,
                    style: {
                        height: 70,
                    },
                    labelStyle: {
                        width: '100%',
                        flex:1,
                        fontWeight: 'bold',
                        fontSize: 16,
                        lineHeight: 21,
                        marginTop: 3,
                        paddingTop: 21,
                        backgroundColor: cores.laranja,
                    },
                    keyboardHidesTabBar: true,  
                  }}
            >
                <Tab.Screen name = "Serviços" component={Servicos} />
                <Tab.Screen name = "Carrinho" component={Carrinho} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
// na linha XX criaremos uma linha que irá acompanhar a rota escolhida... faremos com que o label ocupe quase todo o tamanho da tab
// e o pequeno espaço que sobrará  será nossa linha 