import { useAtom } from 'jotai'
import { useEffect, useMemo, useState } from 'react'

import { useDictionaryService } from 'hooks/useDictionaryService'
import { savedWordsAtom } from 'hooks/useSavedWords'

import { MeaningProps, WordProps } from '@types'

type MeaningsOnly = MeaningProps[number]['meanings']

function useMeaning(item: Readonly<WordProps | undefined>) {
  const [isPlaying, setIsPlaying] = useState<null | number>(null)
  const [savedWords, setSavedWords] = useAtom(savedWordsAtom)

  const { data, isError, isLoading, isFetching, refetch } =
    useDictionaryService(item?.term)

  // Normalize API output
  const formattedData = useMemo(() => (Array.isArray(data) ? data : []), [data])

  const meanings: MeaningsOnly = useMemo(
    () => formattedData?.flatMap((item) => item.meanings),
    [formattedData]
  )

  const isSearchingMeaning = useMemo(
    () => isFetching || isLoading,
    [isFetching, isLoading]
  )

  const isWordSaved = useMemo(
    () => savedWords.some(({ id }) => id === item?.id),
    [savedWords, item]
  )

  const resultNotFound = useMemo(
    () => !isSearchingMeaning && !formattedData.length,
    [isSearchingMeaning, formattedData]
  )

  useEffect(() => {
    refetch()
  }, [item])

  function handlePlayPhonetic({
    audio,
    index,
  }: {
    audio: string
    index: number
  }) {
    setIsPlaying((prev) => (prev === index ? null : index))

    // TODO: play audio with some lib
  }

  function handleSaveWord() {
    setSavedWords(async (prev) => [...(await prev), item as WordProps])
  }

  return {
    dictionary: {
      general: {
        formattedData,
        isSaved: isWordSaved,
      },
      meanings,
    },
    isError,
    isFetching,
    isPlaying,
    isSearchingMeaning,
    resultNotFound,
    handlePlayPhonetic,
    handleSaveWord,
  }
}

export { useMeaning }
