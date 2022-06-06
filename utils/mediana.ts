export function calculateMediana(array: number[]) {
  array.sort()

  const length = array.length

  if (length % 2 !== 0) {
    return array[Math.ceil((length - 1) / 2)]
  }

  const sum = array[length / 2] + array[length / 2 - 1]
  return sum / 2
}
