import { NavigationContainer } from '@react-navigation/native'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider, createStore } from 'jotai'
import { StrictMode } from 'react'
import { RootSiblingParent } from 'react-native-root-siblings'

import { AppRoutes } from './src/routes'

const store = createStore()
const queryClient = new QueryClient()

function App() {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RootSiblingParent>
          <NavigationContainer>
            <Provider store={store}>
              <AppRoutes />
            </Provider>
          </NavigationContainer>
        </RootSiblingParent>
      </QueryClientProvider>
    </StrictMode>
  )
}

export default App
