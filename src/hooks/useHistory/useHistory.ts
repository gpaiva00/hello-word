import AsyncStorage from '@react-native-async-storage/async-storage'
import { ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useState } from 'react'

import { useAtom } from 'jotai'
import { RESET, atomWithStorage, createJSONStorage } from 'jotai/utils'

import { WordProps, WordsProps } from '@types'

const storage = createJSONStorage(() => AsyncStorage)
const historyAtom = atomWithStorage<WordsProps>('@user-/history', [], storage)

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>
}

function checkIfItemExistsInHistory({
  item,
  history,
}: {
  item: Readonly<WordProps | undefined>
  history: WordsProps
}) {
  return history.some((historyItem) => historyItem.id === item?.id)
}

function useHistory({ navigation }: Props) {
  const [showDialog, setShowDialog] = useState(false)

  const [history, setHistory] = useAtom(historyAtom)

  function handleClearHistory() {
    setHistory(RESET)
    toggleDialog()
  }

  function toggleDialog() {
    setShowDialog(!showDialog)
  }

  function handleGoToItem(item: WordProps) {
    navigation.navigate('Meaning', { item })
  }

  return {
    history,
    setHistory,
    shouldShowInitialTip: !history.length,
    handleClearHistory,
    handleGoToItem,
    toggleDialog,
    showDialog,
  }
}

export { checkIfItemExistsInHistory, historyAtom, useHistory }
