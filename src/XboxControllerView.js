import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const XboxControllerViewIcon = ({
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
    <path d='M12,2C6.47,2 2,6.5 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M6,7H15V9H8V14H6V7M9,10H18V17H9V10M11,12V15H16V12H11Z' />
  </Svg>
)

XboxControllerViewIcon.displayName = 'XboxControllerViewIcon'

XboxControllerViewIcon.defaultProps = {
  size: 24
}

export default XboxControllerViewIcon