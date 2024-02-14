import { ComponentProps } from 'react'
import Svg, { Path } from 'react-native-svg'

function UnitedKingdomIcon(props: ComponentProps<'svg'>) {
  return (
    <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' {...props}>
      <Path fill='#012169' d='M0 0h512v512H0z' />
      <Path
        fill='#FFF'
        d='M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z'
      />
      <Path
        fill='#C8102E'
        d='M184 324l11 34L42 512H0v-3zm124-12l54 8 150 147v45zM512 0L320 196l-4-44L466 0zM0 1l193 189-59-8L0 49z'
      />
      <Path fill='#FFF' d='M176 0v512h160V0zM0 176v160h512V176z' />
      <Path fill='#C8102E' d='M0 208v96h512v-96zM208 0v512h96V0z' />
    </Svg>
  )
}

export default UnitedKingdomIcon
