import { MeaningProps } from '@types'

type PhoneticsProps = MeaningProps[0]['phonetics']

function thereIsPhoneticForTerm(phonetics: PhoneticsProps) {
  return phonetics.some((item) => item.audio || item.audio.length)
}

export { thereIsPhoneticForTerm }
