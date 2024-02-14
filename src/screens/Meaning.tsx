import { ParamListBase, RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useQuery } from '@tanstack/react-query'
import classNames from 'classnames'
import { Bookmark, PlayCircle, Volume2 } from 'lucide-react-native'
import { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { Container, Header } from '@components'
import { LanguageProps, MeaningProps } from '@types'
import { thereIsPhoneticForTerm, whereIsAudioFrom } from '@utils'

import AustraliaIcon from 'assets/icons/au'
import UnitedKingdomIcon from 'assets/icons/gb'
import UnitedStatesIcon from 'assets/icons/us'

type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>
  route: RouteProp<ParamListBase>
}

type ParamsProps = RouteProp<ParamListBase> & {
  term: string
}

const languagesMap = {
  [LanguageProps.US]: <UnitedStatesIcon width={30} height={30} />,
  [LanguageProps.UK]: <UnitedKingdomIcon width={30} height={30} />,
  [LanguageProps.AU]: <AustraliaIcon width={30} height={30} />,
}

LanguageProps
function Meaning({ route, navigation }: Props) {
  const [isPlaying, setIsPlaying] = useState(false)
  const { params }: { params: ParamsProps } = route

  useEffect(() => {
    refetch()
  }, [params?.term])

  const { data, isLoading, refetch, isError } = useQuery({
    initialData: null,
    queryKey: ['words'],
    notifyOnChangeProps: ['data'],
    queryFn: async () =>
      fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${params.term}`
      ).then((data) => data.json() as unknown as MeaningProps),
  })

  if (!data || isError) {
    return (
      <Text>Sorry, could not find this word. Try again with another one.</Text>
    )
  }

  const meanings = data.flatMap((item) => item.meanings)

  return (
    <Container>
      <Header title='Meaning of' navigation={navigation}>
        {!isLoading && (
          <TouchableOpacity>
            <Bookmark className='text-black' />
          </TouchableOpacity>
        )}
      </Header>

      <ScrollView showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <Container>
            <ActivityIndicator />
          </Container>
        ) : (
          <>
            <View
              className={classNames('flex-row items-end gap-2', {
                'mb-6': thereIsPhoneticForTerm(data[0].phonetics),
              })}>
              <Text className='font-extrabold text-3xl'>{data[0].word}</Text>
              <Text className='text-gray-500'>{data[0].phonetic}</Text>
            </View>

            {/* phonetic audio */}
            <View className='w-full border-b border-gray-300 pb-6 mb-4'>
              {data[0].phonetics.map((phonetic, index) => {
                const language = whereIsAudioFrom(phonetic.audio)

                if (!phonetic.audio.length) return

                return (
                  <View
                    key={index}
                    className={classNames('flex-row items-center', {
                      'mt-6': index !== 0,
                    })}>
                    {languagesMap[language]}

                    <Text className='text-gray-300 mx-4 text-3xl'>|</Text>

                    <TouchableOpacity className='flex-row items-center min-w-[144px] py-2 px-3 border border-gray-300 rounded-full'>
                      {isPlaying ? (
                        <Volume2 className='text-black mr-4' />
                      ) : (
                        <PlayCircle className='text-black mr-4' />
                      )}
                      <Text className='text-gray-500'>
                        {phonetic?.text?.length
                          ? phonetic.text
                          : data[0].phonetic || 'no phonetic'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )
              })}
            </View>

            {/* meanings */}
            {meanings.map((meaning, index) => (
              <View
                key={index}
                className={classNames('border-gray-300 pb-6 mb-4 border-none', {
                  'border-b': index < meanings.length - 1,
                })}>
                <Text className='text-lg font-semibold mb-4 capitalize'>
                  {meaning.partOfSpeech}
                </Text>

                {meaning.definitions.map(({ example, definition }, index) => {
                  const hasExample = !!example

                  return (
                    <View
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
    </Container>
  )
}

export default Meaning
