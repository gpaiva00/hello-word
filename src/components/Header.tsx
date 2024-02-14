import { ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ChevronLeft } from 'lucide-react-native'
import { Text, TouchableOpacity, View } from 'react-native'

type Props = {
  children?: React.JSX.Element | React.JSX.Element[]
  title: string
  navigation?: NativeStackNavigationProp<ParamListBase>
}

function Header({ children, title, navigation }: Props) {
  return (
    <View className='flex-row items-center justify-between pb-6'>
      <View className='flex-row gap-2 items-center'>
        {navigation?.canGoBack() && (
          <TouchableOpacity onPress={navigation.goBack}>
            <ChevronLeft className='text-black' />
          </TouchableOpacity>
        )}

        <Text className='font-extrabold text-xl'>{title}</Text>
      </View>

      {children}
    </View>
  )
}

export { Header }
