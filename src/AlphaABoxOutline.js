import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaABoxOutlineIcon = ({
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
    <path d='M3,5C3,3.9 3.9,3 5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.89,21 3,20.1 3,19V5M5,5V19H19V5H5M11,7H13C14.1,7 15,7.9 15,9V17H13V13H11V17H9V9C9,7.9 9.9,7 11,7M11,9V11H13V9H11Z' />
  </Svg>
)

AlphaABoxOutlineIcon.displayName = 'AlphaABoxOutlineIcon'

AlphaABoxOutlineIcon.defaultProps = {
  size: 24
}

export default AlphaABoxOutlineIcon