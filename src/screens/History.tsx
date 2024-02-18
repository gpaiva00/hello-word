import { ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Trash } from 'lucide-react-native'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { Container, Header, ListItem } from '@components'
import { useHistory } from '@hooks'
import classNames from 'classnames'
import { ConfirmDialog } from 'react-native-simple-dialogs'

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>
}

function History({ navigation }: Props) {
  const {
    history,
    shouldShowInitialTip,
    handleGoToItem,
    showDialog,
    handleClearHistory,
    toggleDialog,
  } = useHistory({
    navigation,
  })

  return (
    <Container>
      <ConfirmDialog
        title='Clear All History'
        titleStyle={{
          fontWeight: 'bold',
        }}
        message='Are you sure you want to clear your history?'
        visible={showDialog}
        onTouchOutside={toggleDialog}
        positiveButton={{
          title: 'Yes, clear all',
          onPress: handleClearHistory,
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

      <Header title='History' navigation={navigation}>
        <TouchableOpacity
          onPress={toggleDialog}
          disabled={shouldShowInitialTip}>
          <Trash
            className={classNames('text-red-600', {
              'text-gray-300': shouldShowInitialTip,
            })}
          />
        </TouchableOpacity>
      </Header>

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
              <ListItem key={index} item={item} onPressItem={handleGoToItem} />
            ))}
          </ScrollView>
        )}
      </View>
    </Container>
  )
}

export default History
