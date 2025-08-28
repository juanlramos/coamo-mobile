import { Text, View } from "react-native";
import { colors } from "../../themes/colors";

export const ListagemPessoa = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary,
      }}
    >
      <Text>Tela de Listagem de Pessoas</Text>
    </View>
  );
}
