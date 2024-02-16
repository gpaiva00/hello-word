import { ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Trash } from 'lucide-react-native'
import { ScrollView, Text, View } from 'react-native'

import { Container, Header, ListItem } from '@components'
import { WordsProps } from '@types'

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>
}

function Saved({ navigation }: Props) {
  function handleGoToItem(term: string) {
    navigation.navigate('Meaning', { term })
  }

  function handleDeleteSavedItem(item: string) {}

  const savedWords: WordsProps = []
  const shouldShowInitialTip = !savedWords.length

  return (
    <Container>
      <Header title='Saved' />

      <View className='flex-1'>
        {shouldShowInitialTip && (
          <View className='flex-1 items-center justify-center'>
            <Text className='text-gray-500'>
              Your saved words will appear here.
            </Text>
          </View>
        )}

        {!shouldShowInitialTip && (
          <ScrollView className='flex-1'>
            {savedWords.map((item, index) => (
              <ListItem
                key={index}
                item={item}
                onPressItem={handleGoToItem}
                rightAction={{
                  icon: <Trash className='text-red-600' />,
                  onPress: handleDeleteSavedItem,
                }}
              />
            ))}
          </ScrollView>
        )}
      </View>
    </Container>
  )
}

export default Saved
