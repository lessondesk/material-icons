import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaQBoxOutlineIcon = ({
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
    <path d='M5,4H19C20.1,4 21,4.9 21,6V20C21,21.1 20.1,22 19,22H5C3.9,22 3,21.1 3,20V6C3,4.9 3.9,4 5,4M5,6V20H19V6H5M11,7H13C14.1,7 15,7.9 15,9V15C15,16.1 14.1,17 13,17V19H11V17C9.9,17 9,16.1 9,15V9C9,7.9 9.9,7 11,7M11,9V15H13V9H11Z' />
  </Svg>
)

AlphaQBoxOutlineIcon.displayName = 'AlphaQBoxOutlineIcon'

AlphaQBoxOutlineIcon.defaultProps = {
  size: 24
}

export default AlphaQBoxOutlineIcon