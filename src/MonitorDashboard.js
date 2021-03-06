import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MonitorDashboardIcon = ({
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
    <path d='M21,16V4H3V16H21M21,2C22.1,2 23,2.9 23,4V16C23,17.1 22.1,18 21,18H14V20H16V22H8V20H10V18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M5,6H14V11H5V6M15,6H19V8H15V6M19,9V14H15V9H19M5,12H9V14H5V12M10,12H14V14H10V12Z' />
  </Svg>
)

MonitorDashboardIcon.displayName = 'MonitorDashboardIcon'

MonitorDashboardIcon.defaultProps = {
  size: 24
}

export default MonitorDashboardIcon