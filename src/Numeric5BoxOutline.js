import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Numeric5BoxOutlineIcon = ({
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
    <path d='M15,15V13C15,11.89 14.1,11 13,11H11V9H15V7H9V13H13V15H9V17H13C14.1,17 15,16.1 15,15M19,19H5V5H19M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3Z' />
  </Svg>
)

Numeric5BoxOutlineIcon.displayName = 'Numeric5BoxOutlineIcon'

Numeric5BoxOutlineIcon.defaultProps = {
  size: 24
}

export default Numeric5BoxOutlineIcon