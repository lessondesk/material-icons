import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ImageFilterCenterFocusIcon = ({
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
    <path d='M12,9C10.34,9 9,10.34 9,12C9,13.66 10.34,15 12,15C13.66,15 15,13.66 15,12C15,10.34 13.66,9 12,9M19,19H15V21H19C20.1,21 21,20.1 21,19V15H19M19,3H15V5H19V9H21V5C21,3.9 20.1,3 19,3M5,5H9V3H5C3.9,3 3,3.9 3,5V9H5M5,15H3V19C3,20.1 3.9,21 5,21H9V19H5V15Z' />
  </Svg>
)

ImageFilterCenterFocusIcon.displayName = 'ImageFilterCenterFocusIcon'

ImageFilterCenterFocusIcon.defaultProps = {
  size: 24
}

export default ImageFilterCenterFocusIcon