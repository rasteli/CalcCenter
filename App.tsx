import { StatusBar } from "expo-status-bar"
import { MenuProvider } from "react-native-popup-menu"
import { NavigationContainer } from "@react-navigation/native"
import {
  createNativeStackNavigator,
  NativeStackScreenProps
} from "@react-navigation/native-stack"

import { Home } from "./components/Home"
import { History } from "./components/History"
import { Calculation } from "./components/Calculation"
import { HistoryProvider } from "./contexts/HistoryContext"
import { ClearHistoryButton } from "./components/ClearHistoryButton"

type RootStackParamList = {
  Home: undefined
  Histórico: undefined
  Calculation: { numbers: number[] }
}

const Stack = createNativeStackNavigator<RootStackParamList>()
export type HomeProps = NativeStackScreenProps<RootStackParamList, "Home">
export type HistoryProps = NativeStackScreenProps<
  RootStackParamList,
  "Histórico"
>
export type CalculationProps = NativeStackScreenProps<
  RootStackParamList,
  "Calculation"
>

export default function App() {
  return (
    <HistoryProvider>
      <MenuProvider>
        <StatusBar style="auto" translucent={false} />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Histórico"
              component={History}
              options={{
                headerRight: ClearHistoryButton
              }}
            />
            <Stack.Screen name="Calculation" component={Calculation} />
          </Stack.Navigator>
        </NavigationContainer>
      </MenuProvider>
    </HistoryProvider>
  )
}
