import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const LedOutlineIcon = ({
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
    <path d='M12,6C9.79,6 8,7.79 8,10V16H6V18H9V23H11V18H13V23H15V18H18V16H16V10C16,7.79 14.21,6 12,6M12,8C13.1,8 14,8.9 14,10V15H10V10C10,8.9 10.9,8 12,8Z' />
  </Svg>
)

LedOutlineIcon.displayName = 'LedOutlineIcon'

LedOutlineIcon.defaultProps = {
  size: 24
}

export default LedOutlineIcon