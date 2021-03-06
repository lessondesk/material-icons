import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ImageMultipleIcon = ({
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
    <path d='M22,16V4C22,2.9 21.1,2 20,2H8C6.9,2 6,2.9 6,4V16C6,17.1 6.9,18 8,18H20C21.1,18 22,17.1 22,16M11,12L13.03,14.71L16,11L20,16H8M2,6V20C2,21.1 2.9,22 4,22H18V20H4V6' />
  </Svg>
)

ImageMultipleIcon.displayName = 'ImageMultipleIcon'

ImageMultipleIcon.defaultProps = {
  size: 24
}

export default ImageMultipleIcon