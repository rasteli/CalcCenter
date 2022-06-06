import AsyncStorage from "@react-native-async-storage/async-storage"
import { useContext, useEffect, useState, createContext } from "react"

export interface Calculation {
  numbers: number[]
}

interface HistoryProviderProps {
  children: React.ReactNode
}

interface HistoryContextData {
  calculations: Calculation[]
  removeData(): Promise<void>
  setData(numbers: number[]): Promise<void>
}

const STORAGE_KEY = "@calcs"
const HistoryContext = createContext({} as HistoryContextData)

export function useHistory() {
  return useContext(HistoryContext)
}

export function HistoryProvider({ children }: HistoryProviderProps) {
  const [calculations, setCalculations] = useState([])

  useEffect(() => {
    const _retrieveData = async () => {
      const data = (await AsyncStorage.getItem(STORAGE_KEY)) as string

      if (data) setCalculations(JSON.parse(data).calcs)
    }

    _retrieveData()
  }, [])

  async function setData(numbers: number[]) {
    const newCalcs = [...calculations, { numbers }]
    // @ts-ignore
    setCalculations(newCalcs)

    return await AsyncStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ calcs: newCalcs })
    )
  }

  async function removeData() {
    setCalculations([])
    return await AsyncStorage.removeItem(STORAGE_KEY)
  }

  const value: HistoryContextData = {
    setData,
    removeData,
    calculations
  }

  return (
    <HistoryContext.Provider value={value}>{children}</HistoryContext.Provider>
  )
}
