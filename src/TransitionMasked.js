import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TransitionMaskedIcon = ({
  size,
  ...props
}) => (
  <Svg
    {...props}
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill='currentcolor'
  >
    <path d='M15,2C16.94,2 18.59,2.7 19.95,4.05C21.3,5.41 22,7.06 22,9C22,10.56 21.5,11.96 20.58,13.2C19.64,14.43 18.44,15.27 16.97,15.7L17,15.38V15C17,12.81 16.23,10.93 14.65,9.35C13.07,7.77 11.19,7 9,7H8.63L8.3,7.03C8.73,5.56 9.57,4.36 10.8,3.42C12.04,2.5 13.44,2 15,2M9,8C12.87,8 16,11.13 16,15C16,18.87 12.87,22 9,22C5.13,22 2,18.87 2,15C2,11.13 5.13,8 9,8M9,10C6.24,10 4,12.24 4,15C4,17.76 6.24,20 9,20C11.76,20 14,17.76 14,15C14,12.24 11.76,10 9,10Z' />
  </Svg>
)

TransitionMaskedIcon.displayName = 'TransitionMaskedIcon'

TransitionMaskedIcon.defaultProps = {
  size: 24
}

export default TransitionMaskedIcon