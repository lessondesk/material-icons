import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const VirtualRealityIcon = ({
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
    <path d='M5,3C3.89,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3H5M6,9H7.5L8.5,12.43L9.5,9H11L9.25,15H7.75L6,9M13,9H16.5C17.35,9 18,9.65 18,10.5V11.5C18,12.1 17.6,12.65 17.1,12.9L18,15H16.5L15.65,13H14.5V15H13V9M14.5,10.5V11.5H16.5V10.5H14.5Z' />
  </Svg>
)

VirtualRealityIcon.displayName = 'VirtualRealityIcon'

VirtualRealityIcon.defaultProps = {
  size: 24
}

export default VirtualRealityIcon