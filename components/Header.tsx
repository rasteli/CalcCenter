import { View, StyleSheet, Text } from "react-native"
import { ThreeDotMenu } from "./Menu"

interface HeaderProps {
  goToHistory(): void
}

export function Header({ goToHistory }: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MEDIDAS DE TENDÊNCIA CENTRAL</Text>
      <ThreeDotMenu goToHistory={goToHistory} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#282a36",

    padding: 20,
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    color: "#f8f8f2",
    fontWeight: "bold",
    fontSize: 18
  }
})
