import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowUpCircleOutlineIcon = ({
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
    <path d='M13,18H11V10L7.5,13.5L6.08,12.08L12,6.16L17.92,12.08L16.5,13.5L13,10V18M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20C16.42,20 20,16.42 20,12C20,7.58 16.42,4 12,4Z' />
  </Svg>
)

ArrowUpCircleOutlineIcon.displayName = 'ArrowUpCircleOutlineIcon'

ArrowUpCircleOutlineIcon.defaultProps = {
  size: 24
}

export default ArrowUpCircleOutlineIcon