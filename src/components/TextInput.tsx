import classNames from 'classnames'
import {
  TextInput as TextInputOriginal,
  TextInputProps,
  View,
} from 'react-native'

type Props = TextInputProps & {
  containerClassName?: string
  icon?: React.JSX.Element
}

function TextInput({ icon, containerClassName, ...props }: Props) {
  return (
    <View
      className={classNames(
        'border border-gray-300/80 bg-gray-300/80 rounded-lg flex-row items-center px-2 py-2.5',
        containerClassName
      )}>
      {icon}
      <TextInputOriginal className='w-full lowercase' {...props} />
    </View>
  )
}

export { TextInput }
