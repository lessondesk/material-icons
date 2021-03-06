import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const DesktopTowerIcon = ({
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
    <path d='M8,2H16C17.1,2 18,2.9 18,4V20C18,21.1 17.1,22 16,22H8C6.9,22 6,21.1 6,20V4C6,2.9 6.9,2 8,2M8,4V6H16V4H8M16,8H8V10H16V8M16,18H14V20H16V18Z' />
  </Svg>
)

DesktopTowerIcon.displayName = 'DesktopTowerIcon'

DesktopTowerIcon.defaultProps = {
  size: 24
}

export default DesktopTowerIcon