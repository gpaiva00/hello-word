import { ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { useLoadWordsService } from '@hooks'

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

  function handleGoToItem(term: string) {
    navigation.navigate('Meaning', { term })
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
