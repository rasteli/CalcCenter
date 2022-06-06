import { calculateModa } from "./moda"
import { getModality } from "./modality"
import { arraySum } from "./sum-of-array"
import { calculateMediana } from "./mediana"
import { calculateVariancia } from "./variancia"

export function calculateAllMeasures(numbers: number[]) {
  const amp = Math.max(...numbers) - Math.min(...numbers)
  const moda = calculateModa(numbers)
  const mod = getModality(moda)

  const med = calculateMediana(numbers)
  const ave = arraySum(numbers) / numbers.length

  const vari = calculateVariancia(numbers, ave)
  const desv = Math.sqrt(vari)

  return {
    amp,
    moda,
    mod,
    med,
    ave,
    vari,
    desv
  }
}
