import { ChevronRight } from 'lucide-react-native'
import { Text, TouchableOpacity, View } from 'react-native'

type Props = {
  item: string
  onPressItem: (item: string) => void
  rightAction?: {
    icon: React.JSX.Element
    onPress: (item: string) => void
  }
}

function ListItem({ item, onPressItem, rightAction }: Props) {
  return (
    <View className='flex-row items-center justify-between border-b-gray-300 border-b py-4'>
      <TouchableOpacity
        onPress={() => onPressItem(item)}
        className='flex-1 flex-row justify-between items-center'>
        <Text>{item}</Text>
        {!rightAction && <ChevronRight className='text-gray-300' />}
      </TouchableOpacity>

      {!!rightAction && (
        <TouchableOpacity
          onPress={() => {
            rightAction.onPress(item)
          }}>
          {rightAction.icon}
        </TouchableOpacity>
      )}
    </View>
  )
}

export { ListItem }
