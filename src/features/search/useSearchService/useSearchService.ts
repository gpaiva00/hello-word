import { useQuery } from '@tanstack/react-query'

import { WordsProps } from '@types'

async function fetchTerms(term: string): Promise<WordsProps> {
  try {
    if (!term.length) return []

    const response = await fetch(`http://localhost:3000/words?term=${term}`)

    return new Promise((resolve) =>
      setTimeout(() => resolve(response.json()), 2000)
    )
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message)
    else throw new Error('Something went wrong.')
  }
}

function useSearchService(term: string) {
  const { data, isFetching, isLoading, isError, refetch } = useQuery({
    queryKey: ['search'],
    queryFn: () => fetchTerms(term),
    initialData: null,
  })

  return {
    data,
    refetch,
    isFetching,
    isLoading,
    isError,
  }
}

export { useSearchService }
