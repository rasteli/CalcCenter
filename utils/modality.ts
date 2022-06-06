export function getModality(moda: string[]) {
  const modality =
    moda.length === 0
      ? "Amodal"
      : moda.length === 1
      ? "Unimodal"
      : moda.length === 2
      ? "Bimodal"
      : "Multimodal"

  const string = `${modality} ${
    moda.length > 0 ? `de moda ${moda.join(", ")}` : ""
  }`

  return string
}
