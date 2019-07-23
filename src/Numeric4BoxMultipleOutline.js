import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Numeric4BoxMultipleOutlineIcon = ({
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
    <path d='M21,17H7V3H21M21,1H7C5.9,1 5,1.9 5,3V17C5,18.1 5.9,19 7,19H21C22.1,19 23,18.1 23,17V3C23,1.9 22.1,1 21,1M15,15H17V5H15V9H13V5H11V11H15M3,5H1V21C1,22.1 1.9,23 3,23H19V21H3V5Z' />
  </Svg>
)

Numeric4BoxMultipleOutlineIcon.displayName = 'Numeric4BoxMultipleOutlineIcon'

Numeric4BoxMultipleOutlineIcon.defaultProps = {
  size: 24
}

export default Numeric4BoxMultipleOutlineIcon