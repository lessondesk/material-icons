import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const VideoAccountIcon = ({
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
    <path d='M17,10.5L21,6.5V17.5L17,13.5V17C17,17.55 16.55,18 16,18H4C3.45,18 3,17.55 3,17V7C3,6.45 3.45,6 4,6H16C16.55,6 17,6.45 17,7V10.5M14,16V15C14,13.67 11.33,13 10,13C8.67,13 6,13.67 6,15V16H14M10,8C8.9,8 8,8.9 8,10C8,11.1 8.9,12 10,12C11.1,12 12,11.1 12,10C12,8.9 11.1,8 10,8Z' />
  </Svg>
)

VideoAccountIcon.displayName = 'VideoAccountIcon'

VideoAccountIcon.defaultProps = {
  size: 24
}

export default VideoAccountIcon