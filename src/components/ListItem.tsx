import { ChevronRight } from 'lucide-react-native'
import { Text, TouchableOpacity, View } from 'react-native'

import { WordsProps } from '@types'

type Props = {
  item: WordsProps[number]
  onPressItem: (item: string) => void
  rightAction?: {
    icon: React.JSX.Element
    onPress: (item: string) => void
  }
}

function ListItem({ item: { term }, onPressItem, rightAction }: Props) {
  return (
    <View className='flex-row items-center justify-between border-b-gray-300 border-b py-4'>
      <TouchableOpacity
        onPress={() => onPressItem(term)}
        className='flex-1 flex-row justify-between items-center'>
        <Text>{term}</Text>
        {!rightAction && <ChevronRight className='text-gray-300' />}
      </TouchableOpacity>

      {!!rightAction && (
        <TouchableOpacity
          onPress={() => {
            rightAction.onPress(term)
          }}>
          {rightAction.icon}
        </TouchableOpacity>
      )}
    </View>
  )
}

export { ListItem }
