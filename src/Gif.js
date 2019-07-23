import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GifIcon = ({
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
    <path d='M11,8H13V16H11V8M7.67,8H4.33C3.53,8 3,8.67 3,9.33V14.67C3,15.33 3.53,16 4.33,16H7.67C8.47,16 9,15.33 9,14.67V12H7V14H5V10H9V9.33C9,8.67 8.47,8 7.67,8M21,10V8H15V16H17V14H19.5V12H17V10H21Z' />
  </Svg>
)

GifIcon.displayName = 'GifIcon'

GifIcon.defaultProps = {
  size: 24
}

export default GifIcon