import { ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ScrollView, Text, View } from 'react-native'
import { ConfirmDialog } from 'react-native-simple-dialogs'

import { Container, Header, ListItem } from '@common'
import { useSavedWords } from '@features'

import { Trash } from 'lucide-react-native'

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>
}

function SavedWords({ navigation }: Props) {
  const {
    handleDeleteSavedWord,
    handleGoToItem,
    shouldShowInitialTip,
    handleSelectItem,
    savedWords,
    showDialog,
    toggleDialog,
  } = useSavedWords({ navigation })

  return (
    <Container>
      <ConfirmDialog
        title='Delete Saved Word'
        titleStyle={{
          fontWeight: 'bold',
        }}
        message='Are you sure you want to delete it?'
        visible={showDialog}
        onTouchOutside={toggleDialog}
        positiveButton={{
          title: 'Yes, delete it',
          onPress: handleDeleteSavedWord,
          style: {
            // @ts-ignore
            color: '#dc2626',
          },
        }}
        negativeButton={{
          title: 'Cancel',
          onPress: toggleDialog,
          style: {
            // @ts-ignore
            color: '#000',
          },
        }}
      />

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
                  onPress: handleSelectItem,
                }}
              />
            ))}
          </ScrollView>
        )}
      </View>
    </Container>
  )
}

export { SavedWords }
