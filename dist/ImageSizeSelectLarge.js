import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ImageSizeSelectLargeIcon = ({
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
    <path d='M21,15H23V17H21V15M21,11H23V13H21V11M23,19H21V21C22,21 23,20 23,19M13,3H15V5H13V3M21,7H23V9H21V7M21,3V5H23C23,4 22,3 21,3M1,7H3V9H1V7M17,3H19V5H17V3M17,19H19V21H17V19M3,3C2,3 1,4 1,5H3V3M9,3H11V5H9V3M5,3H7V5H5V3M1,11V19C1,20.1 1.9,21 3,21H15V11H1M3,19L5.5,15.79L7.29,17.94L9.79,14.72L13,19H3Z' />
  </Svg>
)

ImageSizeSelectLargeIcon.displayName = 'ImageSizeSelectLargeIcon'

ImageSizeSelectLargeIcon.defaultProps = {
  size: 24
}

export default ImageSizeSelectLargeIcon