import { ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Trash } from 'lucide-react-native'
import { ScrollView, Text, View } from 'react-native'

import { Container, Header, ListItem } from '@components'
import { WordProps, WordsProps } from '@types'

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>
}

function History({ navigation }: Props) {
  function handleDeleteItem(id: string) {}

  function handleGoToItem(item: WordProps) {}

  const history: WordsProps = []
  const shouldShowInitialTip = !history.length

  return (
    <Container>
      {/* header */}
      <Header title='History' navigation={navigation} />

      <View className='flex-1'>
        {shouldShowInitialTip && (
          <View className='flex-1 items-center justify-center'>
            <Text className='text-gray-500'>
              Words you've seen before will appear here.
            </Text>
          </View>
        )}

        {!shouldShowInitialTip && (
          <ScrollView className='flex-1'>
            {history.map((item, index) => (
              <ListItem
                key={index}
                item={item}
                onPressItem={handleGoToItem}
                rightAction={{
                  icon: <Trash className='text-red-600' />,
                  onPress: handleDeleteItem,
                }}
              />
            ))}
          </ScrollView>
        )}
      </View>
    </Container>
  )
}

export default History
