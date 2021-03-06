import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BagPersonalOffIcon = ({
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
    <path d='M20,19.35L2.38,1.73L1.11,3L4.77,6.66C4.27,7.34 4,8.16 4,9V20C4,21.1 4.9,22 6,22H18C18.56,22 19.08,21.76 19.46,21.35L20.84,22.73L22.11,21.46L20,19.35M9,16V18H8V16H6V15H13.11L14.11,16H9M20,9C20,6.79 18.21,5 16,5V4C16,2.9 15.1,2 14,2H10C8.9,2 8,2.9 8,4V4.8L20,16.8V9M14,5H10V4H14V5Z' />
  </Svg>
)

BagPersonalOffIcon.displayName = 'BagPersonalOffIcon'

BagPersonalOffIcon.defaultProps = {
  size: 24
}

export default BagPersonalOffIcon