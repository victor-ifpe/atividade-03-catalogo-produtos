import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';

export default function TelaExplorarProdutos() {
    return (
        <ScrollView>
            <View style={styles.container}>

              {/* Bloco 1*/}
              <View>

                <View>

                </View>

              </View>



                <Text>Tela Explorar Produtos</Text>

                <StatusBar style="auto" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});