import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Numeric9PlusCircleIcon = ({
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
    <path d='M19,11H17V9H15V11H13V13H15V15H17V13H19V11M10,7H8C6.9,7 6,7.9 6,9V11C6,12.11 6.9,13 8,13H10V15H6V17H10C11.1,17 12,16.1 12,15V9C12,7.89 11.1,7 10,7M8,9H10V11H8V9M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2Z' />
  </Svg>
)

Numeric9PlusCircleIcon.displayName = 'Numeric9PlusCircleIcon'

Numeric9PlusCircleIcon.defaultProps = {
  size: 24
}

export default Numeric9PlusCircleIcon