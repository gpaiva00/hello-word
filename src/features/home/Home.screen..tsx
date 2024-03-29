import { ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types'
import { FlashList } from '@shopify/flash-list'
import { StatusBar } from 'expo-status-bar'
import {
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from 'react-native'

import { Container, Header, ListItem } from '@common'
import { useHome } from '@features'

import { History } from 'lucide-react-native'

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>
}

function Home({ navigation }: Props) {
  const {
    pages,
    isLoading,
    handleGoToItem,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
  } = useHome({
    navigation,
  })

  return (
    <>
      <Container>
        <Header title='HelloWord 👋'>
          <TouchableOpacity onPress={() => navigation.navigate('History')}>
            <History className='text-black' />
          </TouchableOpacity>
        </Header>

        {isLoading ? (
          <Container>
            <ActivityIndicator />
          </Container>
        ) : (
          <></>
        )}

        <FlashList
          data={pages}
          estimatedItemSize={57}
          refreshing={isFetching || isFetchingNextPage}
          onRefresh={fetchNextPage}
          refreshControl={
            <RefreshControl refreshing={isFetching || isFetchingNextPage} />
          }
          onEndReached={() => !isFetching && fetchNextPage()}
          onEndReachedThreshold={0.01}
          renderItem={({ item, index }) => (
            <ListItem key={index} item={item} onPressItem={handleGoToItem} />
          )}
        />
      </Container>
      <StatusBar style='auto' />
    </>
  )
}

export { Home }
