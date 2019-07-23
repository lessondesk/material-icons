import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Numeric8BoxMultipleOutlineIcon = ({
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
    <path d='M13,11H15V13H13M13,7H15V9H13M13,15H15C16.1,15 17,14.1 17,13V11.5C17,10.67 16.33,10 15.5,10C16.33,10 17,9.33 17,8.5V7C17,5.89 16.1,5 15,5H13C11.9,5 11,5.9 11,7V8.5C11,9.33 11.67,10 12.5,10C11.67,10 11,10.67 11,11.5V13C11,14.11 11.9,15 13,15M21,17H7V3H21M21,1H7C5.9,1 5,1.9 5,3V17C5,18.1 5.9,19 7,19H21C22.1,19 23,18.1 23,17V3C23,1.9 22.1,1 21,1M3,5H1V21C1,22.1 1.9,23 3,23H19V21H3V5Z' />
  </Svg>
)

Numeric8BoxMultipleOutlineIcon.displayName = 'Numeric8BoxMultipleOutlineIcon'

Numeric8BoxMultipleOutlineIcon.defaultProps = {
  size: 24
}

export default Numeric8BoxMultipleOutlineIcon