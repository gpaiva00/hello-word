import { NavigationContainer } from '@react-navigation/native'
import { Provider, createStore } from 'jotai'
import { RootSiblingParent } from 'react-native-root-siblings'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppRoutes } from './src/routes'

const store = createStore()

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RootSiblingParent>
          <NavigationContainer>
            <AppRoutes />
          </NavigationContainer>
        </RootSiblingParent>
      </Provider>
    </QueryClientProvider>
  )
}

export default App
