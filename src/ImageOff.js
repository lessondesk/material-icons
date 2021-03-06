import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ImageOffIcon = ({
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
    <path d='M2.28,3L1,4.27L3,6.27V19C3,20.1 3.9,21 5,21H17.73L19.73,23L21,21.72L2.28,3M4.83,3L21,19.17V5C21,3.89 20.1,3 19,3H4.83M8.5,13.5L11,16.5L12,15.25L14.73,18H5L8.5,13.5Z' />
  </Svg>
)

ImageOffIcon.displayName = 'ImageOffIcon'

ImageOffIcon.defaultProps = {
  size: 24
}

export default ImageOffIcon