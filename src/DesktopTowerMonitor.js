import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const DesktopTowerMonitorIcon = ({
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
    <path d='M22,18H17C16.45,18 16,17.55 16,17V7C16,6.45 16.45,6 17,6H22C22.55,6 23,6.45 23,7V17C23,17.55 22.55,18 22,18M22,8H17V9H22V8M22,10H17V11H22V10M9,15V17H10V18H5V17H6V15H2C1.45,15 1,14.55 1,14V7C1,6.45 1.45,6 2,6H13C13.55,6 14,6.45 14,7V14C14,14.55 13.55,15 13,15H9M12,8H3V13H12V8Z' />
  </Svg>
)

DesktopTowerMonitorIcon.displayName = 'DesktopTowerMonitorIcon'

DesktopTowerMonitorIcon.defaultProps = {
  size: 24
}

export default DesktopTowerMonitorIcon