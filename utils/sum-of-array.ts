export function arraySum(array: number[]) {
  let sum = 0

  for (const elem of array) {
    sum += elem
  }

  return sum
}
