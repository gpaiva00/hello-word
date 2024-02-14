import { KeyboardAvoidingView, Text, View } from 'react-native'
import Toast from 'react-native-root-toast'

import { Container, Header, TextInput } from '@components'
import { useState } from 'react'

function Profile() {
  const [showToast, setShowToast] = useState(false)

  function handleSaveUserName(name: string) {
    setShowToast(true)
  }

  function handleSavePassword(password: string) {
    setShowToast(true)
  }

  return (
    <Container>
      <Toast
        visible={showToast}
        position={Toast.positions.BOTTOM}
        hideOnPress
        duration={Toast.durations.SHORT}>
        Profile updated
      </Toast>

      <Header title='Profile' />

      <View className='flex-1'>
        <View className='flex-row self-center items-center bg-gray-300 rounded-full justify-center w-24 h-24 mb-6'>
          <Text className='font-bold text-2xl'>GP</Text>
        </View>

        <KeyboardAvoidingView>
          <Text className='font-bold mb-2'>Name</Text>
          <TextInput
            placeholder='Gabriel Paiva'
            value='Gabriel Paiva'
            returnKeyType='done'
            containerClassName='mb-6'
            onBlur={() => handleSaveUserName('Gabriel Paiva')}
          />

          <Text className='font-bold mb-2'>E-mail</Text>
          <TextInput
            readOnly
            value='gabriel.paiva0@icloud.com'
            returnKeyType='done'
            containerClassName='mb-6'
            className='text-gray-400'
          />

          <Text className='font-bold mb-2'>Password</Text>
          <TextInput
            secureTextEntry
            value='xxxx'
            returnKeyType='done'
            onBlur={() => handleSavePassword('123')}
          />
        </KeyboardAvoidingView>
      </View>
    </Container>
  )
}

export default Profile
