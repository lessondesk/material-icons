import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ToggleSwitchOffIcon = ({
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
    <path d='M17,7H7C4.24,7 2,9.24 2,12C2,14.76 4.24,17 7,17H17C19.76,17 22,14.76 22,12C22,9.24 19.76,7 17,7M7,15C5.34,15 4,13.66 4,12C4,10.34 5.34,9 7,9C8.66,9 10,10.34 10,12C10,13.66 8.66,15 7,15Z' />
  </Svg>
)

ToggleSwitchOffIcon.displayName = 'ToggleSwitchOffIcon'

ToggleSwitchOffIcon.defaultProps = {
  size: 24
}

export default ToggleSwitchOffIcon