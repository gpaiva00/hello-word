import { useQuery } from '@tanstack/react-query'
import { MeaningProps } from '@types'

async function fetchDictionary(term: string | undefined) {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${term}`
    )

    return response.json() as Promise<MeaningProps | []>
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message)
    else throw new Error('Something went wrong.')
  }
}

function useDictionaryService(term: string | undefined) {
  const { data, isLoading, isFetching, status, refetch, isError } = useQuery({
    initialData: null,
    queryKey: ['words'],
    queryFn: () => fetchDictionary(term),
  })

  return {
    data,
    status,
    isError,
    isLoading,
    isFetching,
    refetch,
  }
}

export { useDictionaryService }
