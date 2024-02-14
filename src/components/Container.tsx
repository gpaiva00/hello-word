import { View } from 'react-native'

type Props = {
  children: React.JSX.Element | React.JSX.Element[]
}

function Container({ children }: Props) {
  return <View className='flex-1 px-4 pt-14 pb-4'>{children}</View>
}

export { Container }
