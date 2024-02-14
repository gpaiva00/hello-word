import { ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types'
import { StatusBar } from 'expo-status-bar'
import { History } from 'lucide-react-native'
import { ScrollView, Text, TouchableOpacity } from 'react-native'

import { Container, Header, ItemsList } from '@components'
import { WordsProps } from '@types'

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>
}

function Home({ navigation }: Props) {
  function handleGoToItem(term: string) {
    navigation.navigate('Meaning', { term })
  }

  const words: WordsProps = []

  return (
    <>
      <Container>
        <Header title='HelloWord'>
          <TouchableOpacity onPress={() => navigation.navigate('History')}>
            <History className='text-black' />
          </TouchableOpacity>
        </Header>
        {/* words list */}
        <ScrollView className='flex-1'>
          <Text className='text-gray-500 uppercase'>all words</Text>
          {words.map((item, index) => (
            <ItemsList key={index} item={item} onPressItem={handleGoToItem} />
          ))}
        </ScrollView>
      </Container>
      <StatusBar style='auto' />
    </>
  )
}

export default Home
