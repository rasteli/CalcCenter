import { ScrollView, Text, StyleSheet } from "react-native"

interface DataProps {
  amplitude: number
  average: number
  modality: string
  mediana: number
  variancia: number
  desvio: number
}

import Average from "../assets/ave.svg"
import Amp from "../assets/amp.svg"
import Vari from "../assets/vari.svg"
import Desvio from "../assets/desvio.svg"

export function Data({
  amplitude,
  average,
  modality,
  mediana,
  variancia,
  desvio
}: DataProps) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Amplitude</Text>
      <Amp style={styles.formula} />
      <Text style={styles.value}>{amplitude}</Text>

      <Text style={styles.title}>Média</Text>
      <Average style={styles.formula} />
      <Text style={styles.value}>{average}</Text>

      <Text style={styles.title}>Variância</Text>
      <Vari style={styles.formula} />
      <Text style={styles.value}>{variancia}</Text>

      <Text style={styles.title}>Desvio Padrão</Text>
      <Desvio style={styles.formula} />
      <Text style={styles.value}>{desvio}</Text>

      <Text style={styles.title}>Moda</Text>
      <Text style={styles.value}>{modality}</Text>

      <Text style={styles.title}>Mediana</Text>
      <Text style={styles.value}>{mediana}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 10,
    paddingTop: 0,
    backgroundColor: "#fff"
  },
  title: {
    fontWeight: "bold",
    color: "#282a36",
    fontSize: 50
  },
  value: {
    fontSize: 22,
    fontWeight: "bold",

    padding: 5,
    marginBottom: 15,

    backgroundColor: "#ddd",
    alignSelf: "flex-end"
  },
  formula: {
    marginBottom: 20
  }
})
