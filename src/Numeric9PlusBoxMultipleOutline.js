import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Numeric9PlusBoxMultipleOutlineIcon = ({
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
    <path d='M21,9H19V7H17V9H15V11H17V13H19V11H21V17H7V3H21M21,1H7C5.9,1 5,1.9 5,3V17C5,18.1 5.9,19 7,19H21C22.1,19 23,18.1 23,17V3C23,1.9 22.1,1 21,1M11,9V8H12V9M14,12V8C14,6.89 13.1,6 12,6H11C9.9,6 9,6.9 9,8V9C9,10.11 9.9,11 11,11H12V12H9V14H12C13.1,14 14,13.1 14,12M3,5H1V21C1,22.1 1.9,23 3,23H19V21H3V5Z' />
  </Svg>
)

Numeric9PlusBoxMultipleOutlineIcon.displayName = 'Numeric9PlusBoxMultipleOutlineIcon'

Numeric9PlusBoxMultipleOutlineIcon.defaultProps = {
  size: 24
}

export default Numeric9PlusBoxMultipleOutlineIcon