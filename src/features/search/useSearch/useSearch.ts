import { ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useEffect, useMemo, useState } from 'react'

import { WordProps } from '@types'

import { useSearchService } from '@features'

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>
}

function useSearch({ navigation }: Props) {
  const [inputText, setInputText] = useState('')

  const { data, isFetching, isLoading, isError, refetch } = useSearchService(
    inputText.toLowerCase()
  )
  // const shouldShowRecentWords = !results.length && !!recentWords.length

  // TODO: add && !recentWords.length
  const shouldShowInitialTip = useMemo(() => !inputText.length, [data])

  const noResultsFound = useMemo(
    () => !isFetching && !!inputText.length && !data?.length,
    [inputText, data, isFetching]
  )

  useEffect(() => {
    refetch()
  }, [inputText])

  function handleGoToItem(item: WordProps) {
    navigation.navigate('Meaning', { item })
  }

  return {
    results: data,
    isSearching: isFetching || isLoading,
    isError,
    shouldShowRecentWords: false,
    tipText: noResultsFound
      ? 'No results found'
      : shouldShowInitialTip
      ? 'Start by typing for a word!'
      : '',
    inputText,
    setInputText,
    handleGoToItem,
  }
}

export { useSearch }
