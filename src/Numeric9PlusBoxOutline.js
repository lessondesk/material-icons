import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Numeric9PlusBoxOutlineIcon = ({
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
    <path d='M19,11H17V9H15V11H13V13H15V15H17V13H19V19H5V5H19M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M9,11V10H10V11M12,14V10C12,8.89 11.1,8 10,8H9C7.9,8 7,8.9 7,10V11C7,12.11 7.9,13 9,13H10V14H7V16H10C11.1,16 12,15.1 12,14Z' />
  </Svg>
)

Numeric9PlusBoxOutlineIcon.displayName = 'Numeric9PlusBoxOutlineIcon'

Numeric9PlusBoxOutlineIcon.defaultProps = {
  size: 24
}

export default Numeric9PlusBoxOutlineIcon