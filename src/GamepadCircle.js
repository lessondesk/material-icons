import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GamepadCircleIcon = ({
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
    <path d='M5,8C7.21,8 9,9.79 9,12C9,14.21 7.21,16 5,16C2.79,16 1,14.21 1,12C1,9.79 2.79,8 5,8M12,1C14.21,1 16,2.79 16,5C16,7.21 14.21,9 12,9C9.79,9 8,7.21 8,5C8,2.79 9.79,1 12,1M12,15C14.21,15 16,16.79 16,19C16,21.21 14.21,23 12,23C9.79,23 8,21.21 8,19C8,16.79 9.79,15 12,15M19,8C21.21,8 23,9.79 23,12C23,14.21 21.21,16 19,16C16.79,16 15,14.21 15,12C15,9.79 16.79,8 19,8Z' />
  </Svg>
)

GamepadCircleIcon.displayName = 'GamepadCircleIcon'

GamepadCircleIcon.defaultProps = {
  size: 24
}

export default GamepadCircleIcon