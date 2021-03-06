import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ControllerClassicIcon = ({
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
    <path d='M6,7H18C20.76,7 23,9.24 23,12C23,14.76 20.76,17 18,17C16.36,17 14.91,16.21 14,15H10C9.09,16.21 7.64,17 6,17C3.24,17 1,14.76 1,12C1,9.24 3.24,7 6,7M19.75,9.5C19.06,9.5 18.5,10.06 18.5,10.75C18.5,11.44 19.06,12 19.75,12C20.44,12 21,11.44 21,10.75C21,10.06 20.44,9.5 19.75,9.5M17.25,12C16.56,12 16,12.56 16,13.25C16,13.94 16.56,14.5 17.25,14.5C17.94,14.5 18.5,13.94 18.5,13.25C18.5,12.56 17.94,12 17.25,12M5,9V11H3V13H5V15H7V13H9V11H7V9H5Z' />
  </Svg>
)

ControllerClassicIcon.displayName = 'ControllerClassicIcon'

ControllerClassicIcon.defaultProps = {
  size: 24
}

export default ControllerClassicIcon