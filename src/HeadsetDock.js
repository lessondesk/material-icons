import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HeadsetDockIcon = ({
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
    <path d='M2,18H9V6.13C7.27,6.57 6,8.14 6,10V11H8V17H6C4.9,17 4,16.1 4,15V10C4,6.69 6.69,4 10,4H11C14.31,4 17,6.69 17,10V12H18V9H20V12C20,13.1 19.1,14 18,14H17V15C17,16.1 16.1,17 15,17H13V11H15V10C15,8.14 13.73,6.57 12,6.13V18H22V20H2V18Z' />
  </Svg>
)

HeadsetDockIcon.displayName = 'HeadsetDockIcon'

HeadsetDockIcon.defaultProps = {
  size: 24
}

export default HeadsetDockIcon