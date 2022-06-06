import { Button } from "react-native"
import { useHistory } from "../contexts/HistoryContext"

export function ClearHistoryButton() {
  const { calculations, removeData } = useHistory()

  return (
    <Button
      color="red"
      onPress={async () => await removeData()}
      title="Limpar histórico"
      disabled={calculations.length === 0}
    />
  )
}
