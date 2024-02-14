import { Search as SearchIcon } from 'lucide-react-native'
import { KeyboardAvoidingView, Text, View } from 'react-native'

import { Container, Header, ItemsList, TextInput } from '@components'

function Search() {
  // 'Abacate', 'Life', 'McDonalds'
  const results = []
  const recentWords = []

  const shouldShowRecentWords = !results.length && !!recentWords.length

  const shouldShowInitialTip = !results.length && !recentWords.length

  function handleGoToItem(term: string) {}

  return (
    <Container>
      <Header title='Search' />

      <View className='flex-1'>
        <TextInput
          placeholder='What word do you have in mind?'
          returnKeyType='search'
          icon={<SearchIcon className='text-gray-400 m-0 p-0 mr-2' size={17} />}
        />
        {/* results */}
        <KeyboardAvoidingView className='flex-1'>
          {shouldShowRecentWords && (
            <Text className='text-gray-500 uppercase mt-6'>recent</Text>
          )}

          {shouldShowRecentWords &&
            recentWords.map((item, index) => (
              <ItemsList key={index} item={item} onPressItem={handleGoToItem} />
            ))}

          {shouldShowInitialTip && (
            <View className='flex-1 items-center justify-center'>
              <Text className='text-gray-500'>
                Start by searching for a word!
              </Text>
            </View>
          )}

          {results.map((item, index) => (
            <ItemsList key={index} item={item} onPressItem={handleGoToItem} />
          ))}
        </KeyboardAvoidingView>
      </View>
    </Container>
  )
}

export default Search
