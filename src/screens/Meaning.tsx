import { ParamListBase, RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Bookmark, PlayCircle, SearchX, Volume2 } from 'lucide-react-native'
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { Container, Header } from '@components'
import { LanguageProps } from '@types'

import { useMeaning } from '@hooks'
import { thereIsPhoneticForTerm, whereIsAudioFrom } from '@utils'
import AustraliaIcon from 'assets/icons/au'
import UnitedKingdomIcon from 'assets/icons/gb'
import UnitedStatesIcon from 'assets/icons/us'
import classNames from 'classnames'

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>
  route: RouteProp<ParamListBase>
}

const languagesMap = {
  [LanguageProps.US]: <UnitedStatesIcon width={30} height={30} />,
  [LanguageProps.UK]: <UnitedKingdomIcon width={30} height={30} />,
  [LanguageProps.AU]: <AustraliaIcon width={30} height={30} />,
}

function Meaning({ route, navigation }: Props) {
  const params = route?.params as Readonly<{ term: string } | undefined>

  const {
    dictionary,
    isSearchingMeaning,
    resultNotFound,
    isPlaying,
    handlePlayPhonetic,
  } = useMeaning(params?.term)

  return (
    <Container>
      <Header title='Meaning of' navigation={navigation}>
        {resultNotFound ? (
          <></>
        ) : (
          <TouchableOpacity>
            <Bookmark className='text-black' />
          </TouchableOpacity>
        )}
      </Header>

      {resultNotFound ? (
        <View className='flex-1 items-center justify-center gap-2 px-10'>
          <SearchX className='text-gray-500' size={30} />
          <Text className='text-gray-500 text-center'>
            Sorry, could not find a meaning for
          </Text>
          <Text className='font-bold text-gray-600'>"{params?.term}"</Text>
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {isSearchingMeaning ? (
            <Container>
              <ActivityIndicator />
            </Container>
          ) : (
            <>
              <View
                className={classNames('flex-row items-end gap-2', {
                  'mb-6': thereIsPhoneticForTerm(
                    dictionary.general[0]?.phonetics ?? []
                  ),
                })}>
                <Text className='font-extrabold text-3xl'>
                  {dictionary.general[0]?.word}
                </Text>
                <Text className='text-gray-500'>
                  {dictionary.general[0]?.phonetic}
                </Text>
              </View>

              {/* phonetic audio */}
              <View className='w-full border-b border-gray-300 pb-6 mb-4'>
                {dictionary.general[0]?.phonetics.map(
                  ({ audio, text }, index) => {
                    const language = whereIsAudioFrom(audio)

                    if (!audio.length) return

                    return (
                      <View
                        key={index}
                        className={classNames('flex-row items-center', {
                          'mt-6': index !== 0,
                        })}>
                        {languagesMap[language]}

                        <Text className='text-gray-300 mx-4 text-3xl'>|</Text>

                        <TouchableOpacity
                          onPress={() => handlePlayPhonetic({ audio, index })}
                          className='flex-row items-center min-w-[144px] py-2 px-3 border border-gray-300 rounded-full'>
                          {isPlaying === index ? (
                            <Volume2 className='text-black mr-4' />
                          ) : (
                            <PlayCircle className='text-black mr-4' />
                          )}
                          <Text className='text-gray-500'>
                            {text?.length
                              ? text
                              : dictionary.general
                              ? dictionary.general[0]?.phonetic
                              : 'no phonetic'}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )
                  }
                )}
              </View>

              {/* meanings */}
              {dictionary.meanings.map((meaning, index) => (
                <View
                  key={index}
                  className={classNames(
                    'border-gray-300 pb-6 mb-4 border-none',
                    {
                      'border-b': index < dictionary.meanings?.length - 1,
                    }
                  )}>
                  <Text className='text-lg font-semibold mb-4 capitalize'>
                    {meaning.partOfSpeech}
                  </Text>

                  {meaning.definitions.map(({ example, definition }, index) => {
                    const hasExample = !!example

                    return (
                      <View
                        key={index}
                        className={classNames('flex-row items-start gap-2', {
                          'mb-6': index < meaning.definitions.length - 1,
                        })}>
                        <Text className='text-gray-500 font-semibold'>
                          {index + 1}.
                        </Text>
                        <View className='pr-10'>
                          <Text className=''>{definition}</Text>
                          {hasExample && (
                            <Text className='text-gray-500 mt-2'>
                              "{example}"
                            </Text>
                          )}
                        </View>
                      </View>
                    )
                  })}
                </View>
              ))}
            </>
          )}
        </ScrollView>
      )}
    </Container>
  )
}

export default Meaning
