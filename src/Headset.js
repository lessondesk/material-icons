import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HeadsetIcon = ({
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
    <path d='M12,1C7,1 3,5 3,10V17C3,18.66 4.34,20 6,20H9V12H5V10C5,6.13 8.13,3 12,3C15.87,3 19,6.13 19,10V12H15V20H19V21H12V23H18C19.66,23 21,21.66 21,20V10C21,5 16.97,1 12,1Z' />
  </Svg>
)

HeadsetIcon.displayName = 'HeadsetIcon'

HeadsetIcon.defaultProps = {
  size: 24
}

export default HeadsetIcon