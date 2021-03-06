import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const VideoWirelessOutlineIcon = ({
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
    <path d='M15,12V20H5V12H15M16,10H4C3.45,10 3,10.45 3,11V21C3,21.55 3.45,22 4,22H16C16.55,22 17,21.55 17,21V17.5L21,21.5V10.5L17,14.5V11C17,10.45 16.55,10 16,10M3,3.86L4.4,5.24C7.5,2.19 12.5,2.19 15.6,5.24L17,3.86C13.14,0.05 6.87,0.05 3,3.86M5.8,6.63L7.2,8C8.75,6.5 11.25,6.5 12.8,8L14.2,6.63C11.88,4.34 8.12,4.34 5.8,6.63Z' />
  </Svg>
)

VideoWirelessOutlineIcon.displayName = 'VideoWirelessOutlineIcon'

VideoWirelessOutlineIcon.defaultProps = {
  size: 24
}

export default VideoWirelessOutlineIcon