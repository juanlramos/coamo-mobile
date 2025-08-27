import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Text, View } from "react-native";
import { colors } from "../../themes/colors";

export function ListagemPessoa() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.secondary,
      }}
    >
      <Text>Tela de Listagem de Pessoas</Text>
    </View>
  );
}
