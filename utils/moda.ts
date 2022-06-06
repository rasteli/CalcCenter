interface Repetitions {
  [key: number]: number
}

export function calculateModa(array: number[]) {
  const repetitions: Repetitions = {}

  array.sort()

  for (let i = 0; i < array.length; i++) {
    repetitions[array[i]] = 1
  }

  for (let i = 1; i < array.length; i++) {
    if (array[i] === array[i - 1]) {
      repetitions[array[i]] += 1
    }
  }

  const moda = Object.entries(repetitions)
    .filter(([key, value]) => value > 1)
    .map(res => res[0])

  return moda
}
