import { Text } from "react-native"
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu"

interface ThreeDotMenuProps {
  goToHistory(): void
}

export function ThreeDotMenu({ goToHistory }: ThreeDotMenuProps) {
  return (
    <Menu>
      <MenuTrigger>
        <Text style={{ fontSize: 30, color: "#f8f8f2" }}>⋮⋮</Text>
      </MenuTrigger>
      <MenuOptions optionsContainerStyle={{ padding: 10 }}>
        <MenuOption onSelect={goToHistory} text="Histórico" />
      </MenuOptions>
    </Menu>
  )
}
