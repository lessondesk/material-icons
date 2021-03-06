import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Numeric9PlusCircleOutlineIcon = ({
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
    <path d='M19,11V13H17V15H15V13H13V11H15V9H17V11H19M10,7C11.1,7 12,7.9 12,9V15C12,16.11 11.1,17 10,17H6V15H10V13H8C6.9,13 6,12.1 6,11V9C6,7.89 6.9,7 8,7H10M8,9V11H10V9H8M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20C16.42,20 20,16.42 20,12C20,7.58 16.42,4 12,4Z' />
  </Svg>
)

Numeric9PlusCircleOutlineIcon.displayName = 'Numeric9PlusCircleOutlineIcon'

Numeric9PlusCircleOutlineIcon.defaultProps = {
  size: 24
}

export default Numeric9PlusCircleOutlineIcon