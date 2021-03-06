import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GamepadVariantOutlineIcon = ({
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
    <path d='M6,9H8V11H10V13H8V15H6V13H4V11H6V9M18.5,9C19.33,9 20,9.67 20,10.5C20,11.33 19.33,12 18.5,12C17.67,12 17,11.33 17,10.5C17,9.67 17.67,9 18.5,9M15.5,12C16.33,12 17,12.67 17,13.5C17,14.33 16.33,15 15.5,15C14.67,15 14,14.33 14,13.5C14,12.67 14.67,12 15.5,12M17,5C20.87,5 24,8.13 24,12C24,15.87 20.87,19 17,19C15.04,19 13.27,18.2 12,16.9C10.73,18.2 8.96,19 7,19C3.13,19 0,15.87 0,12C0,8.13 3.13,5 7,5H17M7,7C4.24,7 2,9.24 2,12C2,14.76 4.24,17 7,17C8.64,17 10.09,16.21 11,15H13C13.91,16.21 15.36,17 17,17C19.76,17 22,14.76 22,12C22,9.24 19.76,7 17,7H7Z' />
  </Svg>
)

GamepadVariantOutlineIcon.displayName = 'GamepadVariantOutlineIcon'

GamepadVariantOutlineIcon.defaultProps = {
  size: 24
}

export default GamepadVariantOutlineIcon