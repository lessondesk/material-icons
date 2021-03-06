import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Numeric9BoxMultipleOutlineIcon = ({
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
    <path d='M15,9H13V7H15M15,5H13C11.9,5 11,5.9 11,7V9C11,10.11 11.9,11 13,11H15V13H11V15H15C16.1,15 17,14.1 17,13V7C17,5.89 16.1,5 15,5M21,17H7V3H21M21,1H7C5.9,1 5,1.9 5,3V17C5,18.1 5.9,19 7,19H21C22.1,19 23,18.1 23,17V3C23,1.9 22.1,1 21,1M3,5H1V21C1,22.1 1.9,23 3,23H19V21H3V5Z' />
  </Svg>
)

Numeric9BoxMultipleOutlineIcon.displayName = 'Numeric9BoxMultipleOutlineIcon'

Numeric9BoxMultipleOutlineIcon.defaultProps = {
  size: 24
}

export default Numeric9BoxMultipleOutlineIcon