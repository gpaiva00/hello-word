import AsyncStorage from '@react-native-async-storage/async-storage'
import { ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useAtom } from 'jotai'
import { atomWithStorage, createJSONStorage } from 'jotai/utils'

import { WordProps, WordsProps } from '@types'
import { useState } from 'react'

const storage = createJSONStorage(() => AsyncStorage)
const savedWordsAtom = atomWithStorage<WordsProps>('@user-/saved', [], storage)

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>
}

function useSavedWords({ navigation }: Props) {
  const [showDialog, setShowDialog] = useState(false)
  const [selectedItem, setSelectedItem] = useState<WordProps | null>(null)

  const [savedWords, setSavedWords] = useAtom(savedWordsAtom)

  function handleDeleteSavedWord() {
    const newSavedWords = savedWords.filter(
      (savedWord) => savedWord.id !== selectedItem?.id
    )

    setSavedWords(newSavedWords)
    toggleDialog()
  }

  function handleSelectItem(item: WordProps) {
    setSelectedItem(item)

    toggleDialog()
  }

  function toggleDialog() {
    setShowDialog(!showDialog)
  }

  function handleGoToItem(item: WordProps) {
    navigation.navigate('Meaning', { item })
  }

  return {
    savedWords,
    shouldShowInitialTip: !savedWords.length,
    showDialog,
    setShowDialog,
    toggleDialog,
    handleSelectItem,
    handleDeleteSavedWord,
    handleGoToItem,
  }
}

export { savedWordsAtom, useSavedWords }
