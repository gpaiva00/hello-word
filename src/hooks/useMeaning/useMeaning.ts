import { MeaningProps } from '@types'
import { useDictionaryService } from 'hooks/useDictionaryService'
import { useEffect, useMemo, useState } from 'react'

type MeaningsOnly = MeaningProps[number]['meanings']

function useMeaning(term: Readonly<string | undefined>) {
  const [isPlaying, setIsPlaying] = useState<null | number>(null)

  const { data, isError, isLoading, isFetching, refetch } =
    useDictionaryService(term)

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

  useEffect(() => {
    refetch()
  }, [term])

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

  return {
    dictionary: {
      general: formattedData,
      meanings,
    },
    handlePlayPhonetic,
    isError,
    isPlaying,
    isSearchingMeaning,
    resultNotFound: !isSearchingMeaning && !formattedData.length,
  }
}

export { useMeaning }
