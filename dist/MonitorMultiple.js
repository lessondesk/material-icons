import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MonitorMultipleIcon = ({
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
    <path d='M22,17V7H6V17H22M22,5C23.1,5 24,5.9 24,7V17C24,18.11 23.1,19 22,19H16V21H18V23H10V21H12V19H6C4.89,19 4,18.11 4,17V7C4,5.9 4.9,5 6,5H22M2,3V15H0V3C0,1.9 0.9,1 2,1H20V3H2Z' />
  </Svg>
)

MonitorMultipleIcon.displayName = 'MonitorMultipleIcon'

MonitorMultipleIcon.defaultProps = {
  size: 24
}

export default MonitorMultipleIcon