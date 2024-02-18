import { ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Text, View } from 'react-native'

import { Container, Header, ListItem, TextInput } from '@common'
import { useSearch } from '@features'

import { Hourglass, Search as SearchIcon } from 'lucide-react-native'

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>
}

function Search({ navigation }: Props) {
  const {
    results,
    isSearching,
    inputText,
    setInputText,
    tipText,
    shouldShowRecentWords,
    handleGoToItem,
  } = useSearch({ navigation })

  return (
    <Container>
      <Header title='Search' />

      <View className='flex-1'>
        <TextInput
          value={inputText}
          onChange={(value) => setInputText(value.nativeEvent.text)}
          placeholder='What word do you have in mind?'
          returnKeyType='search'
          icon={
            isSearching ? (
              <Hourglass className='text-gray-400 m-0 p-0 mr-2' size={17} />
            ) : (
              <SearchIcon className='text-gray-400 m-0 p-0 mr-2' size={17} />
            )
          }
        />
        <View className='flex-1'>
          {shouldShowRecentWords && (
            <Text className='text-gray-500 uppercase mt-6'>recent</Text>
          )}

          {/* {shouldShowRecentWords &&
            recentWords.map((item, index) => (
              <ItemsList key={index} item={item} onPressItem={handleGoToItem} />
            ))} */}

          {!!tipText?.length && (
            <View className='flex-1 items-center justify-center'>
              <Text className='text-gray-500'>{tipText}</Text>
            </View>
          )}

          {results?.map((item, index) => (
            <ListItem key={index} item={item} onPressItem={handleGoToItem} />
          ))}
        </View>
      </View>
    </Container>
  )
}

export default Search
