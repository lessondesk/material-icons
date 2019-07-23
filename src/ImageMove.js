import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ImageMoveIcon = ({
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
    <path d='M15,3H19V0L24,5L19,10V7H15V3M21,11.94V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3H12.06C12,3.33 12,3.67 12,4C12,8.42 15.58,12 20,12C20.33,12 20.67,12 21,11.94M19,18L14.5,12L11,16.5L8.5,13.5L5,18H19Z' />
  </Svg>
)

ImageMoveIcon.displayName = 'ImageMoveIcon'

ImageMoveIcon.defaultProps = {
  size: 24
}

export default ImageMoveIcon