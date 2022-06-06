import { ScrollView, TouchableOpacity, Text, StyleSheet } from "react-native"

import { HistoryProps } from "../App"
import { useHistory } from "../contexts/HistoryContext"

export function History({ navigation }: HistoryProps) {
  const { calculations } = useHistory()

  return (
    <ScrollView>
      {calculations.map((calc, index) => (
        <TouchableOpacity
          key={index}
          style={styles.calculation}
          onPress={() =>
            navigation.navigate("Calculation", { numbers: calc.numbers })
          }
        >
          <Text style={styles.numbers}>{calc.numbers.join(" ")}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  calculation: {
    margin: 20,
    padding: 20,
    borderRadius: 18,
    backgroundColor: "#fff"
  },
  numbers: {
    fontSize: 22
  }
})
