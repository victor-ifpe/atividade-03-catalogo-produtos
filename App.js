import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import TelaDetalhesProduto from './src/telas/TelaDetalhesProduto';
import TelaExplorarProdutos from './src/telas/TelaExplorarProdutos';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaExplorarProdutos">

        <Stack.Screen
          name="TelaExplorarProdutos"
          component={TelaExplorarProdutos}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="TelaDetalhesProduto"
          component={TelaDetalhesProduto}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>

  );
}