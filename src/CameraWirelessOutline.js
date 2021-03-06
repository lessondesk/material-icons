import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CameraWirelessOutlineIcon = ({
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
    <path d='M20,9V20H4V8H8.05L9.88,6H15V4H9L7.17,6H4C2.9,6 2,6.9 2,8V20C2,21.1 2.9,22 4,22H20C21.1,22 22,21.1 22,20V9H20M20.67,8H22C22,4.68 19.31,2 16,2V3.33C18.58,3.33 20.66,5.41 20.67,8M18,8H19.33C19.32,6.15 17.84,4.67 16,4.67V6C17.11,6 18,6.89 18,8M7,14C7,16.76 9.24,19 12,19C14.76,19 17,16.76 17,14C17,11.24 14.76,9 12,9C9.24,9 7,11.24 7,14M15,14C15,15.66 13.66,17 12,17C10.34,17 9,15.66 9,14C9,12.34 10.34,11 12,11C13.66,11 15,12.34 15,14Z' />
  </Svg>
)

CameraWirelessOutlineIcon.displayName = 'CameraWirelessOutlineIcon'

CameraWirelessOutlineIcon.defaultProps = {
  size: 24
}

export default CameraWirelessOutlineIcon