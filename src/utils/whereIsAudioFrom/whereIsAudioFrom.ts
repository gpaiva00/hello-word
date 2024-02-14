import { LanguageProps } from '@types'

function whereIsAudioFrom(audioString: string) {
  const [firstPart] = audioString.split('.mp3')

  const language = firstPart.slice(-2)

  return language as LanguageProps
}

export { whereIsAudioFrom }
