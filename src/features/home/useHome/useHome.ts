import { ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { WordProps } from '@types'
import { useLoadWordsService } from '../../../hooks/useLoadWordsService'

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>
}

function useHome({ navigation }: Props) {
  const {
    data,
    isLoading,
    refetch,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useLoadWordsService()

  function handleGoToItem(item: WordProps) {
    navigation.navigate('Meaning', { item })
  }

  return {
    pages: data?.pages.flat(),
    isLoading,
    isFetching,
    refetch,
    handleGoToItem,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  }
}

export { useHome }
