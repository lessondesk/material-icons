import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ClockOutlineIcon = ({
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
    <path d='M12,20C16.42,20 20,16.42 20,12C20,7.58 16.42,4 12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.47,22 2,17.5 2,12C2,6.48 6.48,2 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z' />
  </Svg>
)

ClockOutlineIcon.displayName = 'ClockOutlineIcon'

ClockOutlineIcon.defaultProps = {
  size: 24
}

export default ClockOutlineIcon