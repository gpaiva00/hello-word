import { useInfiniteQuery } from '@tanstack/react-query'
import { WordsProps } from '@types'

function useLoadWordsService(term?: string) {
  const {
    data,
    isError,
    isLoading,
    refetch,
    isFetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['loadWords'],
    initialPageParam: 0,
    queryFn: ({ pageParam }) =>
      fetch(`http://localhost:3000/words?_limit=10&_start=${pageParam}`).then(
        (data) => data.json() as unknown as WordsProps
      ),
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length === 0) return undefined

      return lastPageParam + 10
    },
  })

  return {
    data,
    isError,
    isLoading,
    isFetching,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  }
}

export { useLoadWordsService }
