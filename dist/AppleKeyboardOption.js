import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AppleKeyboardOptionIcon = ({
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
    <path d='M3,4H9.11L16.15,18H21V20H14.88L7.84,6H3V4M14,4H21V6H14V4Z' />
  </Svg>
)

AppleKeyboardOptionIcon.displayName = 'AppleKeyboardOptionIcon'

AppleKeyboardOptionIcon.defaultProps = {
  size: 24
}

export default AppleKeyboardOptionIcon