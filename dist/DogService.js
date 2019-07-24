import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const DogServiceIcon = ({
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
    <path d='M14,8L17,11V21H15V15H8L6,18V21H4V15L5,14V11L2,8L3,7L5,9H7V12C7,12.55 7.45,13 8,13H12C12.55,13 13,12.55 13,12V9L14,8M19,5V3L15,7L18,10L19,9L20,10L22,8L19,5M11.5,9.5L4.5,2.5C4.23,2.22 3.79,2.22 3.5,2.5V2.5C3.22,2.77 3.22,3.21 3.5,3.5L10.5,10.5C10.77,10.78 11.21,10.78 11.5,10.5V10.5C11.78,10.23 11.78,9.79 11.5,9.5Z' />
  </Svg>
)

DogServiceIcon.displayName = 'DogServiceIcon'

DogServiceIcon.defaultProps = {
  size: 24
}

export default DogServiceIcon