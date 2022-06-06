import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native"
import { useState } from "react"

import { HomeProps } from "../App"
import { calculateAllMeasures } from "../utils/calculate_all"

import { Data } from "./Data"
import { Header } from "./Header"
import { useHistory } from "../contexts/HistoryContext"

export function Home({ navigation }: HomeProps) {
  const { setData } = useHistory()

  const [show, setShow] = useState(false)
  const [rawData, setRawData] = useState("")

  const [desvio, setDesvio] = useState(0)
  const [mediana, setMediana] = useState(0)
  const [average, setAverage] = useState(0)
  const [variancia, setVariancia] = useState(0)
  const [amplitude, setAmplitude] = useState(0)
  const [modality, setModality] = useState("")

  async function handleClick() {
    if (rawData.length === 0) return

    setShow(true)

    const numbers = rawData
      .split(" ")
      .map(value => Number(value))
      .filter(Number)

    const { mod, med, ave, vari, amp, desv } = calculateAllMeasures(numbers)

    setModality(mod)
    setMediana(med)
    setAverage(ave)
    setVariancia(vari)
    setAmplitude(amp)
    setDesvio(desv)

    await setData(numbers)
  }

  function goToHistory() {
    navigation.navigate("Histórico")
  }

  return (
    <View style={styles.container}>
      <Header goToHistory={goToHistory} />

      <View style={styles.main}>
        <TextInput
          style={styles.input}
          editable
          onChangeText={text => setRawData(text)}
          placeholder="Insira os valores separados por um espaço"
        />
        <TouchableOpacity style={styles.button} onPress={handleClick}>
          <Text style={styles.btnText}>CALCULAR</Text>
        </TouchableOpacity>
      </View>

      {show && (
        <Data
          amplitude={amplitude}
          average={average}
          mediana={mediana}
          modality={modality}
          variancia={variancia}
          desvio={desvio}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f2"
    // paddingTop: StatusBar.currentHeight
  },
  main: {
    margin: 10
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    padding: 10,
    width: "100%"
  },
  button: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "#44475a"
  },
  btnText: {
    color: "#f8f8f2",
    fontWeight: "bold"
  }
})
