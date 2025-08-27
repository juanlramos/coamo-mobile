import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../themes/colors";
import { ListagemPessoa, FormPessoa } from "../screens";

const Tab = createBottomTabNavigator();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="List"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary, // Cor para o ícone ativo
          tabBarInactiveTintColor: colors.secondary, // Cor para o ícone inativo
          //fundo da barra de navegação
          tabBarStyle: {
            backgroundColor: colors.background, // Cor de fundo da navbar
            borderTopWidth: 0, // Remove a linha da borda superior
          },
        }}
      >
        <Tab.Screen
          name="List"
          component={ListagemPessoa}
          options={{
            tabBarLabel: "Listagem",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="list" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Form"
          component={FormPessoa}
          options={{
            tabBarLabel: "Cadastrar",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
