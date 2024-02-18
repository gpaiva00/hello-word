import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import classNames from 'classnames'
import {
  BookA,
  Bookmark,
  Search as SearchIcon,
  User,
} from 'lucide-react-native'

import { History, Home, Meaning, Profile, Saved, Search } from '@screens'

const Tab = createBottomTabNavigator()
const HomeStack = createNativeStackNavigator()
const DefaultStack = createNativeStackNavigator()

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name='Home' component={Home} />

      <HomeStack.Screen name='History' component={History} />

      <HomeStack.Screen name='Meaning' component={Meaning} />
    </HomeStack.Navigator>
  )
}

function AppRoutes() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000',
      }}>
      <Tab.Screen
        name='HomeStack'
        component={HomeStackScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <BookA
              className={classNames({
                'text-black': focused,
                'text-gray-300': !focused,
              })}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Search'
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <SearchIcon
              className={classNames({
                'text-black': focused,
                'text-gray-300': !focused,
              })}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Saved'
        component={Saved}
        options={{
          tabBarIcon: ({ focused }) => (
            <Bookmark
              className={classNames({
                'text-black': focused,
                'text-gray-300': !focused,
              })}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <User
              className={classNames({
                'text-black': focused,
                'text-gray-300': !focused,
              })}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export { AppRoutes }
