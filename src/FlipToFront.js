import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FlipToFrontIcon = ({
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
    <path d='M7,21H9V19H7M11,21H13V19H11M19,15H9V5H19M19,3H9C7.89,3 7,3.89 7,5V15C7,16.1 7.9,17 9,17H14L18,17H19C20.1,17 21,16.1 21,15V5C21,3.89 20.1,3 19,3M15,21H17V19H15M3,9H5V7H3M5,21V19H3C3,20.1 3.9,21 5,21M3,17H5V15H3M3,13H5V11H3V13Z' />
  </Svg>
)

FlipToFrontIcon.displayName = 'FlipToFrontIcon'

FlipToFrontIcon.defaultProps = {
  size: 24
}

export default FlipToFrontIcon