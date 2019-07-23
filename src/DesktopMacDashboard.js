import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const DesktopMacDashboardIcon = ({
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
    <path d='M21,14V4H3V14H21M21,2C22.1,2 23,2.9 23,4V16C23,17.1 22.1,18 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M4,5H15V10H4V5M16,5H20V7H16V5M20,8V13H16V8H20M4,11H9V13H4V11M10,11H15V13H10V11Z' />
  </Svg>
)

DesktopMacDashboardIcon.displayName = 'DesktopMacDashboardIcon'

DesktopMacDashboardIcon.defaultProps = {
  size: 24
}

export default DesktopMacDashboardIcon