import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CameraRearIcon = ({
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
    <path d='M12,6C10.89,6 10,5.1 10,4C10,2.9 10.9,2 12,2C13.09,2 14,2.9 14,4C14,5.1 13.1,6 12,6M17,0H7C5.9,0 5,0.9 5,2V16C5,17.1 5.9,18 7,18H17C18.1,18 19,17.1 19,16V2C19,0.9 18.1,0 17,0M14,20V22H19V20M10,20H5V22H10V24L13,21L10,18V20Z' />
  </Svg>
)

CameraRearIcon.displayName = 'CameraRearIcon'

CameraRearIcon.defaultProps = {
  size: 24
}

export default CameraRearIcon