import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MinusBoxOutlineIcon = ({
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
    <path d='M19,19V5H5V19H19M19,3C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.89 3.9,3 5,3H19M17,11V13H7V11H17Z' />
  </Svg>
)

MinusBoxOutlineIcon.displayName = 'MinusBoxOutlineIcon'

MinusBoxOutlineIcon.defaultProps = {
  size: 24
}

export default MinusBoxOutlineIcon