import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SaxophoneIcon = ({
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
    <path d='M4,2C3.45,2 3,2.45 3,3C3,3.55 3.45,4 4,4C5.66,4 7,5.34 7,7V8.66L7,15.5C7,19.1 9.9,22 13.5,22C17.1,22 20,19.1 20,15.5V13C20.55,13 21,12.55 21,12C21,11.45 20.55,11 20,11H14C13.45,11 13,11.45 13,12C13,12.55 13.45,13 14,13V15C14,15.55 13.55,16 13,16C12.45,16 12,15.55 12,15V11C12.55,11 13,10.55 13,10C13,9.45 12.55,9 12,9V8C12.55,8 13,7.55 13,7C13,6.45 12.55,6 12,6V5.5C12,3.57 10.43,2 8.5,2H4Z' />
  </Svg>
)

SaxophoneIcon.displayName = 'SaxophoneIcon'

SaxophoneIcon.defaultProps = {
  size: 24
}

export default SaxophoneIcon