import { useState, useEffect } from "react"
import { View } from "react-native"

import { Data } from "./Data"
import { CalculationProps } from "../App"
import { calculateAllMeasures } from "../utils/calculate_all"

export function Calculation({ navigation, route }: CalculationProps) {
  const numbers = route.params.numbers

  const [desvio, setDesvio] = useState(0)
  const [mediana, setMediana] = useState(0)
  const [average, setAverage] = useState(0)
  const [variancia, setVariancia] = useState(0)
  const [amplitude, setAmplitude] = useState(0)
  const [modality, setModality] = useState("")

  useEffect(() => {
    function onFirstRender(numbers: number[]) {
      navigation.setOptions({ headerTitle: numbers.join(" ") })

      const { mod, med, ave, vari, amp, desv } = calculateAllMeasures(numbers)

      setModality(mod)
      setMediana(med)
      setAverage(ave)
      setVariancia(vari)
      setAmplitude(amp)
      setDesvio(desv)
    }

    onFirstRender(numbers)
  }, [])

  return (
    <View>
      <Data
        amplitude={amplitude}
        average={average}
        mediana={mediana}
        modality={modality}
        variancia={variancia}
        desvio={desvio}
      />
    </View>
  )
}
