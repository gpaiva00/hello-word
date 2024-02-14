type MeaningProps = Array<{
  word: string
  phonetic: string
  phonetics: Array<{
    text?: string
    audio: string
    sourceUrl: string
  }>
  meanings: Array<{
    partOfSpeech: string
    definitions: Array<{
      definition: string
      synonyms: Array<any>
      antonyms: Array<any>
      example?: string
    }>
    synonyms: Array<string>
    antonyms: Array<any>
  }>
  sourceUrls: Array<string>
}>

export type { MeaningProps }
