import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PineTreeBoxIcon = ({
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
    <path d='M4,2H20C21.1,2 22,2.9 22,4V20C22,21.1 21.1,22 20,22H4C2.9,22 2,21.1 2,20V4C2,2.9 2.9,2 4,2M11,19H13V17H18L14,13H17L13,9H16L12,5L8,9H11L7,13H10L6,17H11V19Z' />
  </Svg>
)

PineTreeBoxIcon.displayName = 'PineTreeBoxIcon'

PineTreeBoxIcon.defaultProps = {
  size: 24
}

export default PineTreeBoxIcon