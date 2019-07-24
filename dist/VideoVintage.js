import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const VideoVintageIcon = ({
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
    <path d='M18,14.5V11C18,10.45 17.55,10 17,10H16C18.24,8.39 18.76,5.27 17.15,3C15.54,0.78 12.42,0.26 10.17,1.87C9.5,2.35 8.96,3 8.6,3.73C6.25,2.28 3.17,3 1.72,5.37C0.28,7.72 1,10.8 3.36,12.25C3.57,12.37 3.78,12.5 4,12.58V21C4,21.55 4.45,22 5,22H17C17.55,22 18,21.55 18,21V17.5L22,21.5V10.5L18,14.5M13,4C14.1,4 15,4.9 15,6C15,7.1 14.1,8 13,8C11.9,8 11,7.1 11,6C11,4.9 11.9,4 13,4M6,6C7.1,6 8,6.9 8,8C8,9.1 7.1,10 6,10C4.9,10 4,9.1 4,8C4,6.9 4.9,6 6,6Z' />
  </Svg>
)

VideoVintageIcon.displayName = 'VideoVintageIcon'

VideoVintageIcon.defaultProps = {
  size: 24
}

export default VideoVintageIcon