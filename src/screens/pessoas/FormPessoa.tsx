import { Text, View } from "react-native";
import { colors } from "../../themes/colors";

export const FormPessoa = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.primary,
      }}
    >
      <Text>Formulario de criação de pessoa</Text>
    </View>
  );
};
