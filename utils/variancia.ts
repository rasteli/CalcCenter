export function calculateVariancia(array: number[], average: number) {
  let sumSqr = 0

  for (const elem of array) {
    sumSqr += Math.pow(elem - average, 2)
  }

  return sumSqr / array.length
}
