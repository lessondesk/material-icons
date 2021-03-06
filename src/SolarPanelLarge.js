import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SolarPanelLargeIcon = ({
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
    <path d='M3,6H6V3H3V6M8,3V6H11V3H8M13,3V6H16V3H13M18,3V6H21V3H18M21,8H18V11H21V8M21,13H18V16H21V13M16,16V13H13V16H16M11,16V13H8V16H11M6,16V13H3V16H6M3,11H6V8H3V11M13,8V11H16V8H13M8,8V11H11V8H8M3,1H21C22.1,1 23,1.9 23,3V16C23,17.1 22.1,18 21,18H15V21H18V23H13V18H11V23H6V21H9V18H3C1.9,18 1,17.1 1,16V3C1,1.9 1.9,1 3,1Z' />
  </Svg>
)

SolarPanelLargeIcon.displayName = 'SolarPanelLargeIcon'

SolarPanelLargeIcon.defaultProps = {
  size: 24
}

export default SolarPanelLargeIcon