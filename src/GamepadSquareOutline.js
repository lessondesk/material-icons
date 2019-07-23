import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GamepadSquareOutlineIcon = ({
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
    <path d='M21,6H3C1.9,6 1,6.9 1,8V16C1,17.1 1.9,18 3,18H21C22.1,18 23,17.1 23,16V8C23,6.9 22.1,6 21,6M21,16H3V8H21M6,15H8V13H10V11H8V9H6V11H4V13H6M14.5,12C15.33,12 16,12.67 16,13.5C16,14.33 15.33,15 14.5,15C13.67,15 13,14.33 13,13.5C13,12.67 13.67,12 14.5,12M18.5,9C19.33,9 20,9.67 20,10.5C20,11.33 19.33,12 18.5,12C17.67,12 17,11.33 17,10.5C17,9.67 17.67,9 18.5,9Z' />
  </Svg>
)

GamepadSquareOutlineIcon.displayName = 'GamepadSquareOutlineIcon'

GamepadSquareOutlineIcon.defaultProps = {
  size: 24
}

export default GamepadSquareOutlineIcon