import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BagPersonalOutlineIcon = ({
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
    <path d='M16,5V4C16,2.9 15.1,2 14,2H10C8.9,2 8,2.9 8,4V5C5.79,5 4,6.79 4,9V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V9C20,6.79 18.21,5 16,5M10,4H14V5H10V4M12,9L14,11L12,13L10,11L12,9M18,20H6V16H8V18H9V16H18V20M18,15H6V9C6,7.9 6.9,7 8,7H16C17.1,7 18,7.9 18,9V15Z' />
  </Svg>
)

BagPersonalOutlineIcon.displayName = 'BagPersonalOutlineIcon'

BagPersonalOutlineIcon.defaultProps = {
  size: 24
}

export default BagPersonalOutlineIcon