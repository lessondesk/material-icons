import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CloseBoxIcon = ({
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
    <path d='M19,3H16.3H7.7H5C3.9,3 3,3.9 3,5V7.7V16.4V19C3,20.1 3.9,21 5,21H7.7H16.4H19C20.1,21 21,20.1 21,19V16.3V7.7V5C21,3.9 20.1,3 19,3M15.6,17L12,13.4L8.4,17L7,15.6L10.6,12L7,8.4L8.4,7L12,10.6L15.6,7L17,8.4L13.4,12L17,15.6L15.6,17Z' />
  </Svg>
)

CloseBoxIcon.displayName = 'CloseBoxIcon'

CloseBoxIcon.defaultProps = {
  size: 24
}

export default CloseBoxIcon